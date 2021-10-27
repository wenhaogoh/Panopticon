import { Button, FrameBox, FrameLines, LoadingBars, Text } from "@arwes/core";
import { useBleeps } from "@arwes/sounds";
import React, { useEffect, useState } from "react";
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

  const [displayBackground, setDisplayBackground] = useState(false);
  const [displayQuestion, setDisplayQuestion] = useState(false);

  const [warning, setWarning] = useState(false);

  const bleeps = useBleeps();

  useEffect(() => {
    return () => {
      bleeps.bgm.stop();
    };
  }, [bleeps]);

  const onDisclaimerClickHandler = () => {
    const funcs = [
      [() => setActivateDisclaimer(false), 0],
      [() => setDisplayDisclaimer(false), 500],
      [() => setDisplayLoading(true), 500],
      [() => setIsLoading(true), 500],
      [() => setIsLoading(false), 3000],
      [() => setDisplayLoading(false), 500],
      [() => bleeps.bgm.play(), 0],
      [() => setDisplayBackground(true), 0],
      [() => setDisplayQuestion(true), 0],
    ];
    bleeps.tap.play();
    callFuncs(0, funcs);
  };

  const warningHandler = (bool) => {
    setWarning(bool);
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
      {displayQuestion && <Questions warningHandler={warningHandler} />}
    </>
  );
};

export default Stage;
