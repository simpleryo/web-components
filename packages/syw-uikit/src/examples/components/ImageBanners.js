import React, { Fragment } from "react";
import { ImageBanner, CrossCenterContent, Button } from "../../js/syw-uikit";
import { Snippet } from "./Snippet";
import bg1 from "../../assets/imgs/banners/heroimage-NZ.jpg";
import bg2 from "../../assets/imgs/banners/hero-image-japan.jpg";
import bgWorldMap from "../../assets/imgs/world-map.svg";

const ImageBanners = () => (
  <Fragment>
    <div className="row">
      <div className="col-xs-12">
        <h4 className="margin-bottom-20">Image banner 横幅</h4>
        <p>
          适用与页面顶部或与 feature-container
          搭配混用来完成市场宣传或者产品推广的效果
        </p>
        <h5>使用方法</h5>
        <p>
          横幅的api选项包括：背景图层，渐变图层，云朵图层，段落十字居中组件️。组件自身宽，高100%，具体高度受上一层的容器
          (banner_ _wrapper) 高度控制
        </p>
        <hr />
      </div>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Default banner</i>
        </h5>
      </div>
      <div className="bs-example">
        <div className="row">
          <div className="banner__wrapper">
            <ImageBanner backgroudImg={bg1} gradient="dark" cloud="white">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-10 col-md-8 float-none float-none--center text-center">
                    <h5 className="white margin-bottom-10">新西兰旅游签证</h5>
                    <h1 className="white">最后一步啦!</h1>
                    <p className="white margin-top-30">
                      你可以选择一下两种方式来完成你的在线申请。1.支付少许费用下载我们为您准备好的电子文档，然后打印自己去使馆完成最后的申请。2.繁忙的你可以放心的把剩下的工作都交给我们，让我们为您来打理一切。
                    </p>
                  </div>
                </div>
              </div>
            </ImageBanner>
          </div>
        </div>
      </div>
      <Snippet language="html">
        {`import { ImageBanner } from '@simpleryo/syw-uikit';

<ImageBanner
  customClass="bg--mid-grey"
  backgroudImg={bg1}
  gradient="dark"
  cloud="white"
>
......
</ImageBanner>
`}
      </Snippet>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Pink & blue gradient banner</i>
        </h5>
      </div>
      <div className="bs-example">
        <div className="row">
          <div className="banner__wrapper">
            <ImageBanner
              cloud="white"
              customClass="bg-gradient-pink"
              gradient="airline"
            >
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-10 col-md-8 float-none float-none--center text-center">
                    <h5 className="white margin-bottom-10">新西兰旅游签证</h5>
                    <h1 className="white">最后一步啦!</h1>
                    <p className="white margin-top-30">
                      你可以选择一下两种方式来完成你的在线申请。1.支付少许费用下载我们为您准备好的电子文档，然后打印自己去使馆完成最后的申请。2.繁忙的你可以放心的把剩下的工作都交给我们，让我们为您来打理一切。
                    </p>
                    <Button className="margin-top-30" type="primary">
                      开始申请
                    </Button>
                  </div>
                </div>
              </div>
            </ImageBanner>
          </div>
        </div>

        <div className="row">
          <div className="banner__wrapper">
            <ImageBanner
              cloud="white"
              customClass="bg-gradient-blue"
              gradient="airline"
            >
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-10 col-md-8 float-none float-none--center text-center">
                    <h5 className="white margin-bottom-10">新西兰旅游签证</h5>
                    <h1 className="white">最后一步啦!</h1>
                    <p className="white margin-top-30">
                      你可以选择一下两种方式来完成你的在线申请。1.支付少许费用下载我们为您准备好的电子文档，然后打印自己去使馆完成最后的申请。2.繁忙的你可以放心的把剩下的工作都交给我们，让我们为您来打理一切。
                    </p>
                  </div>
                </div>
              </div>
            </ImageBanner>
          </div>
        </div>
      </div>
      <Snippet language="html">
        {`import { ImageBanner, CrossCenterContent, Button } from '@simpleryo/syw-uikit';

<ImageBanner
  cloud="white"
  customClass="bg-gradient-pink"
  gradient="airline"
>
  ...
</ImageBanner>

<ImageBanner
  cloud="white"
  customClass="bg-gradient-blue"
  gradient="airline"
>
  ...
</ImageBanner>
`}
      </Snippet>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Large size banner</i>
        </h5>
      </div>
      <div className="bs-example">
        <div className="row">
          <div className="banner__wrapper--large">
            <ImageBanner backgroudImg={bg1} gradient="light" cloud="grey">
              <CrossCenterContent>
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-10 col-md-8 float-none float-none--center text-center">
                      <h5 className="black margin-bottom-10">新西兰旅游签证</h5>
                      <h1 className="black">主申请人申请表</h1>
                      <p className="black margin-top-30">
                        乐悠签证将协助您在20分钟内快速的完成繁琐的签证的申请,
                        此申请适用于个人申请或一个家庭的共同申请。一个家庭可包括一个主申请人，主申请人的配偶和20岁以下的未成年子女。共有8个部分，请仔细回答每个部分的问题。
                      </p>
                      <Button className="margin-top-30" type="primary">
                        开始申请
                      </Button>
                    </div>
                  </div>
                </div>
              </CrossCenterContent>
            </ImageBanner>
          </div>
        </div>
      </div>
      <Snippet language="html">
        {`import { ImageBanner, CrossCenterContent, Button } from '@simpleryo/syw-uikit';

<ImageBanner
  backgroudImg={bg1}
  gradient="light"
  cloud="grey"
>
  <CrossCenterContent>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-md-8 float-none float-none--center text-center">
          <h5 className="black margin-bottom-10">新西兰旅游签证</h5>
          ...
          <Button className="margin-top-30" type="primary">开始申请</Button>
        </div>
      </div>
    </div>
  </CrossCenterContent>
</ImageBanner>
`}
      </Snippet>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Small size banner</i>
        </h5>
      </div>
      <div className="bs-example">
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 padding-0 banner__wrapper--small">
            <ImageBanner backgroudImg={bg1} gradient="dark">
              <CrossCenterContent>
                <h2 className="banner-title">但准陕快伶方</h2>
                <p className="hidden-xs hidden-sm">
                  利细集市干已证于却，合小建话等地向。
                </p>
              </CrossCenterContent>
            </ImageBanner>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 padding-0 banner__wrapper--small">
            <ImageBanner backgroudImg={bg2} gradient="dark">
              <CrossCenterContent>
                <h2 className="banner-title">但准陕快伶方</h2>
                <p className="hidden-xs hidden-sm">
                  利细集市干已证于却，合小建话等地向。
                </p>
              </CrossCenterContent>
            </ImageBanner>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 padding-0 banner__wrapper--small">
            <ImageBanner backgroudImg={bg1} gradient="dark">
              <CrossCenterContent>
                <h2 className="banner-title">但准陕快伶方</h2>
                <p className="hidden-xs hidden-sm">
                  利细集市干已证于却，合小建话等地向。
                </p>
              </CrossCenterContent>
            </ImageBanner>
          </div>
        </div>
      </div>
      <Snippet language="html">
        {`import { ImageBanner, CrossCenterContent } from '@simpleryo/syw-uikit';

<ImageBanner
  backgroudImg={bg1}
  gradient="dark"
>
  <CrossCenterContent>
    <h2 className="banner-title">但准陕快伶方</h2>
    <p className="hidden-xs hidden-sm">利细集市干已证于却，合小建话等地向。</p>
  </CrossCenterContent>
</ImageBanner>
`}
      </Snippet>
    </div>

    <div className="col-xs-12 margin-top-20 margin-bottom-20">
      <div className="bs-callout bs-callout-info">
        <h5>
          <i>Small size banner with feature-container</i>
        </h5>
      </div>
      <div className="bs-example">
        <div
          className="row feature-container"
          style={{ backgroundImage: `url(${bgWorldMap})` }}
        >
          <div className="col-xs-12">
            <h2 className="margin-top-40 margin-bottom-40 text-center feature-container__title">
              热销商品排行
            </h2>
            <div className="row feature-container__wrapper">
              <div className="col-xs-12 col-sm-4 col-md-4 padding-0 banner__wrapper--small">
                <ImageBanner backgroudImg={bg1} gradient="dark">
                  <CrossCenterContent>
                    <h2 className="banner-title">北京</h2>
                    <p className="hidden-xs hidden-sm">
                      利细集市干已证于却，合小建话等地向。
                    </p>
                    <a
                      href="http://www.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </CrossCenterContent>
                </ImageBanner>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 padding-0 banner__wrapper--small">
                <ImageBanner backgroudImg={bg2} gradient="dark">
                  <CrossCenterContent>
                    <h2 className="banner-title">但准陕快伶方</h2>
                    <p className="hidden-xs hidden-sm">
                      利细集市干已证于却，合小建话等地向。
                    </p>
                  </CrossCenterContent>
                </ImageBanner>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 padding-0 banner__wrapper--small">
                <ImageBanner backgroudImg={bg1} gradient="dark">
                  <CrossCenterContent>
                    <h2 className="banner-title">但准陕快伶方</h2>
                    <p className="hidden-xs hidden-sm">
                      利细集市干已证于却，合小建话等地向。
                    </p>
                  </CrossCenterContent>
                </ImageBanner>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 padding-0 banner__wrapper--small">
                <ImageBanner backgroudImg={bg2} gradient="dark">
                  <CrossCenterContent>
                    <h2 className="banner-title">但准陕快伶方</h2>
                    <p className="hidden-xs hidden-sm">
                      利细集市干已证于却，合小建话等地向。
                    </p>
                  </CrossCenterContent>
                </ImageBanner>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 padding-0 banner__wrapper--small">
                <ImageBanner backgroudImg={bg1} gradient="dark">
                  <CrossCenterContent>
                    <h2 className="banner-title">但准陕快伶方</h2>
                    <p className="hidden-xs hidden-sm">
                      利细集市干已证于却，合小建话等地向。
                    </p>
                  </CrossCenterContent>
                </ImageBanner>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 padding-0 banner__wrapper--small">
                <ImageBanner backgroudImg={bg2} gradient="dark">
                  <CrossCenterContent>
                    <h2 className="banner-title">但准陕快伶方</h2>
                    <p className="hidden-xs hidden-sm">
                      利细集市干已证于却，合小建话等地向。
                    </p>
                  </CrossCenterContent>
                </ImageBanner>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Snippet language="html">
        {`import { ImageBanner, CrossCenterContent } from '@simpleryo/syw-uikit';

<div className="row feature-container" style={{'backgroundImage': \`url(${bgWorldMap})\`}}>
  <div className="col-xs-12">
    <h2 className="margin-top-40 margin-bottom-40 text-center feature-container__title">热销商品排行</h2>
    <div className="row feature-container__wrapper">
      ...
      <div className="col-xs-12 col-sm-4 col-md-4 padding-0 banner__wrapper--small">
        <ImageBanner
          backgroudImg={bg1}
          gradient="dark"
        >
          <CrossCenterContent>
            <h2 className="banner-title">但准陕快伶方</h2>
            <p className="hidden-xs hidden-sm">利细集市干已证于却，合小建话等地向。</p>
          </CrossCenterContent>
        </ImageBanner>
      </div>
      ...
    </div>
  </div>
</div>
`}
      </Snippet>
    </div>
  </Fragment>
);

export default ImageBanners;
