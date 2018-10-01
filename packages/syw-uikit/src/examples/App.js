import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GeneralLayout from "./layout/GeneralLayout";
import FullWidthLayout from "./layout/FullWidthLayout";

import Typography from "./components/Typography";
import Colours from "./components/Colours";
import Icons from "./components/Icons";
import CircleIcons from "./components/CircleIcons";
import Buttons from "./components/Buttons";
import ImageBanners from "./components/ImageBanners";
import TabsDemo from "./components/TabsDemo";
import ContentCards from "./components/ContentCard";
import AppCards from "./components/AppCards";
import IconCards from "./components/IconCards";
import CollapseDemo from "./components/CollapseDemo";
import ModalDemo from "./components/ModalDemo";
import Input from "./components/Input";
import DatepickerDemo from "./components/Datepicker";
import TooltipDemo from "./components/Tooltip";
import PopoverDemo from "./components/PopoverDemo";
import SelectDemo from "./components/SelectDemo";
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";
import UploadFile from "./components/UploadFile";
import ProgressBar from "./components/ProgressBar";
import StepProgress from "./components/StepProgress";
import AppGroupDemo from "./components/AppGroupDemo";
import Alert from "./components/Alert";
import Card from "./components/Card";
import CascaderDemo from "./components/Cascader";
import CarouselDemo from "./components/CarouselDemo";
import NotificationDemo from "./components/NotificationDemo";
import AutoCompleteDemo from "./components/AutoCompleteDemo";
import MarkdownDemo from "./components/MarkdownDemo";
import PromotionCodeDemo from "./components/PromotionCodeDemo";
import Avatars from "./components/AvatarDemo";
import Badges from "./components/BadgeDemo";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={() => <Typography layout={GeneralLayout} />}
      />
      <Route
        path="/colours"
        component={() => <Colours layout={GeneralLayout} />}
      />
      <Route path="/icons" component={() => <Icons layout={GeneralLayout} />} />
      <Route
        path="/circle-icons"
        component={() => <CircleIcons layout={GeneralLayout} />}
      />
      <Route
        path="/buttons"
        component={() => <Buttons layout={GeneralLayout} />}
      />
      <Route
        path="/image-banners"
        component={() => <ImageBanners layout={FullWidthLayout} />}
      />
      <Route
        path="/tabs-demo"
        component={() => <TabsDemo layout={GeneralLayout} />}
      />
      <Route
        path="/contentCards"
        component={() => <ContentCards layout={GeneralLayout} />}
      />
      <Route
        path="/appCards"
        component={() => <AppCards layout={GeneralLayout} />}
      />
      <Route
        path="/iconCards"
        component={() => <IconCards layout={GeneralLayout} />}
      />
      <Route
        path="/collapse-demo"
        component={() => <CollapseDemo layout={GeneralLayout} />}
      />
      <Route
        path="/modal-demo"
        component={() => <ModalDemo layout={GeneralLayout} />}
      />
      <Route path="/alert" component={() => <Alert layout={GeneralLayout} />} />
      <Route
        path="/notification"
        component={() => <NotificationDemo layout={GeneralLayout} />}
      />
      <Route
        path="/progress-bar"
        component={() => <ProgressBar layout={GeneralLayout} />}
      />
      <Route
        path="/step-progress"
        component={() => <StepProgress layout={GeneralLayout} />}
      />
      <Route
        path="/app-group"
        component={() => <AppGroupDemo layout={GeneralLayout} />}
      />
      <Route path="/input" component={() => <Input layout={GeneralLayout} />} />
      <Route
        path="/Datepicker"
        component={() => <DatepickerDemo layout={GeneralLayout} />}
      />
      <Route
        path="/tooltip"
        component={() => <TooltipDemo layout={GeneralLayout} />}
      />
      <Route
        path="/popover-demo"
        component={() => <PopoverDemo layout={GeneralLayout} />}
      />
      <Route
        path="/select"
        component={() => <SelectDemo layout={GeneralLayout} />}
      />
      <Route path="/radio" component={() => <Radio layout={GeneralLayout} />} />
      <Route
        path="/checkbox"
        component={() => <Checkbox layout={GeneralLayout} />}
      />
      <Route
        path="/upload-file"
        component={() => <UploadFile layout={GeneralLayout} />}
      />
      <Route path="/card" component={() => <Card layout={GeneralLayout} />} />
      <Route
        path="/cascader"
        component={() => <CascaderDemo layout={GeneralLayout} />}
      />
      <Route
        path="/carousel"
        component={() => <CarouselDemo layout={FullWidthLayout} />}
      />
      <Route
        path="/auto-complete"
        component={() => <AutoCompleteDemo layout={GeneralLayout} />}
      />
      <Route
        path="/markdown"
        component={() => <MarkdownDemo layout={GeneralLayout} />}
      />
      <Route
        path="/promotion-code"
        component={() => <PromotionCodeDemo layout={GeneralLayout} />}
      />
      <Route
        path="/avatar"
        component={() => <Avatars layout={GeneralLayout} />}
      />
      <Route
        path="/badge"
        component={() => <Badges layout={GeneralLayout} />}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
