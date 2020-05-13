import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyled } from "utils/style/global";

export const App = () => {
  return (
    <div>
      <GlobalStyled />
      <h1>Products Grid</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
