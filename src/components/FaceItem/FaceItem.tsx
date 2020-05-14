import React, { memo } from "react";

import Face from "types/Face";
import { Container, Date, FaceIcon, Head } from "./styles";
import FaceInfo from "components/FaceInfo";

type Props = {
  face: Face;
};

const FaceItem: React.FC<Props> = ({ face }) => {
  return (
    <Container>
      <Head>
        <Date>3 days ago</Date>
        <FaceIcon>{face.face}</FaceIcon>
      </Head>
      <FaceInfo price={face.price} size={face.size} />
    </Container>
  );
};

export default memo(FaceItem);
