import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import createField from "../createField";
import FieldTheme from "./FieldTheme";

class Field extends PureComponent {
  componentDidMount() {
    const { register } = this.props;
    register();
  }

  componentWillUnmount() {
    const { unregister } = this.props;
    unregister();
  }

  render() {
    const {
      fieldComponent: FieldComponent,
      themeParams,
      fieldParams
    } = this.props;
    if (FieldComponent) {
      return (
        <FieldTheme {...themeParams}>
          <FieldComponent {...fieldParams} />
        </FieldTheme>
      );
    }
    return null;
  }
}

Field.propTypes = {
  register: PropTypes.func.isRequired,
  unregister: PropTypes.func.isRequired,
  fieldComponent: PropTypes.any,
  themeParams: PropTypes.object,
  fieldParams: PropTypes.object
};

export default createField(Field);
