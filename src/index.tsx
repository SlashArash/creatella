import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyled } from "utils/style/global";
import Header from "components/Header";

export const App = () => {
  return (
    <div>
      <GlobalStyled />
      <Header />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
