import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import R from "ramda";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { Menu } from "../syw-uikit";

export default class SiderMenu extends Component {
  render() {
    const {
      logo,
      logoLabel,
      theme = "light",
      menuList,
      selectedMenu,
      onSelectMenu = R.F
    } = this.props;
    let defaultOpenKey = "";
    R.map(menu => {
      if (
        R.type(menu.children) === "Array" &&
        R.find(({ path }) => R.equals(path, selectedMenu), menu.children)
      ) {
        defaultOpenKey = menu.path;
      }
    }, menuList);
    return (
      <Fragment>
        <div className="logo">
          {logo && (
            <Link to="/">
              <img src={logo} alt={logoLabel} />
              <span className="logo-label">{logoLabel}</span>
            </Link>
          )}
        </div>
        <Menu
          theme={theme}
          mode="inline"
          defaultOpenKeys={[defaultOpenKey]}
          selectedKeys={[selectedMenu]}
        >
          {R.map(menu => {
            if (R.type(menu.children) === "Array") {
              return (
                <Menu.SubMenu
                  title={
                    <Fragment>
                      {menu.icon && (
                        <i className={classnames("anticon", menu.icon)} />
                      )}
                      <span>{menu.label}</span>
                    </Fragment>
                  }
                  key={menu.path}
                >
                  {R.map(
                    ({ path, label, icon }) => (
                      <Menu.Item key={path}>
                        <Link to={path} onClick={onSelectMenu}>
                          {icon && (
                            <i className={classnames("anticon", icon)} />
                          )}
                          <span>{label}</span>
                        </Link>
                      </Menu.Item>
                    ),
                    menu.children
                  )}
                </Menu.SubMenu>
              );
            }
            return (
              <Menu.Item key={menu.path}>
                <Link to={menu.path} onClick={onSelectMenu}>
                  {menu.icon && (
                    <i className={classnames("anticon", menu.icon)} />
                  )}
                  <span>{menu.label}</span>
                </Link>
              </Menu.Item>
            );
          }, menuList)}
        </Menu>
      </Fragment>
    );
  }
}

SiderMenu.propTypes = {
  logo: PropTypes.string,
  logoLabel: PropTypes.string,
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      children: PropTypes.array
    })
  ),
  theme: PropTypes.string,
  selectedMenu: PropTypes.string,
  onSelectMenu: PropTypes.func
};
