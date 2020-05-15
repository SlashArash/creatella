import styled from "styled-components";

import { borderRadius } from "utils/style/common";
import colors from "utils/style/colors";

export const Wrapper = styled("main")`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: content-box;
`;

export const Settings = styled("div")`
  border-radius: ${borderRadius};
  background-color: ${colors.whitesmoke};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const EndBadge = styled("div")`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${colors.black};
  line-height: 0.1em;
  margin: 5rem 0 3rem;
  & > span {
    background: ${colors.red};
    color: #ffffff;
    border-radius: ${borderRadius};
    padding: 0.5rem;
  }
`;
