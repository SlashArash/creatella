import styled, { keyframes } from "styled-components";

import colors from "utils/style/colors";

const dotPulse = keyframes`
  0% { transform: scale(0); }
  50% { transform: scale(1); }
  100% { transform: scale(0); }
`;

type IDotsProps = {
  delay: number;
};

export const Dot = styled("div")<IDotsProps>`
  background: ${colors.red};
  border-radius: 100%;
  width: 14px;
  height: 14px;
  display: inline-block;
  animation: ${dotPulse} 0.6s ease both infinite;
  animation-delay: ${(props) => `${props.delay}s`};
`;

export const Dots = styled("div")`
  align-self: center;
  text-align: center;
`;
