import React from "react";
import FormContext from "../Form/FormContext";
import ResetButton from "./ResetButton";

export default props => (
  <FormContext.Consumer>
    {({ name }) => <ResetButton {...props} formName={name} />}
  </FormContext.Consumer>
);
