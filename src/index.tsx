import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyled } from "utils/style/global";
import Header from "components/Header";
import MainBody from "containers/MainBody";

export const App = () => {
  return (
    <div>
      <GlobalStyled />
      <Header />
      <MainBody />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
