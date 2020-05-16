import React, { memo } from "react";

import { formatDate } from "utils/date";
import { Container, Date, FaceIcon, Head } from "./styles";
import FaceInfo from "components/FaceInfo";

const FaceItem = ({ face }) => {
  return (
    <Container>
      <Head>
        <Date>{formatDate(face.date)}</Date>
        <FaceIcon>{face.face}</FaceIcon>
      </Head>
      <FaceInfo price={face.price} size={face.size} />
    </Container>
  );
};

export default memo(FaceItem);
