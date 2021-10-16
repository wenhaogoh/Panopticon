import { Button, Card, FrameCorners, LoadingBars, Text } from "@arwes/core";
import { useBleeps } from "@arwes/sounds";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { callFuncs } from "../utils/callFuncs";

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Stage = () => {
  const [isFirstMount, setIsFirstMount] = useState(true);

  const [displayLoading, setDisplayLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [displayIntro, setDisplayIntro] = useState(false);
  const [activateIntro, setActivateIntro] = useState(false);

  const [displayQuestion, setDisplayQuestion] = useState(false);
  const [activateQuestion, setActivateQuestion] = useState(false);

  const bleeps = useBleeps();

  const onStartClickHandler = () => {
    const funcs = [
      [() => setActivateIntro(false), 0],
      [() => setDisplayIntro(false), 500],
      [() => setDisplayQuestion(true), 0],
      [() => setActivateQuestion(true), 0],
    ];
    bleeps.tap.play();
    callFuncs(0, funcs);
  };

  const onOptionClickHandler = () => {
    const funcs = [
      [() => setActivateQuestion(false), 0],
      [() => setActivateQuestion(true), 1000],
    ];
    bleeps.tap.play();
    callFuncs(0, funcs);
  };

  useEffect(() => {
    const funcs = [
      [
        () => {
          setIsLoading(true);
        },
        1000,
      ],
      [() => setIsLoading(false), 3000],
      [() => setDisplayLoading(false), 500],
      [() => setDisplayIntro(true), 0],
      [() => setActivateIntro(true), 0],
    ];

    const callFuncs = (index) => {
      if (index === funcs.length) {
        return;
      }
      const func = funcs[index][0];
      const timeout = funcs[index][1];
      setTimeout(() => {
        func();
        callFuncs(index + 1);
      }, timeout);
    };

    if (isFirstMount) {
      setIsFirstMount(false);
      callFuncs(0);
    }
  }, [isFirstMount]);
  return (
    <>
      {displayLoading ? (
        <LoadingBars animator={{ activate: isLoading }} />
      ) : null}
      {displayIntro ? (
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
      ) : null}
      {displayQuestion ? (
        <Card
          options={
            <OptionsWrapper>
              <Button
                active
                FrameComponent={FrameCorners}
                palette="primary"
                onClick={onOptionClickHandler}
              >
                <Text>Option A</Text>
              </Button>
              <Button
                active
                FrameComponent={FrameCorners}
                palette="primary"
                onClick={onOptionClickHandler}
              >
                <Text>Option B</Text>
              </Button>
            </OptionsWrapper>
          }
          animator={{ activate: activateQuestion }}
          style={{ maxWidth: 500 }}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pretium ut eros et sagittis. Donec rutrum maximus nulla, in vehicula
            lacus aliquam nec. Pellentesque a dolor non lacus vestibulum
            malesuada. Ut suscipit eu dolor a interdum. Etiam id velit
            facilisis, convallis dolor at, cursus dolor. Morbi in dui tellus.
            Praesent ullamcorper tortor et est tristique, non pretium metus
            pellentesque. Vestibulum sit amet ipsum porttitor, tempus est sed,
            gravida nisi.
          </Text>
        </Card>
      ) : null}
    </>
  );
};

export default Stage;
