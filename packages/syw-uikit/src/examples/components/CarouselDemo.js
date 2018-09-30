import React, { Component } from "react";
import { map } from "ramda";
import { Snippet } from "./Snippet";
import { Carousel, Button } from "../../js/syw-uikit";

class CustomSlide extends Component {
  render() {
    const { index, children, ...props } = this.props;

    return (
      <div {...props}>
        <div>
          <h3>{index}</h3>
          {children}
        </div>
      </div>
    );
  }
}

export default class CarouselDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [1, 2]
    };
  }

  handleAddSlide = event => {
    event.preventDefault();
    const nextSlides = [...this.state.slides];
    nextSlides.push(nextSlides.length + 1);
    this.setState({ slides: nextSlides });
  };
  handleRemoveSlide = event => {
    event.preventDefault();
    const nextSlides = [...this.state.slides];
    nextSlides.splice(this.state.slides.length - 1, 1);
    this.setState({ slides: nextSlides });
  };

  render() {
    const { layout: Layout } = this.props;
    const settings = {
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: "30px",
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Layout>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="margin-bottom-20">Carousel</h4>
            <p className="full-width margin-bottom-20">
              更多API，请参考{" "}
              <a
                className="link link__highlight"
                href="https://react-slick.neostack.com/docs/api"
                target="_blank"
              >
                React Slick
              </a>
            </p>
            <hr />
          </div>

          <div className="col-xs-12 margin-top-20 margin-bottom-20">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Dynamic Slides</i>
              </h5>
              <Button size="small" onClick={this.handleAddSlide}>
                Add Slide
              </Button>
              &nbsp;&nbsp;
              <Button size="small" onClick={this.handleRemoveSlide}>
                Remove Slide
              </Button>
            </div>

            <div className="bs-example bg--light-grey">
              <div className="row">
                <div className="col-xs-12 text-center">
                  <Carousel settings={settings} item={this.state.slides.length}>
                    {map(
                      item => <CustomSlide key={item} index={item} />,
                      this.state.slides
                    )}
                  </Carousel>
                </div>
              </div>
            </div>

            <Snippet language="html">
              {`import { Carousel } from "@simpleryo/syw-uikit";
<Carousel settings={settings}>
  {map(
    item => <CustomSlide key={item} index={item} />,
    this.state.slides
  )}
</Carousel>
`}
            </Snippet>
          </div>

          <div className="col-xs-12 margin-top-20 margin-bottom-20">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Slides</i>
              </h5>
            </div>

            <div className="bs-example bg--light-grey" />

            <Snippet language="html">
              {`import { Carousel } from "@simpleryo/syw-uikit";
<Carousel settings={settings}>
  {map(
    item => <CustomSlide key={item} index={item} />,
    this.state.slides
  )}
</Carousel>
`}
            </Snippet>
          </div>

          <div className="container-fluid">
            <div className="row margin-bottom-120">
              <Carousel settings={settings}>
                <CustomSlide index={1}>
                  <p>11111</p>
                  <p>11111</p>
                  <p>11111</p>
                  <p>11111</p>
                </CustomSlide>
                <CustomSlide index={2}>
                  <p>2222</p>
                  <p>2222</p>
                </CustomSlide>
                <CustomSlide index={3} />
                <CustomSlide index={4} />
                <CustomSlide index={5} />
                <CustomSlide index={6} />
                <CustomSlide index={7} />
                <CustomSlide index={8} />
              </Carousel>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
