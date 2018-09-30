import React from "react";
import FormContext from "../Form/FormContext";
import Field from "./Field";

export default props => (
  <FormContext.Consumer>
    {({ name }) => <Field {...props} formName={name} />}
  </FormContext.Consumer>
);
