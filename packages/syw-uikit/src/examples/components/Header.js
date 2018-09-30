import React from "react";
import logo from "../../assets/imgs/logo.svg";

export const Header = () => (
  <header>
    <div className="container">
      <div className="row">
        <div className="col-xs-4">
          <a className="logo" href="/">
            <img src={logo} alt="SimplerYo Logo" />
          </a>
        </div>
      </div>
    </div>
  </header>
);
