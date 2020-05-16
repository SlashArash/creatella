import styled from "styled-components";

import { borderRadius } from "utils/style/common";
import colors from "utils/style/colors";

export const Container = styled("div")`
  background-color: #ffffff;
  border-radius: ${borderRadius};
  display: flex;
  justify-content: space-between;
`;

export const Legend = styled("span")`
  color: ${colors.lightGray};
  font-size: 0.7rem;
  margin-right: 0.8rem;
`;

export const Section = styled("span")`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Price = styled(Section)`
  border-right: 1px solid ${colors.whitesmoke};
  & > p {
    color: ${colors.green};
    font-weight: bold;
  }
`;
