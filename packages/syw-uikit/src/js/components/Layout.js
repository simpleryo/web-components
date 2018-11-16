import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import R from "ramda";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { isMobile } from "@simpleryo/syw-utils";
import { AntdLayout, Drawer, Menu } from "../syw-uikit";

const { Sider, Header, Content, Footer } = AntdLayout;
const SiderMenu = ({
  logo,
  logoLabel,
  menuList,
  selectedMenu,
  onSelectMenu = R.F
}) => (
  <Fragment>
    <div className="logo">
      {logo && (
        <Link to="/">
          <img src={logo} alt={logoLabel} />
          <span className="logo-label">{logoLabel}</span>
        </Link>
      )}
    </div>
    <Menu theme="light" mode="inline" selectedKeys={[selectedMenu]}>
      {R.map(
        ({ path, label, icon }) => (
          <Menu.Item key={path}>
            <Link to={path} onClick={onSelectMenu}>
              <i className={classnames("anticon", icon)} />
              <span>{label}</span>
            </Link>
          </Menu.Item>
        ),
        menuList
      )}
    </Menu>
  </Fragment>
);

SiderMenu.propTypes = {
  logo: PropTypes.string,
  logoLabel: PropTypes.string,
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ),
  selectedMenu: PropTypes.string,
  onSelectMenu: PropTypes.func
};

class ResponsiveLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: isMobile()
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const { collapsed } = this.state;
    const {
      theme = "light",
      menuList,
      selectedMenu,
      logo,
      logoLabel,
      header,
      content,
      footer
    } = this.props;
    return (
      <AntdLayout className="layout">
        {isMobile() ? (
          <Drawer
            className="sider-drawer"
            visible={!collapsed}
            placement="left"
            onClose={this.toggle}
            closable={false}
          >
            <SiderMenu
              logo={logo}
              logoLabel={logoLabel}
              menuList={menuList}
              selectedMenu={selectedMenu}
              onSelectMenu={this.toggle}
            />
          </Drawer>
        ) : (
          <Sider
            className="sider"
            theme={theme}
            trigger={null}
            collapsible
            collapsed={collapsed}
          >
            <SiderMenu
              logo={logo}
              logoLabel={logoLabel}
              menuList={menuList}
              selectedMenu={selectedMenu}
            />
          </Sider>
        )}
        <AntdLayout>
          <Header className={classnames("header", theme)}>
            {isMobile() &&
              logo && (
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt={logoLabel} />
                  </Link>
                </div>
              )}
            <i
              className={classnames(
                "trigger",
                collapsed ? "icon-arrow-right" : "icon-arrow-left"
              )}
              onClick={this.toggle}
            />
            {header}
          </Header>
          <Content className="content">{content}</Content>
          <Footer className="footer text-center">{footer}</Footer>
        </AntdLayout>
      </AntdLayout>
    );
  }
}

ResponsiveLayout.propTypes = {
  theme: PropTypes.string,
  logo: PropTypes.string,
  logoLabel: PropTypes.string,
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  selectedMenu: PropTypes.string,
  header: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node
};

export default ResponsiveLayout;
