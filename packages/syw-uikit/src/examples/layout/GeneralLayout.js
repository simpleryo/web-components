import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Header } from "../components/Header";
import Menu from "../components/Menu";

class GeneralLayout extends Component {
  render() {
    return (
      <div className="general-layout container-fluid">
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 col-xs-12">
              <Menu />
            </div>

            <div className="col-md-9 col-sm-12 col-xs-12">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GeneralLayout.propTypes = {
  children: PropTypes.node.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(GeneralLayout);
