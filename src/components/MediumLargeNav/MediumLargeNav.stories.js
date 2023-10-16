import { MediumLargeNav } from ".";

export default {
  title: "Components/MediumLargeNav",
  component: MediumLargeNav,
  argTypes: {
    tab: {
      options: ["connect", "events", "applications", "communities", "home", "toolkit", "support"],
      control: { type: "select" },
    },
    state: {
      options: ["selected", "default"],
      control: { type: "select" },
    },
    device: {
      options: ["large", "medium"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    tab: "connect",
    state: "selected",
    device: "large",
    className: {},
    home: "https://c.animaapp.com/S5qOUeiW/img/home-2.svg",
    labelClassName: {},
    events: "https://c.animaapp.com/S5qOUeiW/img/events-2.svg",
    text: "Events",
    connect: "https://c.animaapp.com/S5qOUeiW/img/connect-2.svg",
    text1: "Connect",
    applicationsClassName: {},
    communities: "https://c.animaapp.com/S5qOUeiW/img/communities-2.svg",
    helpCenter: "https://c.animaapp.com/S5qOUeiW/img/help-center-2.svg",
    homeIcon: "https://c.animaapp.com/S5qOUeiW/img/icon-47.svg",
    eventsIcon: "https://c.animaapp.com/S5qOUeiW/img/icon-49.svg",
    connectIcon: "https://c.animaapp.com/S5qOUeiW/img/icon-37.svg",
    communitiesIcon: "https://c.animaapp.com/S5qOUeiW/img/icon-41.svg",
    communitiesImg: "https://c.animaapp.com/S5qOUeiW/img/icon-40.svg",
    toolkitIcon: "https://c.animaapp.com/S5qOUeiW/img/icon-43.svg",
    icon: "https://c.animaapp.com/S5qOUeiW/img/icon-54.svg",
    img: "https://c.animaapp.com/S5qOUeiW/img/icon-44.svg",
    helpCenterCombinedShape: "https://c.animaapp.com/S5qOUeiW/img/combined-shape-7.svg",
    toolkit: "https://c.animaapp.com/S5qOUeiW/img/toolkit-1.svg",
    icon1: "https://c.animaapp.com/S5qOUeiW/img/icon-55.svg",
  },
};
