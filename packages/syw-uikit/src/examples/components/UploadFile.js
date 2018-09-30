import React, { Component } from "react";
import { Upload, message, Button, AppGroup } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const dummyProps = {
  name: "file",
  action: "//jsonplaceholder.typicode.com/posts/",
  headers: {
    authorization: "authorization-text"
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

const defaultFileList = [
  {
    uid: 1,
    name: "xxx.png",
    status: "done",
    reponse: "Server Error 500", // custom error message to show
    url: "http://www.baidu.com/xxx.png"
  },
  {
    uid: 2,
    name: "yyy.png",
    status: "done",
    url: "http://www.baidu.com/yyy.png"
  },
  {
    uid: 3,
    name: "zzz.png",
    status: "error",
    reponse: "Server Error 500", // custom error message to show
    url: "http://www.baidu.com/zzz.png"
  }
];

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ""
    };
  }
  handleFileChange = event => {
    const name = event.target.value.split("\\").pop();
    this.setState({ file: name });
  };
  render() {
    const { layout: Layout } = this.props;
    return (
      <Layout>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="margin-bottom-20">Upload File</h4>
            <p className="full-width margin-bottom-20">
              文件选择上传控件，详细API请查询{" "}
              <a
                className="link link__highlight"
                href="https://ant.design/components/upload-cn/"
                target="_blank"
              >
                ant upload APIs
              </a>
            </p>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Default style with no upload function</i>
              </h5>
            </div>
            <div className="bs-example">
              <div className="row">
                <div className="col-xs-6">
                  <Button size="small">
                    上传文档
                    <input type="file" className="upload-file__input" />
                  </Button>
                </div>
              </div>
            </div>
            <Snippet language="html">
              {`import { Button } from "@simpleryo/syw-uikit";
<Button size="small">
  上传文档
  <input type="file" className="upload-file__input" />
</Button>
`}
            </Snippet>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Ant Design upload style</i>
              </h5>
            </div>
            <div className="bs-example">
              <div className="row">
                <div className="col-xs-6">
                  <Upload {...dummyProps}>
                    <Button size="small">上传文档</Button>
                  </Upload>
                </div>
              </div>
            </div>
            <Snippet language="html">
              {`import { Upload, Button } from "@simpleryo/syw-uikit";
<Upload {...props}>
  <Button size="small">上传文档</Button>
</Upload>
`}
            </Snippet>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Group example</i>
              </h5>
            </div>
            <div className="bs-example">
              <div className="row">
                <div className="col-xs-12">
                  <AppGroup
                    stepTitle="请上传您的护照"
                    description="系统自动扫描照片内容填写护照信息（请确保在阳光充足的地方拍照并上传）"
                  >
                    <div className="col-xs-12 col-sm-8">
                      <div className="form-group">
                        <Upload {...dummyProps}>
                          <Button size="small">上传文档</Button>
                        </Upload>
                        <p className="small form-group__message">
                          图片格式JPG, PNG or PDF，大小小于1M。
                        </p>
                      </div>
                    </div>
                  </AppGroup>
                </div>
              </div>
            </div>
            <Snippet language="html">
              {`import { Upload, Button, AppGroup } from "@simpleryo/syw-uikit";
<AppGroup
  stepTitle="请上传您的护照"
  description="系统自动扫描照片内容填写护照信息（请确保在阳光充足的地方拍照并上传）"
>
  <div className="col-xs-12 col-sm-8">
    <div className="form-group">
      <Upload {...props}>
        <Button size="small">上传文档</Button>
      </Upload>
      <p className="small form-group__message">图片格式JPG, PNG or PDF，大小小于1M。</p>
    </div>
  </div>
</AppGroup>
`}
            </Snippet>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Multiple files upload</i>
              </h5>
            </div>
            <div className="bs-example">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <Upload {...{ ...dummyProps, defaultFileList }}>
                    <Button type="primary" size="small">
                      上传文档
                    </Button>
                  </Upload>
                </div>
              </div>
            </div>
            <Snippet language="html">
              {`import { Upload, Button } from "@simpleryo/syw-uikit";
<Upload {...{ ...dummyProps, defaultFileList }}>
  <Button>上传文档</Button>
</Upload>`}
            </Snippet>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Multiple files upload whit Thumbnail</i>
              </h5>
            </div>
            <div className="bs-example">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <Upload
                    {...{
                      action: "//jsonplaceholder.typicode.com/posts/",
                      listType: "picture",
                      defaultFileList: [
                        {
                          uid: -1,
                          name: "xxx.png",
                          status: "done",
                          url:
                            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                          thumbUrl:
                            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        },
                        {
                          uid: -2,
                          name: "yyy.png",
                          status: "done",
                          url:
                            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                          thumbUrl:
                            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        }
                      ]
                    }}
                  >
                    <Button type="primary" size="small">
                      上传文档
                    </Button>
                  </Upload>
                </div>
              </div>
            </div>
            <Snippet language="html">
              {`import { Upload, Button } from "@simpleryo/syw-uikit";
<Upload {...props}>
  <Button type="primary" size="small">上传文档</Button>
</Upload>`}
            </Snippet>
          </div>
        </div>
      </Layout>
    );
  }
}
