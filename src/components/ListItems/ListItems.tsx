import React, { memo } from "react";

import Face from "types/Face";
import { host } from "utils/constants";
import { Wrapper, Banner } from "./styles";
import FaceItem from "components/FaceItem";

type Props = {
  faces: Face[];
};

const advIDs: number[] = [];

const generateUniqueID: any = (advIndex: number) => {
  if (advIDs[advIndex] !== undefined) {
    return advIDs[advIndex];
  }
  while (true) {
    const randomID = Math.floor(Math.random() * 99);
    if (!advIDs.includes(randomID)) {
      advIDs.push(randomID);
      return randomID;
    }
  }
};

const getAdvBanner = (itemIndex: number) => {
  const advIndex = itemIndex / 20 - 1;
  const advID = generateUniqueID(advIndex);
  return `${host}ads/?r=${advID}`;
};

const ListItem: React.FC<Props> = ({ faces }) => {
  return (
    <Wrapper>
      {faces.map((face, index) => {
        if ((index + 1) % 20 === 0) {
          const imageSrc = getAdvBanner(index + 1);
          return (
            <>
              <FaceItem key={face.id} face={face} />
              <Banner>
                <img src={imageSrc} alt="advertisement" />
              </Banner>
            </>
          );
        }
        return <FaceItem key={face.id} face={face} />;
      })}
    </Wrapper>
  );
};

export default memo(ListItem);
