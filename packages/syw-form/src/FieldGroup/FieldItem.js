import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import createField from "../createField";

class FieldItem extends PureComponent {
  componentDidMount() {
    const { register } = this.props;
    register();
  }

  componentWillUnmount() {
    const { unregister } = this.props;
    unregister();
  }

  render() {
    const { fieldComponent: FieldComponent, fieldParams } = this.props;
    if (FieldComponent) {
      return <FieldComponent {...fieldParams} />;
    }
    return null;
  }
}

FieldItem.propTypes = {
  register: PropTypes.func.isRequired,
  unregister: PropTypes.func.isRequired,
  fieldComponent: PropTypes.any,
  fieldParams: PropTypes.object
};

export default createField(FieldItem);
