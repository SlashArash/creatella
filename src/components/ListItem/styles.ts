import styled from "styled-components";

import { largerThan } from "utils/style/responsive";

export const Wrapper = styled("section")`
  margin: 2rem 0;
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
