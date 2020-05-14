import React from "react";

import { Settings, Wrapper } from "./styles";
import ListItem from "components/ListItem";

const MainBody = () => {
  return (
    <Wrapper>
      <Settings>
        <span>Sort By</span>
        <span>Showing * results</span>
      </Settings>
      <ListItem />
    </Wrapper>
  );
};

export default MainBody;
