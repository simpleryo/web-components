import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => (
  <div className="list-group">
    <NavLink className="list-group-item" exact to="/">
      Typography
    </NavLink>
    <NavLink className="list-group-item" to="/colours">
      Colours
    </NavLink>
    <NavLink className="list-group-item" to="/icons">
      Icons
    </NavLink>
    <NavLink className="list-group-item" to="/circle-icons">
      Circle icons
    </NavLink>
    <NavLink className="list-group-item" to="/buttons">
      Buttons
    </NavLink>
    <NavLink className="list-group-item" to="/image-banners">
      Image banners
    </NavLink>
    <NavLink className="list-group-item" to="/tabs-demo">
      Tabs
    </NavLink>
    <NavLink className="list-group-item" to="/contentCards">
      Content card
    </NavLink>
    <NavLink className="list-group-item" to="/appCards">
      App card
    </NavLink>
    <NavLink className="list-group-item" to="/iconCards">
      Icon card
    </NavLink>
    <NavLink className="list-group-item" to="/collapse-demo">
      Collapse
    </NavLink>
    <NavLink className="list-group-item" to="/modal-demo">
      Modal
    </NavLink>
    <NavLink className="list-group-item" to="/alert">
      Alert
    </NavLink>
    <NavLink className="list-group-item" to="/notification">
      Notification
    </NavLink>
    <NavLink className="list-group-item" to="/progress-bar">
      Progress bar
    </NavLink>
    <NavLink className="list-group-item" to="/step-progress">
      Step progress
    </NavLink>
    <NavLink className="list-group-item" to="/app-group">
      App group
    </NavLink>
    <NavLink className="list-group-item" to="/input">
      Input
    </NavLink>
    <NavLink className="list-group-item" to="/datepicker">
      Datepicker
    </NavLink>
    <NavLink className="list-group-item" to="/tooltip">
      Tooltip
    </NavLink>
    <NavLink className="list-group-item" to="/popover-demo">
      Popover
    </NavLink>
    <NavLink className="list-group-item" to="/select">
      Select
    </NavLink>
    <NavLink className="list-group-item" to="/radio">
      Radio
    </NavLink>
    <NavLink className="list-group-item" to="/checkbox">
      Check box
    </NavLink>
    <NavLink className="list-group-item" to="/upload-file">
      Upload file
    </NavLink>
    <NavLink className="list-group-item" to="/card">
      Card
    </NavLink>
    <NavLink className="list-group-item" to="/cascader">
      Cascader
    </NavLink>
    <NavLink className="list-group-item" to="/carousel">
      Carousel
    </NavLink>
    <NavLink className="list-group-item" to="/auto-complete">
      Auto Complete
    </NavLink>
    <NavLink className="list-group-item" to="/markdown">
      Markdown
    </NavLink>
    <NavLink className="list-group-item" to="/promotion-code">
      PromotionCode
    </NavLink>
  </div>
);

export default Menu;
