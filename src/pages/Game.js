import { BleepsProvider } from "@arwes/sounds";
import { AnimatorGeneralProvider } from "@arwes/animation";
import React, { useState } from "react";
import Stage from "../components/Stage";
import styled from "styled-components";
import { Button, Card, Text } from "@arwes/core";
import { callFuncs } from "../utils/callFuncs";

const SOUND_CLICK_URL = "/assets/sounds/click.mp3";
const SOUND_ASSEMBLE_URL = "/assets/sounds/assemble.mp3";
const SOUND_TYPE_URL = "/assets/sounds/type.mp3";

const audioSettings = {
  common: {
    volume: 0.5,
  },
};
const playersSettings = {
  assemble: {
    src: [SOUND_ASSEMBLE_URL],
  },
  click: {
    src: [SOUND_CLICK_URL],
  },
  type: { src: [SOUND_TYPE_URL], loop: true },
};
const bleepsSettings = {
  tap: {
    player: "click",
  },
  type: { player: "type" },
};
const generalAnimator = { duration: { enter: 300, exit: 300, stagger: 30 } };

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Game = () => {
  const [activeDisclaimer, setActivateDisclaimer] = useState(true);
  const [enter, setEnter] = useState(false);

  const funcs = [
    [() => setActivateDisclaimer(false), 0],
    [() => setEnter(true), 500],
  ];

  const onEnterClickHandler = () => {
    callFuncs(0, funcs);
  };

  return (
    <Wrapper>
      {enter ? (
        <BleepsProvider
          audioSettings={audioSettings}
          playersSettings={playersSettings}
          bleepsSettings={bleepsSettings}
        >
          <AnimatorGeneralProvider animator={generalAnimator}>
            <Stage />
          </AnimatorGeneralProvider>
        </BleepsProvider>
      ) : (
        <Card
          title="Disclaimer"
          options={
            <Button palette="success" onClick={onEnterClickHandler} active>
              <Text>Enter</Text>
            </Button>
          }
          animator={{ activate: activeDisclaimer }}
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
      )}
    </Wrapper>
  );
};

export default Game;
