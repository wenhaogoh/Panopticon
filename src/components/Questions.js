import React, { useState } from "react";
import { Button, Card, FrameCorners, Table, Text } from "@arwes/core";
import { useBleeps } from "@arwes/sounds";
import styled from "styled-components";
import { callFuncs } from "../utils/callFuncs";
import { intro, questions, rules } from "../consts/content";

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Questions = (props) => {
  const [displayIntro, setDisplayIntro] = useState(true);
  const [displayRules, setDisplayRules] = useState(false);
  const [displayWarning, setDisplayWarning] = useState(false);
  const [displayEnding, setDisplayEnding] = useState(false);
  const [activateCard, setActivateCard] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [warningCount, setWarningCount] = useState(0);
  const [warningMessage, setWarningMessage] = useState("");
  const [logs, setLogs] = useState([]);
  const bleeps = useBleeps();

  const question = questions[questionIndex];

  const onStartClickHandler = () => {
    const funcs = [
      [() => setActivateCard(false), 0],
      [() => setDisplayIntro(false), 500],
      [() => setDisplayRules(true), 0],
      [() => setActivateCard(true), 500],
    ];
    bleeps.tap.play();
    callFuncs(0, funcs);
  };

  const onAcceptClickHandler = () => {
    const funcs = [
      [() => setActivateCard(false), 0],
      [() => setDisplayRules(false), 500],
      [() => setActivateCard(true), 500],
    ];
    bleeps.tap.play();
    callFuncs(0, funcs);
  };

  const onOptionClickHandler = (time, option) => {
    bleeps.tap.play();

    if (option.log) {
      const updatedLogs = [...logs];
      updatedLogs.push([time, option.log, option.source]);
      setLogs(updatedLogs);
    }

    if (option.warningMessage) {
      bleeps.warning.play();
      setWarningMessage(option.warningMessage);
      setWarningCount(warningCount + 1);
      props.warningHandler(true);
      const funcs = [
        [() => setActivateCard(false), 0],
        [() => setDisplayWarning(true), 500],
        [() => setActivateCard(true), 500],
      ];
      callFuncs(0, funcs);
      return;
    }

    const funcs = [
      [() => setActivateCard(false), 0],
      [() => setNextQuestion(), 500],
      [() => setActivateCard(true), 500],
    ];

    callFuncs(0, funcs);
  };

  const onRestartHandler = () => {
    bleeps.tap.play();
    const funcs = [
      [() => setActivateCard(false), 0],
      [() => reset(), 500],
      [() => setActivateCard(true), 500],
    ];
    callFuncs(0, funcs);
  };

  const onAcknowledgeWarningHandler = () => {
    bleeps.tap.play();
    props.warningHandler(false);
    if (warningCount >= 3) {
      const funcs = [
        [() => setActivateCard(false), 0],
        [() => reset(), 500],
        [() => setActivateCard(true), 500],
      ];
      callFuncs(0, funcs);
      return;
    }
    const funcs = [
      [() => setActivateCard(false), 0],
      [() => setDisplayWarning(false), 500],
      [() => setNextQuestion(), 0],
      [() => setActivateCard(true), 500],
    ];
    callFuncs(0, funcs);
  };

  const setNextQuestion = () => {
    if (questionIndex === questions.length - 1) {
      setDisplayEnding(true);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const reset = () => {
    setQuestionIndex(0);
    setDisplayWarning(false);
    setDisplayEnding(false);
    setDisplayIntro(true);
    setWarningCount(0);
    setLogs([]);
  };

  const generateWarningMessage = (warningCount) => {
    let message;
    switch (warningCount) {
      case 1:
        message = "This is your first warning.";
        break;
      case 2:
        message = "This is your second and final warning";
        break;
      case 3:
        message =
          "You have received 3 warnings. Please report to the nearest police station.";
        break;
      default:
        message = "Something went wrong!.";
        break;
    }
    return message;
  };

  const generateEnding = () => {
    const headers = [
      { data: "Time" },
      { data: "Activity" },
      { data: "Source" },
    ];
    const dataset = logs.map((log, index) => ({
      index: index,
      columns: [
        {
          data: log[0],
        },
        {
          data: log[1],
        },
        {
          data: log[2],
        },
      ],
    }));
    return (
      <Table
        style={{ maxHeight: "200px" }}
        columnWidths={["70px", "420px", "120px"]}
        animator={{ activate: activateCard }}
        headers={headers}
        dataset={dataset}
      />
    );
  };

  return (
    <Card
      title={
        displayIntro
          ? intro.title
          : displayRules
          ? rules.title
          : displayWarning
          ? ""
          : displayEnding
          ? "Logs for Citizen #1893673 on 12/08/2050"
          : question.title
      }
      image={!displayIntro && !displayWarning && question.image}
      options={
        displayIntro ? (
          <Button palette="success" onClick={onStartClickHandler} active>
            <Text>Start</Text>
          </Button>
        ) : displayRules ? (
          <Button palette="success" onClick={onAcceptClickHandler} active>
            <Text>Accept</Text>
          </Button>
        ) : (
          <OptionsWrapper>
            {displayWarning ? (
              <Button
                active
                FrameComponent={FrameCorners}
                palette="primary"
                onClick={() => onAcknowledgeWarningHandler()}
              >
                <Text>{warningCount >= 3 ? "Game Over" : "I understand"}</Text>
              </Button>
            ) : displayEnding ? (
              <Button
                active
                FrameComponent={FrameCorners}
                palette="primary"
                onClick={() => onRestartHandler()}
              >
                <Text>Restart</Text>
              </Button>
            ) : (
              question.options.map((option) => (
                <Button
                  active
                  FrameComponent={FrameCorners}
                  palette="primary"
                  onClick={() => onOptionClickHandler(question.title, option)}
                >
                  <Text>{option.text}</Text>
                </Button>
              ))
            )}
          </OptionsWrapper>
        )
      }
      animator={{ activate: activateCard }}
    >
      {displayEnding ? (
        generateEnding()
      ) : (
        <Text
          style={{
            maxHeight: "200px",
            maxWidth: "600px",
            overflowY: "auto",
            textAlign: displayWarning && "center",
          }}
          animator={{ activate: activateCard }}
        >
          {displayWarning && warningMessage}
          {displayWarning && <br />}
          {displayWarning && <br />}
          {displayIntro
            ? intro.text
            : displayRules
            ? rules.text
            : displayWarning
            ? generateWarningMessage(warningCount)
            : question.text}
        </Text>
      )}
    </Card>
  );
};

export default Questions;
