import React, { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Eye = (props) => {
  useEffect(() => {
    if (!props.red) {
      let eyeBall = document.querySelector(`#eyeball-${props.id}`),
        pupil = document.querySelector(`#pupil-${props.id}`),
        eyeArea = eyeBall.getBoundingClientRect(),
        pupilArea = pupil.getBoundingClientRect(),
        R = eyeArea.width / 2,
        r = pupilArea.width / 2,
        centerX = eyeArea.left + R,
        centerY = eyeArea.top + R;

      document.addEventListener("mousemove", (e) => {
        if (Math.hypot(e.clientX - centerX, e.clientY - centerY) < R) {
          pupil.style.transformOrigin = `${r + "px"} center`;
          pupil.style.transform = `translate(${
            ((R - r) / R) * (e.clientX - centerX) + "px"
          }, ${((R - r) / R) * (e.clientY - centerY) + "px"})`;
        } else {
          let x = e.clientX - centerX,
            y = e.clientY - centerY,
            theta = Math.atan2(y, x),
            angle = (theta * 180) / Math.PI + 360;

          pupil.style.transform = `translateX(${R - r + "px"}) rotate(${
            angle + "deg"
          })`;
          pupil.style.transformOrigin = `${r + "px"} center`;
        }
      });
    }
  }, [props.id, props.red]);

  return (
    <Wrapper {...props}>
      <svg width="100" height="100" className="eye" id={"eye-" + props.id}>
        <circle
          cx="50"
          cy="50"
          r="50"
          fill={props.red ? "red" : "white"}
          className="eyeball"
          id={"eyeball-" + props.id}
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="black"
          className="pupil"
          id={"pupil-" + props.id}
        />
      </svg>
    </Wrapper>
  );
};

export default Eye;
