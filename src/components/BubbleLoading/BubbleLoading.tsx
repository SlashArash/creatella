import React, { memo } from "react";

import { Dot, Dots } from "./styles";

const BubbleLoading: React.FC = () => {
  return (
    <Dots>
      <Dot delay={0} />
      <Dot delay={0.2} />
      <Dot delay={0.4} />
    </Dots>
  );
};

export default memo(BubbleLoading);
