import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Eye from "./Eye";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
`;

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Background = (props) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const eyes = [];

  for (let i = 0; i * 100 <= windowDimensions.height - 50; i++) {
    for (let j = 0; j * 100 <= windowDimensions.width - 50; j++) {
      if (
        (j === 1 && i > 0 && (i + 1) * 100 < windowDimensions.height - 50) ||
        ((j + 2) * 100 > windowDimensions.width - 50 &&
          (j + 1) * 100 < windowDimensions.width - 50 &&
          i > 0 &&
          (i + 1) * 100 < windowDimensions.height - 50)
      ) {
        eyes.push(
          <Eye
            id={nanoid(4)}
            key={nanoid(4)}
            style={{
              position: "fixed",
              left: `${j * 100}px`,
              top: `${i * 100}px`,
            }}
            red={props.red}
          />
        );
      } else if (
        (i === 1 && j > 0 && (j + 2) * 100 < windowDimensions.width - 50) ||
        ((i + 2) * 100 > windowDimensions.height - 50 &&
          (i + 1) * 100 < windowDimensions.height - 50 &&
          j > 0 &&
          (j + 2) * 100 < windowDimensions.width - 50)
      ) {
        eyes.push(
          <Eye
            id={nanoid(4)}
            key={nanoid(4)}
            style={{
              position: "fixed",
              left: `${j * 100}px`,
              top: `${i * 100}px`,
            }}
            red={props.red}
          />
        );
      }
    }
  }

  return <Wrapper>{eyes}</Wrapper>;
};

export default Background;
