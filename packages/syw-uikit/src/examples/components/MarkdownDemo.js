import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose, replace } from "ramda";
import { Snippet } from "./Snippet";
import { Markdown, Input } from "../../js/syw-uikit";

export default class MarkdownDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:
        "# H1 字体\n## H2 字体\n### H3 字体\n#### H4 字体\n##### H5 字体\n###### H6 字体\n- Bullet list 1\n- Bullet list 2 \n\n**Bold**  \n[Link](/markdown)  \n_Underscore_  \n~~Scratch~~"
    };
  }

  onChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { layout: Layout } = this.props;
    const { text } = this.state;
    return (
      <Layout>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="margin-bottom-20">Markdown Render</h4>
            <p className="full-width margin-bottom-20">
              转换Markdown文本成HTML, 详细API查询：
              <a
                className="link link__highlight"
                href="https://github.com/rexxars/react-markdown"
                target="_blank"
                rel="noreferrer noopener"
              >
                react-markdown
              </a>
              。关于Markdown语法，详情参考：
              <a
                className="link link__highlight"
                href="https://en.wikipedia.org/wiki/Markdown"
                target="_blank"
                rel="noreferrer noopener"
              >
                Markdown
              </a>
            </p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="bs-docs-section">
              <div className="bs-callout bs-callout-info">
                <h5>
                  <i>Default</i>
                </h5>
              </div>
              <div className="bs-example">
                <div className="row">
                  <div className="col-xs-12">
                    <Markdown text={text} />
                  </div>
                  <div className="col-xs-12">
                    <Snippet language="html">
                      {
                        'import { Markdown } from "@simpleryo/syw-uikit";\nconst text = "# H1 字体";\n<Markdown text={text} />'
                      }
                    </Snippet>
                  </div>
                  <div className="col-xs-12">
                    <h5>Try it here:</h5>
                  </div>
                  <div className="col-xs-12">
                    <Input.TextArea
                      rows={13}
                      onChange={this.onChange}
                      onBlur={this.onChange}
                      onPressEnter={this.onChange}
                      value={text}
                    />
                  </div>
                  <div className="col-xs-12 margin-top-10">
                    <h5>Value in JSON:</h5>
                    <Input
                      value={compose(
                        replace(/\n/g, "\\n"),
                        replace(/"/g, '\\"'),
                        replace(/\t/g, "\\t")
                      )(text)}
                      onChange={event => {
                        this.onChange({
                          target: {
                            value: compose(
                              replace(/\\n/g, "\n"),
                              replace(/\\"/g, '"'),
                              replace(/\\t/g, "\t")
                            )(event.target.value)
                          }
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

MarkdownDemo.propTypes = {
  layout: PropTypes.any
};
