import { BleepsProvider } from "@arwes/sounds";

import React, { useState } from "react";
import Stage from "../components/Stage";
import styled from "styled-components";
import { nanoid } from "nanoid";
import Eye from "../components/Eye";

const SOUND_CLICK_URL = "/assets/sounds/click.mp3";
const SOUND_ASSEMBLE_URL = "/assets/sounds/assemble.mp3";
const SOUND_TYPE_URL = "/assets/sounds/type.mp3";
const SOUND_BGM_URL = "/assets/sounds/bgm.mp3";

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
  bgm: {
    src: [SOUND_BGM_URL],
    loop: true,
  },
};
const bleepsSettings = {
  tap: {
    player: "click",
  },
  type: { player: "type" },
  bgm: {
    player: "bgm",
  },
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledEye = styled(Eye)`
  display: flex;
  &:hover {
    .eyeball {
      fill: red;
    }
    cursor: pointer;
  }
`;

const Game = () => {
  const [enter, setEnter] = useState(false);

  const onEnterClickHandler = () => {
    setEnter(true);
  };

  return (
    <Wrapper>
      {enter ? (
        <BleepsProvider
          audioSettings={audioSettings}
          playersSettings={playersSettings}
          bleepsSettings={bleepsSettings}
        >
          <Stage />
        </BleepsProvider>
      ) : (
        <StyledEye id={nanoid(4)} onClick={onEnterClickHandler} />
      )}
    </Wrapper>
  );
};

export default Game;
