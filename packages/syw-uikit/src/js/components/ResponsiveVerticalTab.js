import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs } from "../syw-uikit";

export default class ResponsiveVerticalTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: this.getPosition()
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updatePosition);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePosition);
  }

  getPosition = () => (window.innerWidth > 768 ? "left" : "top");

  updatePosition = () => this.setState({ position: this.getPosition() });

  render() {
    const { children, defaultActiveKey, activeKey, onTabClick } = this.props;
    return (
      <Tabs
        tabPosition={this.state.position}
        defaultActiveKey={defaultActiveKey}
        activeKey={activeKey}
        onTabClick={onTabClick}
        className="ant-tabs-responsive"
      >
        {children}
      </Tabs>
    );
  }
}

ResponsiveVerticalTab.propTypes = {
  children: PropTypes.node.isRequired,
  defaultActiveKey: PropTypes.string,
  activeKey: PropTypes.string,
  onTabClick: PropTypes.func
};
