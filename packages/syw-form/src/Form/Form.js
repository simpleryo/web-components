import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FormContext from "./FormContext";
import * as actionCreators from "../actions";

class Form extends Component {
  constructor(props) {
    super(props);
    const { name } = props;
    this.state = {
      name
    };
  }

  componentWillUnmount() {
    const { name, dispatchDestroyForm } = this.props;
    dispatchDestroyForm(name);
  }

  render() {
    const { children, dispatchDestroyForm, ...formProps } = this.props;
    return (
      <FormContext.Provider value={{ ...this.state }}>
        <div {...formProps}>{children}</div>
      </FormContext.Provider>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  dispatchDestroyForm: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  dispatchDestroyForm: actionCreators.destroyForm
};
export default connect(null, mapDispatchToProps)(Form);
