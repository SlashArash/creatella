import React, { memo } from "react";

import { formatPrice } from "utils/functions";
import { Container, Legend, Price, Section } from "./styles";

type Props = {
  price: number;
  size: number;
};

const FaceInfo: React.FC<Props> = ({ price, size }) => {
  return (
    <Container>
      <Price>
        <Legend>Price</Legend>
        <p>{formatPrice(price)}</p>
      </Price>
      <Section>
        <Legend>Size</Legend>
        <p>{size}</p>
      </Section>
    </Container>
  );
};

export default memo(FaceInfo);
