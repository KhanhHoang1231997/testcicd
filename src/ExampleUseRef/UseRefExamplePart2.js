import React, { useRef, forwardRef } from "react";

const UseRefExamplePart2 = forwardRef((props, ref) => (
  <div ref={ref}>First item</div>
));

export default UseRefExamplePart2;