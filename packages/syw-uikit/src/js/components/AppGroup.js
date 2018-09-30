import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Markdown } from "@simpleryo/syw-uikit";
import { isEmpty, not, isNil, compose, filter } from "ramda";
import CircleIcon from "./CircleIcon";

const noChild = compose(isEmpty, filter(child => child !== null));

export const AppGroupTitle = ({
  className = "app-group-title",
  size = "default",
  icon = {},
  title = "",
  description = ""
}) => {
  const isIndent = icon ? icon.type === "indent_group_content" : false;
  const isEmptyGroup = isEmpty(title) && isEmpty(description);

  if (isIndent) {
    return (
      <div className={className}>
        <div className="app-group-title__icon" />
        <div
          className={classNames("app-group-title__detail", {
            "padding-bottom-20": size === "small"
          })}
        >
          {size === "small" && title && <h6>{title}</h6>}
          {size === "default" && title && <h5>{title}</h5>}

          {description && (
            <Markdown
              text={description}
              renderers={{
                paragraph: props => <p className="small" {...props} />
              }}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {not(isEmpty(icon)) && (
        <div className="app-group-title__icon">
          {icon.type === "text" && (
            <CircleIcon
              type="number"
              size={icon.size || 48}
              customClass="black bg--mid-grey"
            >
              <span>{icon.content}</span>
            </CircleIcon>
          )}
          {icon.type === "fontello" && (
            <CircleIcon
              size={icon.size || 48}
              icon={icon.content}
              customClass="black bg--mid-grey"
            />
          )}
        </div>
      )}

      {not(isEmptyGroup) && (
        <div
          className={classNames("app-group-title__detail", {
            "app-group-title__detail--noIcon": isEmpty(icon)
          })}
        >
          {title && <h5>{title}</h5>}
          {description && (
            <Markdown
              text={description}
              renderers={{
                paragraph: props => <p className="small" {...props} />
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

AppGroupTitle.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.string
};

const AppGroup = ({ icon, title, description, children }) => {
  const isIndent = icon ? icon.type === "indent_group_content" : false;
  const isEmptyGroup = !title && !description;
  const hasIcon = not(isEmpty(icon)) && not(isNil(icon)) && not(isIndent);
  const isSmall = isNil(children) || noChild(children);

  if (isIndent) {
    return (
      <div className="row app-group">
        <div className="col-xs-12">
          {not(isEmptyGroup) && (
            <AppGroupTitle
              icon={icon}
              title={title}
              description={description}
              size={isSmall ? "small" : "default"}
              className={classNames("app-group-title", {
                "app-group-title--margin": not(isSmall)
              })}
            />
          )}

          {children && (
            <div
              className={classNames("row app-group__fields", {
                "app-group__fields--noMargin": not(isEmptyGroup)
              })}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="row app-group">
      <div className="col-xs-12">
        <AppGroupTitle
          icon={icon}
          title={title}
          description={description}
          className="app-group-title app-group-title--margin"
        />

        {children && (
          <div
            className={classNames("row app-group__fields", {
              "app-group__fields--noMargin": !hasIcon
            })}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

AppGroup.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
};

export default AppGroup;
