import React from "react";
import PropTypes from "prop-types";
import CircleIcon from "../../js/components/CircleIcon";
import { Snippet } from "./Snippet";

const Colours = ({ layout: Layout }) => (
  <Layout>
    <div className="row">
      <div className="col-xs-12">
        <h3 className="margin-bottom-20">Colours</h3>
        <hr />
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Primary color</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--pink" />
              <p className="small margin-top-10">Pink</p>
              <p className="small">#F32E59</p>
            </div>
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--light-pink" />
              <p className="small margin-top-10">Light pink</p>
              <p className="small">#FF91A9</p>
            </div>
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--red" />
              <p className="small margin-top-10">Red</p>
              <p className="small">#BA1E40</p>
            </div>
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--active-red" />
              <p className="small margin-top-10">Active red</p>
              <p className="small">#F50000</p>
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`.pink
.light-pink
.red
.active-red`}
        </Snippet>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>CTA color</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--blue" />
              <p className="small margin-top-10">Blue</p>
              <p className="small">#20B1EE</p>
            </div>
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--light-blue" />
              <p className="small margin-top-10">Light blue</p>
              <p className="small">#91DEFF</p>
            </div>
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--dark-blue" />
              <p className="small margin-top-10">Dark blue</p>
              <p className="small">#1794C8</p>
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`.blue
.light-blue
.dark-blue`}
        </Snippet>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>White & black color</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--white" />
              <p className="small margin-top-10">White</p>
              <p className="small">#FFFFFF</p>
            </div>
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--black" />
              <p className="small margin-top-10">Black</p>
              <p className="small">#000000</p>
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`.white
.black`}
        </Snippet>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Grey color</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--light-grey" />
              <p className="small margin-top-10">Light grey</p>
              <p className="small">#F8F8F8</p>
            </div>
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--semi-light-grey" />
              <p className="small margin-top-10">Semi-light grey</p>
              <p className="small">#ECECEC</p>
            </div>
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--mid-grey" />
              <p className="small margin-top-10">Mid Grey</p>
              <p className="small">#DDDDDD</p>
            </div>
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--grey" />
              <p className="small margin-top-10">Grey</p>
              <p className="small">#B9B9B9</p>
            </div>
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--copy-grey" />
              <p className="small margin-top-10">Copy grey</p>
              <p className="small">#989898</p>
            </div>
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--dark-grey" />
              <p className="small margin-top-10">Dark grey</p>
              <p className="small">#373737</p>
            </div>
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--heavy-grey" />
              <p className="small margin-top-10">Heavy grey</p>
              <p className="small">#292929</p>
            </div>
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--serious-grey" />
              <p className="small margin-top-10">Serious grey</p>
              <p className="small">#1C1C1C</p>
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`.light-grey
.mid-grey
.grey
.copy-grey
.dark-grey
.heavy-grey
.serious-grey`}
        </Snippet>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <div className="bs-callout bs-callout-info">
          <h5>
            <i>Green color</i>
          </h5>
        </div>
        <div className="bs-example">
          <div className="row">
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--green" />
              <p className="small margin-top-10">Green</p>
              <p className="small">#2BAF6F</p>
            </div>
            <div className="col-xs-3 text-center">
              <CircleIcon size={54} customClass="white bg--light-green" />
              <p className="small margin-top-10">Light green</p>
              <p className="small">#B8DF8B</p>
            </div>
          </div>
        </div>

        <Snippet language="html">
          {`.green
.light-green`}
        </Snippet>
      </div>
    </div>
  </Layout>
);

Colours.propTypes = {
  layout: PropTypes.node
};

export default Colours;
