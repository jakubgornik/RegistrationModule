import React from "react";
import { FormContext } from "@/store/ContextProvider";
import { useContext } from "react";

const Test = () => {
  const context = useContext(FormContext);
  return (
    <>
      {context.formData.password}
      {context.formData.email}
      {context.formData.position}
    </>
  );
};

export default Test;
