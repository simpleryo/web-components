import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Header } from "../components/Header";
import Menu from "../components/Menu";

class FullWidthLayout extends Component {
  render() {
    return (
      <div className="full-width-layout container-fluid">
        <Header />

        <div className="row">
          <div className="col-xs-12">
            <Menu />
          </div>
          <div className="col-xs-12">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

FullWidthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(FullWidthLayout);
