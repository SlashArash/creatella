import styled from "styled-components";

import colors from "utils/style/colors";

export const Container = styled("header")`
  border-top: 4px solid ${colors.red};
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled("img")`
  width: 200px;
`;

export const Description = styled("span")`
  color: ${colors.lightGray};
  font-size: 0.8rem;
`;
