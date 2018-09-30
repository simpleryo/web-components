import React from "react";
import FormContext from "../Form/FormContext";
import ClearButton from "./ClearButton";

export default props => (
  <FormContext.Consumer>
    {({ name }) => <ClearButton {...props} formName={name} />}
  </FormContext.Consumer>
);
