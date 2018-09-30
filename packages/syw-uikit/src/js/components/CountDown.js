import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Countdown extends Component {
  constructor(props) {
    super(props);

    const { counter } = props;

    this.state = {
      counter,
      current: counter
    };
  }

  componentDidMount() {
    this.tick();
    // 1000存在误差
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    const value = this.state.current - 1;
    if (value <= 0) {
      window.clearInterval(this.interval);
      this.props.onFinish();
    } else {
      this.setState({
        current: value
      });
    }
  }

  render() {
    return <span>{this.state.current}</span>;
  }
}

Countdown.propTypes = {
  counter: PropTypes.number.isRequired,
  onFinish: PropTypes.func
};
