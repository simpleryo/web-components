import React from "react";
import FormContext from "../Form/FormContext";
import SubmitButton from "./SubmitButton";

export default props => (
  <FormContext.Consumer>
    {({ name }) => <SubmitButton {...props} formName={name} />}
  </FormContext.Consumer>
);
