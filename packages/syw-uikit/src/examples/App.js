import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import R from "ramda";
import createHistory from "history/createBrowserHistory";

import DemoLayout from "./layout";
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
import LayoutDemo from "./components/LayoutDemo";

const browserHistory = createHistory();

browserHistory.listen(() => {
  window.scrollTo(0, 0);
});

const ROUTE_CONFIGS = [
  {
    path: "/",
    icon: "icon-translate",
    label: "Typography",
    Component: Typography
  },
  {
    path: "/colours",
    icon: "icon-picture",
    label: "Colours",
    Component: Colours
  },
  {
    path: "/icons",
    icon: "icon-photo-success",
    label: "Icons",
    Component: Icons
  },
  {
    path: "/circle-icons",
    icon: "icon-info",
    label: "CircleIcon",
    Component: CircleIcons
  },
  {
    path: "/buttons",
    icon: "icon-valid-circle",
    label: "Button",
    Component: Buttons
  },
  {
    path: "/image-banners",
    icon: "icon-picture",
    label: "ImageBanner",
    Component: ImageBanners
  },
  {
    path: "/tabs",
    icon: "icon-files",
    label: "Tab",
    Component: TabsDemo
  },
  {
    path: "/contentCards",
    icon: "icon-terms",
    label: "ContentCard",
    Component: ContentCards
  },
  {
    path: "/appCards",
    icon: "icon-valid-circle",
    label: "AppCard",
    Component: AppCards
  },
  {
    path: "/iconCards",
    icon: "icon-error-circle",
    label: "IconCard",
    Component: IconCards
  },
  {
    path: "/collapse",
    icon: "icon-files",
    label: "Collapse",
    Component: CollapseDemo
  },
  {
    path: "/modal",
    icon: "icon-folder-open",
    label: "Modal",
    Component: ModalDemo
  },
  {
    path: "/alert",
    icon: "icon-error",
    label: "Alert",
    Component: Alert
  },
  {
    path: "/notification",
    icon: "icon-error-circle",
    label: "Notification",
    Component: NotificationDemo
  },
  {
    path: "/progress-bar",
    icon: "icon-hide",
    label: "ProgressBar",
    Component: ProgressBar
  },
  {
    path: "/step-progress",
    icon: "icon-online",
    label: "StepProgress",
    Component: StepProgress
  },
  {
    path: "/app-group",
    icon: "icon-terms",
    label: "AppGroup",
    Component: AppGroupDemo
  },
  {
    path: "/input",
    icon: "icon-terms",
    label: "Input",
    Component: Input
  },
  {
    path: "/datepicker",
    icon: "icon-calendar",
    label: "Datepicker",
    Component: DatepickerDemo
  },
  {
    path: "/tooltip",
    icon: "icon-info",
    label: "Tooltip",
    Component: TooltipDemo
  },
  {
    path: "/popover",
    icon: "icon-info",
    label: "Popover",
    Component: PopoverDemo
  },
  {
    path: "/select",
    icon: "icon-terms",
    label: "Select",
    Component: SelectDemo
  },
  {
    path: "/radio",
    icon: "icon-terms",
    label: "Radio",
    Component: Radio
  },
  {
    path: "/checkbox",
    icon: "icon-terms",
    label: "Checkbox",
    Component: Checkbox
  },
  {
    path: "/upload-file",
    icon: "icon-files",
    label: "Upload",
    Component: UploadFile
  },
  {
    path: "/card",
    icon: "icon-id-card",
    label: "Card",
    Component: Card
  },
  {
    path: "/cascader",
    icon: "icon-terms",
    label: "Cascader",
    Component: CascaderDemo
  },
  {
    path: "/carousel",
    icon: "icon-terms",
    label: "Carousel",
    Component: CarouselDemo
  },
  {
    path: "/auto-complete",
    icon: "icon-delicate",
    label: "AutoComplete",
    Component: AutoCompleteDemo
  },
  {
    path: "/markdown",
    icon: "icon-delicate",
    label: "Markdown",
    Component: MarkdownDemo
  },
  {
    path: "/promotion-code",
    icon: "icon-post",
    label: "PromotionCode",
    Component: PromotionCodeDemo
  },
  {
    path: "/avatars",
    icon: "icon-user",
    label: "Avatar",
    Component: Avatars
  },
  {
    path: "/badge",
    icon: "icon-user",
    label: "Badge",
    Component: Badges
  },
  {
    path: "/layout",
    icon: "icon-online",
    label: "Layout",
    Component: LayoutDemo
  }
];
const App = () => (
  <Router history={browserHistory}>
    <Switch>
      {R.map(
        ({ path, Component }, index) => (
          <Route
            key={index}
            path={path}
            exact
            render={props => (
              <DemoLayout menuConfigs={ROUTE_CONFIGS} {...props}>
                <Component {...props} />
              </DemoLayout>
            )}
          />
        ),
        ROUTE_CONFIGS
      )}
    </Switch>
  </Router>
);

export default App;
