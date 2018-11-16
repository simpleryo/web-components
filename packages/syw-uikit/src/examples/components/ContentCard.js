import React, { Fragment } from "react";
import { Button, ContentCard } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";

const ContentCards = () => (
  <Fragment>
    <div className="row">
      <div className="col-xs-12">
        <h4 className="margin-bottom-20">Content card</h4>
        <p>用于标题和段落组合时使用，例如Banner image 里面的段落组合等等</p>
        <hr />
      </div>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Style</i>
        </h5>
      </div>

      <div className="bs-example">
        <ContentCard>
          <h1>这是标题h1</h1>
          <h2>这是标题h2</h2>
          <h3>这是标题h3</h3>
          <h4>这是标题h4</h4>
          <h5>这是标题h5</h5>
          <p>
            这里是罗里吧嗦的段落描述，
            这里是罗里吧嗦的段落描述，这里是罗里吧嗦的段落描述，这里是罗里吧嗦的段落描述，
            这里是罗里吧嗦的段落描述，这里是罗里吧嗦的段落描述，这里是罗里吧嗦的段落描述，这里是罗里吧嗦的段落描述，
          </p>
          <p>
            这里已然是罗里吧嗦的段落2，这里已然是罗里吧嗦的段落2，
            这里已然是罗里吧嗦的段落2，
            这里已然是罗里吧嗦的段落2，这里已然是罗里吧嗦的段落2，
          </p>
          <p className="small">
            这里是小号字体的段落文案，依旧罗里吧嗦，废话多。
            这里是小号字体的段落文案，依旧罗里吧嗦，废话多。这里是小号字体的段落文案，依旧罗里吧嗦，废话多。
          </p>
          <p className="large">
            这里是大号字体的段落文案，同样啰嗦，废话多。这里是大号字体的段落文案，同样啰嗦，废话多。
            这里是大号字体的段落文案，同样啰嗦，废话多。
          </p>
          <Button type="primary">确认提交</Button>
        </ContentCard>
      </div>

      <Snippet language="html">
        {`import { ContentCard } from "@simpleryo/syw-uikit";
<ContentCard>
  <h1>...</h1>
  <h2>...</h2>
  <h3>...</h3>
  <h4>...</h4>
  <h5>...</h5>
  <p>...</p>
  <p className="small">...</p>
  <p className="large">...</p>
</ContentCard>`}
      </Snippet>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Center style</i>
        </h5>
      </div>
      <div className="bs-example">
        <ContentCard centerAlign>
          <h5>这是居中对齐的标题h5</h5>
          <h1>这是居中对齐的标题h1</h1>
          <p>
            这里是华丽的描述段落。这里是华丽的描述段落。 这里是华丽的描述段落。
            这里是华丽的描述段落。这里是华丽的描述段落。
          </p>
          <Button type="primary">确认提交</Button>
        </ContentCard>
      </div>

      <Snippet language="html">
        {`import { ContentCard } from "@simpleryo/syw-uikit";
<ContentCard centerAlign>...</ContentCard>
`}
      </Snippet>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Middle size and center style</i>
        </h5>
      </div>
      <div className="bs-example">
        <ContentCard size="middle" centerAlign>
          <h5>中等大小+居中对齐的标题h5</h5>
          <h1>中等大小&居中对齐的标题h1</h1>
          <p>
            这里是华丽的描述段落。这里是华丽的描述段落。 这里是华丽的描述段落。
            这里是华丽的描述段落。这里是华丽的描述段落。
          </p>
        </ContentCard>
      </div>

      <Snippet language="html">
        {`import { ContentCard } from "@simpleryo/syw-uikit";
<ContentCard size="middle" centerAlign>...</ContentCard>
`}
      </Snippet>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Small size and center style</i>
        </h5>
      </div>
      <div className="bs-example">
        <ContentCard size="small" centerAlign>
          <h5>居中对齐的标题h5</h5>
          <h1>居中对齐的</h1>
          <p>
            这里是华丽的描述段落。这里是华丽的描述段落。 这里是华丽的描述段落。
            这里是华丽的描述段落。这里是华丽的描述段落。
          </p>
        </ContentCard>
      </div>

      <Snippet language="html">
        {`import { ContentCard } from "@simpleryo/syw-uikit";
<ContentCard size="small" centerAlign>...</ContentCard>
`}
      </Snippet>
    </div>
  </Fragment>
);

export default ContentCards;
