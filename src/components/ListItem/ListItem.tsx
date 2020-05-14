import React from "react";

import Face from "types/Face";
import { Wrapper } from "./styles";
import FaceItem from "components/FaceItem/FaceItem";

type Props = {
  faces: Face[];
};

const ListItem: React.FC<Props> = ({ faces }) => {
  return (
    <Wrapper>
      {faces.map((face) => (
        <FaceItem key={face.id} face={face} />
      ))}
    </Wrapper>
  );
};

export default ListItem;
