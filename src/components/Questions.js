import React, { useState } from "react";
import { Button, Card, FrameCorners, Text } from "@arwes/core";
import { useBleeps } from "@arwes/sounds";
import styled from "styled-components";
import { callFuncs } from "../utils/callFuncs";
import { intro, questions } from "../consts/content";

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Questions = (props) => {
  const [displayIntro, setDisplayIntro] = useState(true);
  const [displayWarning, setDisplayWarning] = useState(false);
  const [displayEnding, setDisplayEnding] = useState(false);

  const [activateCard, setActivateCard] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [warningCount, setWarningCount] = useState(0);
  const bleeps = useBleeps();

  const question = questions[questionIndex];

  const onStartClickHandler = () => {
    const funcs = [
      [() => setActivateCard(false), 0],
      [() => setDisplayIntro(false), 500],
      [() => setActivateCard(true), 500],
    ];
    bleeps.tap.play();
    callFuncs(0, funcs);
  };

  const onOptionClickHandler = (option) => {
    bleeps.tap.play();
    if (option.warning) {
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
      onRestartHandler();
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
        message = "Say goodbye.";
        break;
      default:
        message = "Something went wrong!.";
        break;
    }
    return message;
  };

  return (
    <Card
      title={
        displayIntro
          ? intro.title
          : displayWarning
          ? ""
          : displayEnding
          ? "Well done citizen."
          : question.title
      }
      image={!displayIntro && !displayWarning && question.image}
      options={
        displayIntro ? (
          <Button palette="success" onClick={onStartClickHandler} active>
            <Text>Start</Text>
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
                <Text>{warningCount >= 3 ? "Restart" : "I understand"}</Text>
              </Button>
            ) : displayEnding ? (
              <Button
                active
                FrameComponent={FrameCorners}
                palette="primary"
                onClick={() => onRestartHandler()}
              >
                <Text>{"Restart"}</Text>
              </Button>
            ) : (
              question.options.map((option) => (
                <Button
                  active
                  FrameComponent={FrameCorners}
                  palette="primary"
                  onClick={() => onOptionClickHandler(option)}
                >
                  <Text>{option.text}</Text>
                </Button>
              ))
            )}
          </OptionsWrapper>
        )
      }
      animator={{ activate: activateCard }}
      style={{ maxWidth: 500 }}
    >
      <Text>
        {displayIntro
          ? intro.text
          : displayWarning
          ? generateWarningMessage(warningCount)
          : question.text}
      </Text>
    </Card>
  );
};

export default Questions;
