import React, { useState } from "react";
import { Button, Card, FrameCorners, Text } from "@arwes/core";
import { useBleeps } from "@arwes/sounds";
import styled from "styled-components";
import { callFuncs } from "../utils/callFuncs";

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Questions = (props) => {
  const [activateQuestion, setActivateQuestion] = useState(true);
  const bleeps = useBleeps();
  const onOptionClickHandler = () => {
    const funcs = [
      [() => setActivateQuestion(false), 0],
      [() => setActivateQuestion(true), 1000],
    ];
    bleeps.tap.play();
    callFuncs(0, funcs);
    props.warningHandler();
  };

  return (
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium
        ut eros et sagittis. Donec rutrum maximus nulla, in vehicula lacus
        aliquam nec. Pellentesque a dolor non lacus vestibulum malesuada. Ut
        suscipit eu dolor a interdum. Etiam id velit facilisis, convallis dolor
        at, cursus dolor. Morbi in dui tellus. Praesent ullamcorper tortor et
        est tristique, non pretium metus pellentesque. Vestibulum sit amet ipsum
        porttitor, tempus est sed, gravida nisi.
      </Text>
    </Card>
  );
};

export default Questions;
