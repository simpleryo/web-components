import React, { Component } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import classnames from "classnames";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.defaultSettings = {
      dots: false,
      infinite: false
    };
  }

  render() {
    const { settings, children, item = 0 } = this.props;
    const customSettings = {
      ...this.defaultSettings,
      ...settings
    };
    return (
      <div
        className={classnames(
          "slick-container",
          item < 5 ? `slick-container--${item}` : ""
        )}
      >
        <Slider {...customSettings}>{children}</Slider>
      </div>
    );
  }
}

Carousel.propTypes = {
  settings: PropTypes.object,
  item: PropTypes.number
};
