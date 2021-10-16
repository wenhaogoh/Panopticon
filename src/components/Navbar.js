import React from "react";
import styled from "styled-components";
import { Button, FrameCorners, Text } from "@arwes/core";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1500px;
  margin: 0 auto;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Button FrameComponent={FrameCorners} palette="primary" active>
        <Text>About</Text>
      </Button>
      <Button FrameComponent={FrameCorners} palette="primary" active>
        <Text>Game</Text>
      </Button>
    </Wrapper>
  );
};

export default Navbar;
