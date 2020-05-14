import React, { memo } from "react";

import { Container, Legend, Price, Section } from "./styles";

const FaceInfo: React.FC = () => {
  return (
    <Container>
      <Section>
        <Legend>ID</Legend>
        <p>12</p>
      </Section>
      <Price>
        <Legend>Price</Legend>
        <p>$ 3.11</p>
      </Price>
      <Section>
        <Legend>Size</Legend>
        <p>33</p>
      </Section>
    </Container>
  );
};

export default memo(FaceInfo);
