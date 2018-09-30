import React, { Component } from "react";
import { Snippet } from "./Snippet";
import { AppGroup, Button, Modal } from "../../js/syw-uikit";

export default class ModalDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      confirmVisible: false,
      visibleSmall: false
    };
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  showConfirmModal = () => {
    this.setState({ confirmVisible: true });
  };

  showSmallModal = () => {
    this.setState({ visibleSmall: true });
  };

  handleSmallCancel = () => {
    this.setState({ visibleSmall: false });
  };

  handleConfirmOk = () => {
    console.log("ok!");
    this.setState({ confirmVisible: false });
  };

  handleConfirmCancel = () => {
    console.log("cancel!");
    this.setState({ confirmVisible: false });
  };

  render() {
    const { layout: Layout } = this.props;
    return (
      <Layout>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="margin-bottom-20">Modal 对话框</h4>
            <p>
              More Details in{" "}
              <a
                className="link link__highlight"
                href="https://ant.design/components/modal-cn/"
                target="_blank"
              >
                Antd Modal
              </a>
            </p>
            <hr />
          </div>

          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Full Screen Modal</i>
              </h5>
            </div>

            <div className="bs-example">
              <Button type="primary" size="small" onClick={this.showModal}>
                Full Screen Modal
              </Button>

              <Modal
                wrapClassName="modal-fullscreen"
                width="100%"
                mask={false}
                visible={this.state.visible}
                footer={false}
                onCancel={this.handleCancel}
              >
                <div className="container">
                  <div className="container__inner-wrapper">
                    <div className="row">
                      <div className="col-xs-12">
                        <h2 className="section-name">条款及协议</h2>
                        <p className="large">
                          去声白县我众十大已切高走，标离京器录造色赤共。
                          进亲里它表内华，标不七当组手各示，正询元总马便。
                          确质高建铁技强院族严参委，龙想关义入流五每资小适，争结孤伸取露本鹰业范。{" "}
                        </p>

                        {/*section 1*/}
                        <AppGroup
                          icon={{ type: "text", content: "1" }}
                          stepTitle="习世多义响式格经料历方却正至"
                          description="如果您身边没有拍照设备或护照存档图片，您也可以选择手动填写您的护照信息。"
                        >
                          <div className="col-xs-12">
                            <p>
                              它路今花论用角置，或决其张作安式调，想Y年租你较。
                              之积例记日了收管市，统于都近没先西分实，同蠢求她务科杯。
                              提除式表个心示点人铁个之由期，政育张除较肃近子置按毛。
                              白身同决联价干电者但上，保别进广受已社断满，影门隶她连厂龙去据。
                            </p>
                            <ul className="margin-top-20">
                              <li>
                                题状素青理克处入，需观究和受常业，切5一术具兵。
                                形会事三且还，规使克金备发，存丽L别。
                              </li>
                              <li>
                                状这龙可革单委广给那，车马感马至采听存始，对圆豆象连住屈多。
                                往走及数主海被，解家线关接，强刷你你P。
                              </li>
                              <li>
                                真因几转省素真前九完向，员场米必则声如热直，整白8交器两过码起。
                              </li>
                              <li>
                                五用物际构越效名，没群眼每展离清，反医商火V医。
                                节得科出世业引那约，中志例情半认更是图，单询门争G水记。
                              </li>
                              <li>
                                须前复克型打其指议，解五新原料须圆政正，决前基响且组拉2，委正集矿该管到。
                              </li>
                              <li>
                                日部特边能好样九较此五反，区地再际步离音眼办法，际大领医箩毛串肃吩足。
                              </li>
                              <li>
                                同万示为究因率联易指，先划拉切二来题维色，各数励话话广离。
                                用众五五上总次见，完持调七老只，展结C做4应。
                              </li>
                            </ul>
                          </div>
                        </AppGroup>

                        {/*section 2*/}
                        <AppGroup
                          icon={{ type: "text", content: "2" }}
                          stepTitle="们准步类示周要中，相日级计定火"
                        >
                          <div className="col-xs-12">
                            <div className="col-xs-12">
                              <p>
                                全活村土建列。
                                长分间指世式立历造，建战代快百话北金，持一刷酸声江土。
                                布知部八之万先知西近每下路育华，话即习快八该自刷虚么求装为。
                                着半速集响利多与先，眼米水切革水由生装，日材品前加位算。
                              </p>
                              <p>
                                老金手明本求些，关感物口类音，始5该吼市。入解见精集质合应美展压，些厂斗而十白照对府，统放4感军月4或花。
                                同为度都果调西五按过，解都步响几期不大也写，县路Z类奋扮育么。
                                受根报同证商经存下也，事酸示专例地切土，感近届争而命品面。
                                还么务打才原活代适不支往铁，改值通干正E过管县葛。
                              </p>
                              <ul className="margin-top-20">
                                <li>
                                  题状素青理克处入，需观究和受常业，切5一术具兵。
                                  形会事三且还，规使克金备发，存丽L别。
                                </li>
                                <li>
                                  状这龙可革单委广给那，车马感马至采听存始，对圆豆象连住屈多。
                                  往走及数主海被，解家线关接，强刷你你P。
                                </li>
                                <li>
                                  真因几转省素真前九完向，员场米必则声如热直，整白8交器两过码起。
                                </li>
                              </ul>
                            </div>
                          </div>
                        </AppGroup>
                        <Button type="primary" className="margin-top-20">
                          主要按键
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>

            <Snippet language="html">
              {`import { AppGroup, Button, Modal } from "@simpleryo/syw-uikit";
<Button type="primary" size="small" onClick={this.showModal}>Full Screen Modal</Button>
<Modal wrapClassName="modal-fullscreen"
 width="100%"
 mask={false}
 visible={this.state.visible}
 footer={false}
 onCancel={this.handleCancel}
>
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
</Modal>`}
            </Snippet>
          </div>

          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Size small</i>
              </h5>
            </div>
            <div className="bs-example">
              <Button size="small" onClick={this.showSmallModal}>
                Small size Modal
              </Button>
              <Modal
                visible={this.state.visibleSmall}
                onCancel={this.handleSmallCancel}
                footer={false}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </div>
            <Snippet language="html">
              {`import { AppGroup, Button, Modal } from "@simpleryo/syw-uikit";
<Button size="small" onClick={this.showSmallModal}>Small size Modal</Button>
<Modal visible={this.state.visibleSmall}
       onCancel={this.handleSmallCancel}
       footer={false}
>
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
</Modal>`}
            </Snippet>
          </div>

          <div className="col-xs-12">
            <div className="bs-callout bs-callout-info">
              <h5>
                <i>Confirm Modal</i>
              </h5>
            </div>
            <div className="bs-example">
              <Button size="small" onClick={this.showConfirmModal}>
                Confirm Modal
              </Button>
              <Modal
                visible={this.state.confirmVisible}
                onOk={this.handleConfirmOk}
                onCancel={this.handleConfirmCancel}
                okText="确认"
                okType="primary"
                cancelText="取消"
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </div>
            <Snippet language="html">
              {`import { AppGroup, Button, Modal } from "@simpleryo/syw-uikit";
<Button onClick={this.showConfirmModal}>Confirm Modal</Button>
<Modal visible={this.state.confirmVisible}
 onOk={this.handleConfirmOk}
 onCancel={this.handleConfirmCancel}
 okText="确认"
 okType="primary"
 cancelText="取消"
>
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
</Modal>`}
            </Snippet>
          </div>
        </div>
      </Layout>
    );
  }
}
