import React from "react";
import FormContext from "../Form/FormContext";
import FieldGroup from "./FieldGroup";

export default props => (
  <FormContext.Consumer>
    {({ name }) => <FieldGroup {...props} formName={name} />}
  </FormContext.Consumer>
);
