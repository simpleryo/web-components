import React, { Component } from "react";
import PropTypes from "prop-types";
import R from "ramda";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { isMobile } from "@simpleryo/syw-utils";
import { AntdLayout, Drawer, SiderMenu, Breadcrumb } from "../syw-uikit";

const { Sider, Header, Content, Footer } = AntdLayout;

export default class ResponsiveLayout extends Component {
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
      homeLabel = "HOME",
      header,
      content,
      footer
    } = this.props;
    const breadcrumbList = [
      {
        title: homeLabel,
        path: "/"
      }
    ];
    R.map(menu => {
      if (R.type(menu.children) === "Array") {
        const targetSubMenu = R.find(
          ({ path }) => R.equals(path, selectedMenu),
          menu.children
        );
        if (targetSubMenu) {
          breadcrumbList.push(
            { title: menu.label },
            { title: targetSubMenu.label }
          );
        }
      } else if (R.equals(menu.path, selectedMenu)) {
        breadcrumbList.push({ title: menu.label, path: menu.path });
      }
    }, menuList);
    return (
      <AntdLayout className={classnames("layout", theme)}>
        {isMobile() ? (
          <Drawer
            className={classnames("sider-drawer", theme)}
            visible={!collapsed}
            placement="left"
            onClose={this.toggle}
            closable={false}
          >
            <SiderMenu
              logo={logo}
              logoLabel={logoLabel}
              theme={theme}
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
              theme={theme}
              menuList={menuList}
              selectedMenu={selectedMenu}
            />
          </Sider>
        )}
        <AntdLayout>
          <Header className={classnames("header", theme)}>
            {isMobile() &&
              logo && (
                <div className="header-logo">
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
          <Content className="content">
            <div className="content-header">
              <Breadcrumb className="padding-bottom-20">
                {R.map(
                  ({ title, path }) => (
                    <Breadcrumb.Item key={title}>
                      {path ? <Link to={path}>{title}</Link> : title}
                    </Breadcrumb.Item>
                  ),
                  breadcrumbList
                )}
              </Breadcrumb>
            </div>
            <div className="content-body">{content}</div>
          </Content>
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
  homeLabel: PropTypes.string,
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string.isRequired,
      children: PropTypes.array
    })
  ),
  selectedMenu: PropTypes.string,
  header: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node
};
