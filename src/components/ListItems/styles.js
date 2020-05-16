import styled from "styled-components";

import { largerThan } from "utils/style/responsive";
import { borderRadius } from "utils/style/common";
import colors from "utils/style/colors";

export const Wrapper = styled("div")`
  margin: 2rem 0;
`;

export const List = styled("section")`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  @media ${largerThan.mobile} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${largerThan.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Banner = styled("div")`
  border-radius: ${borderRadius};
  background-color: ${colors.whitesmoke};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  & > img {
    border-radius: ${borderRadius};
    width: 100%;
  }
`;

export const Loading = styled("div")`
  margin: 5rem 0 2rem;
`;
