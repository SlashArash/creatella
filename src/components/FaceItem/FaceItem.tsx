import React from "react";

import { Container, Date, Face, Head } from "./styles";
import FaceInfo from "components/FaceInfo";

const FaceItem = () => {
  return (
    <Container>
      <Head>
        <Date>3 days ago</Date>
        <Face>¯\_(ツ)_/¯</Face>
      </Head>
      <FaceInfo />
    </Container>
  );
};

export default FaceItem;
