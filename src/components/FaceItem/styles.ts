import styled from "styled-components";

import colors from "utils/style/colors";
import { borderRadius } from "utils/style/common";

export const Face = styled("p")`
  font-size: 1.8rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.3s ease;
`;

export const Container = styled("div")`
  background-color: ${colors.whitesmoke};
  border-radius: ${borderRadius};
  width: 320px;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  :hover ${Face} {
    color: ${colors.red};
  }
`;
