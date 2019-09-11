import React from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div>
       {specials.map((item, index) => (
         <SpecialButton key={index} item={item} />
       ))}
    </div>
  );
};

export default Specials;
