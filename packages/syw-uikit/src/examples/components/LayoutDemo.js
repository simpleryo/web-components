import React, { Component } from "react";
import { Layout } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";
import logo from "../../assets/imgs/logo-simple.png";

export default class LayoutDemo extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h4 className="margin-bottom-20">Layout</h4>
          <p>Handling the overall layout of a page.</p>
          <p className="full-width margin-bottom-20">
            {"详细API请查询 "}
            <a
              className="link link__highlight"
              rel="noopener noreferrer"
              href="https://ant.design/components/layout/"
              target="_blank"
            >
              More Input APIs
            </a>
          </p>
          <hr />
        </div>

        <div className="col-xs-12 margin-top-20 margin-bottom-20">
          <div className="bs-callout bs-callout-info">
            <h5>
              <i>sider-with-trigger</i>
            </h5>
          </div>

          <div className="bs-example">
            <div className="row">
              <div className="col-xs-12">
                <Layout
                  className="layout"
                  logo={logo}
                  logoLabel="SimplerYo"
                  menuList={[
                    { path: "#1", label: "nav 1" },
                    { path: "#2", label: "nav 2" },
                    { path: "#3", label: "nav 3" }
                  ]}
                  selectedMenu={"#1"}
                  content={"Content"}
                  footer="Copyright © 2018 SimplerYo Technology Ltd"
                />
              </div>
            </div>
          </div>

          <Snippet language="html">
            {`<Layout
  className="layout"
  logo={logo}
  logoLabel="SimplerYo"
  menuList={[
    { path: "#1", label: "nav 1" },
    { path: "#2", label: "nav 2" },
    { path: "#3", label: "nav 3" }
  ]}
  selectedMenu={"#1"}
  content={"Content"}
  footer="Copyright © 2018 SimplerYo Technology Ltd"
/>`}
          </Snippet>
        </div>
      </div>
    );
  }
}
