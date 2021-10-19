import {
  Button,
  Card,
  FrameBox,
  FrameLines,
  LoadingBars,
  Text,
} from "@arwes/core";
import { useBleeps } from "@arwes/sounds";
import React, { useState } from "react";
import styled from "styled-components";
import { callFuncs } from "../utils/callFuncs";
import Background from "./Background";
import Questions from "./Questions";

const DisclaimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Stage = () => {
  const [displayDisclaimer, setDisplayDisclaimer] = useState(true);
  const [activateDisclaimer, setActivateDisclaimer] = useState(true);

  const [displayLoading, setDisplayLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [displayIntro, setDisplayIntro] = useState(false);
  const [activateIntro, setActivateIntro] = useState(false);

  const [displayBackground, setDisplayBackground] = useState(false);
  const [displayQuestion, setDisplayQuestion] = useState(false);

  const [warning, setWarning] = useState(false);

  const bleeps = useBleeps();

  const onDisclaimerClickHandler = () => {
    const funcs = [
      [() => setActivateDisclaimer(false), 0],
      [() => setDisplayDisclaimer(false), 500],
      [() => setDisplayLoading(true), 500],
      [() => setIsLoading(true), 500],
      [() => setIsLoading(false), 3000],
      [() => setDisplayLoading(false), 500],
      [() => bleeps.bgm.play(), 0],
      [() => setDisplayIntro(true), 0],
      [() => setDisplayBackground(true), 0],
      [() => setActivateIntro(true), 0],
    ];
    bleeps.tap.play();
    callFuncs(0, funcs);
  };

  const onStartClickHandler = () => {
    const funcs = [
      [() => setActivateIntro(false), 0],
      [() => setDisplayIntro(false), 500],
      [() => setDisplayQuestion(true), 0],
    ];
    bleeps.tap.play();
    callFuncs(0, funcs);
  };

  const warningHandler = () => {
    setWarning(!warning);
  };

  return (
    <>
      {displayBackground && <Background red={warning} />}
      {displayDisclaimer && (
        <FrameLines animator={{ activate: activateDisclaimer }}>
          <DisclaimerWrapper>
            <Text style={{ marginBottom: "20px" }}>This game uses audio.</Text>
            <Button
              FrameComponent={FrameBox}
              onClick={onDisclaimerClickHandler}
              animator={{ activate: activateDisclaimer }}
            >
              Enter
            </Button>
          </DisclaimerWrapper>
        </FrameLines>
      )}
      {displayLoading && <LoadingBars animator={{ activate: isLoading }} />}
      {displayIntro && (
        <>
          <Card
            title="Panapticon"
            options={
              <Button palette="success" onClick={onStartClickHandler} active>
                <Text>Start</Text>
              </Button>
            }
            animator={{ activate: activateIntro }}
            style={{ maxWidth: 500 }}
          >
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              pretium ut eros et sagittis. Donec rutrum maximus nulla, in
              vehicula lacus aliquam nec. Pellentesque a dolor non lacus
              vestibulum malesuada. Ut suscipit eu dolor a interdum. Etiam id
              velit facilisis, convallis dolor at, cursus dolor. Morbi in dui
              tellus. Praesent ullamcorper tortor et est tristique, non pretium
              metus pellentesque. Vestibulum sit amet ipsum porttitor, tempus
              est sed, gravida nisi.
            </Text>
          </Card>
        </>
      )}

      {displayQuestion && <Questions warningHandler={warningHandler} />}
    </>
  );
};

export default Stage;
