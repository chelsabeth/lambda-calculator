import React from "react";
import { tsPropertySignature } from "@babel/types";

const Display = props => {
  return (
  <div className="display">{props.NumberValue}</div>
  );
};

export default Display;
