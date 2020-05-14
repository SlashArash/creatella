import styled from "styled-components";

import colors from "utils/style/colors";
import { borderRadius } from "utils/style/common";

export const Face = styled("p")`
  font-size: 1.8rem;
  transition: color 0.3s ease;
`;

export const Container = styled("div")`
  background-color: ${colors.whitesmoke};
  border-radius: ${borderRadius};
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  :hover ${Face} {
    color: ${colors.red};
  }
`;

export const Head = styled("div")`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Date = styled("span")`
  position: absolute;
  top: 0;
  left: 0;
  color: ${colors.lightGray};
`;
