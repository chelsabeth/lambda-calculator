import React from "react";
import { tsPropertySignature } from "@babel/types";

const Display = props => {
  const screen='0'
  return (
  <div className="display">{props.NumberValue}</div>
  );
};

export default Display;
