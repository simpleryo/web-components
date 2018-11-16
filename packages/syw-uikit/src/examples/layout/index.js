import React from "react";
import PropTypes from "prop-types";
import R from "ramda";
import { Layout } from "../../js/syw-uikit";
import logo from "../../assets/imgs/logo-simple.png";

const DemoLayout = ({ children, menuConfigs, match }) => (
  <Layout
    className="layout"
    logo={logo}
    logoLabel="SimplerYo"
    menuList={R.sortBy(R.prop("label"), menuConfigs)}
    selectedMenu={R.pathOr("/", ["path"], match)}
    content={children}
    footer="Copyright © 2018 SimplerYo Technology Ltd"
  />
);

DemoLayout.propTypes = {
  menuConfigs: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
  match: PropTypes.object.isRequired
};

export default DemoLayout;
