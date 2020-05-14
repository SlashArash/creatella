import styled from "styled-components";

import { borderRadius } from "utils/style/common";
import colors from "utils/style/colors";

export const Wrapper = styled("main")`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
`;

export const Settings = styled("div")`
  border-radius: ${borderRadius};
  background-color: ${colors.whitesmoke};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
