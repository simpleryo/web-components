import React from "react";
import { CircleIcon, Breadcrumb } from "../../js/syw-uikit";

const CircleIcons = () => (
  <div className="row">
    <div className="col-xs-12">
      <h3>Circle Icons</h3>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="#circleIcon-sizes">Circle icon Sizes</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#circleIcon-colors">Circle icon Colors</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#number-circleIcons">Circle icons - Number style</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#status-circleIcons">Circle icons - Status style</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <hr />
    </div>

    <div className="col-xs-12" id="circleIcon-sizes">
      <blockquote>
        <h4>
          <i>Circle icon Sizes</i>
        </h4>
        <p>Currently only support the following sizes.</p>
      </blockquote>
      <table className="table">
        <thead>
          <tr>
            <th>Circle icon (Default)</th>
            <th>Width * Height</th>
            <th>Font Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <CircleIcon
                size={36}
                icon="icon-airplane"
                customClass="white bg--dark-grey"
              />
            </td>
            <td>36px * 36px</td>
            <td>18px</td>
          </tr>
          <tr>
            <td>
              <CircleIcon
                size={48}
                icon="icon-airplane"
                customClass="white bg--dark-grey"
              />
            </td>
            <td>48px * 48px</td>
            <td>26px</td>
          </tr>
          <tr>
            <td>
              <CircleIcon
                size={54}
                icon="icon-airplane"
                customClass="white bg--dark-grey"
              />
            </td>
            <td>54px * 54px</td>
            <td>30px</td>
          </tr>
          <tr>
            <td>
              <CircleIcon
                size={80}
                icon="icon-airplane"
                customClass="white bg--dark-grey"
              />
            </td>
            <td>80px * 80px</td>
            <td>38px</td>
          </tr>
          <tr>
            <td>
              <CircleIcon
                size={96}
                icon="icon-airplane"
                customClass="white bg--dark-grey"
              />
            </td>
            <td>96px * 96px</td>
            <td>38px</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="col-xs-12" id="circleIcon-colors">
      <blockquote>
        <h4>
          <i>Circle icon colours</i>
        </h4>
      </blockquote>
      <table className="table">
        <thead>
          <tr>
            <th>Circle icon</th>
            <th>Background Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <CircleIcon
                size={54}
                icon="icon-lock"
                customClass="grey bg--light-grey"
              />
            </td>
            <td>Light grey</td>
          </tr>
          <tr>
            <td>
              <CircleIcon
                size={54}
                icon="icon-shake-hands"
                customClass="white bg--dark-grey"
              />
            </td>
            <td>Grey (default)</td>
          </tr>
          <tr>
            <td>
              <CircleIcon
                size={54}
                icon="icon-hotel"
                customClass="white bg--black"
              />
            </td>
            <td>Black</td>
          </tr>
          <tr>
            <td>
              <CircleIcon
                size={54}
                icon="icon-visa"
                customClass="white bg--pink"
              />
            </td>
            <td>Pink</td>
          </tr>
          <tr>
            <td>
              <CircleIcon
                size={54}
                icon="icon-users"
                customClass="white bg--red"
              />
            </td>
            <td>Red</td>
          </tr>
          <tr>
            <td>
              <CircleIcon
                size={54}
                icon="icon-address-book"
                customClass="white bg--green"
              />
            </td>
            <td>Green</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="col-xs-12" id="number-circleIcons">
      <blockquote>
        <h4>
          <i>Circle icon - Number style</i>
        </h4>
      </blockquote>
      <table className="table">
        <thead>
          <tr>
            <th>Circle icon (Type: number)</th>
            <th>Width * Height</th>
            <th>Font Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <CircleIcon
                type="number"
                size={28}
                customClass="white bg--dark-grey"
              >
                <span>28</span>
              </CircleIcon>
            </th>
            <th>28px * 28px</th>
            <th>10px</th>
          </tr>
          <tr>
            <th>
              <CircleIcon
                type="number"
                size={36}
                customClass="white bg--dark-grey"
              >
                <span>36</span>
              </CircleIcon>
            </th>
            <th>36px * 36px</th>
            <th>14px</th>
          </tr>
          <tr>
            <th>
              <CircleIcon
                type="number"
                size={48}
                customClass="white bg--dark-grey"
              >
                <span>48</span>
              </CircleIcon>
            </th>
            <th>48px * 48px</th>
            <th>22px</th>
          </tr>
          <tr>
            <th>
              <CircleIcon
                type="number"
                size={54}
                customClass="white bg--dark-grey"
              >
                <span>54</span>
              </CircleIcon>
            </th>
            <th>54px * 54px</th>
            <th>24px</th>
          </tr>
          <tr>
            <th>
              <CircleIcon
                type="number"
                size={80}
                customClass="white bg--dark-grey"
              >
                <span>80</span>
              </CircleIcon>
            </th>
            <th>80px * 80px</th>
            <th>36px</th>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="col-xs-12" id="status-circleIcons">
      <blockquote>
        <h4>
          <i>Circle icon - Status style</i>
        </h4>
      </blockquote>
      <h6 className="margin-top-20 margin-bottom-20">sizes</h6>
      <table className="table">
        <tbody>
          <tr>
            <th>
              <CircleIcon
                type="status"
                size={28}
                customClass="white bg--dark-grey"
              >
                <span>28</span>
              </CircleIcon>
            </th>
            <th>28px/13px</th>
            <th>Small size</th>
          </tr>
          <tr>
            <th>
              <CircleIcon type="status" status="active" customClass="white">
                <span>36</span>
              </CircleIcon>
            </th>
            <th>36px/14px</th>
            <th>Normal size</th>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="col-xs-12">
      <h6 className="margin-top-20 margin-bottom-20">status</h6>
      <table className="table">
        <tbody>
          <tr>
            <th>
              <CircleIcon
                type="status"
                status="default"
                customClass="white bg--dark-grey"
              >
                <span>1</span>
              </CircleIcon>
            </th>
            <th>Default</th>
          </tr>
          <tr>
            <th>
              <CircleIcon
                type="status"
                status="active"
                customClass="white bg--dark-grey"
              >
                <span>2</span>
              </CircleIcon>
            </th>
            <th>Active</th>
          </tr>
          <tr>
            <th>
              <CircleIcon
                type="status"
                status="completed"
                customClass="white bg--dark-grey"
              >
                <span>3</span>
              </CircleIcon>
            </th>
            <th>Completed</th>
          </tr>
          <tr>
            <th>
              <CircleIcon
                type="status"
                status="error"
                customClass="white bg--dark-grey"
              >
                <span>4</span>
              </CircleIcon>
            </th>
            <th>Error</th>
          </tr>
          <tr>
            <th>
              <CircleIcon
                type="status"
                status="disabled"
                customClass="white bg--dark-grey"
              >
                <span>5</span>
              </CircleIcon>
            </th>
            <th>Disabled</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default CircleIcons;
