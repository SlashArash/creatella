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
`;

export const Section = styled("span")`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    margin-top: 5px;
  }
`;

export const Price = styled(Section)`
  border-left: 1px solid ${colors.whitesmoke};
  border-right: 1px solid ${colors.whitesmoke};
  flex: 1;
  & > p {
    color: ${colors.green};
    font-weight: bold;
  }
`;
