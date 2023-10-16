import { NavTabs } from ".";

export default {
  title: "Components/NavTabs",
  component: NavTabs,
  argTypes: {
    tab: {
      options: ["connect", "events", "applications", "more", "home", "communities", "toolkit", "support"],
      control: { type: "select" },
    },
    state: {
      options: ["selected", "default"],
      control: { type: "select" },
    },
    device: {
      options: ["large", "medium", "mobile"],
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
    mediumLargeNavLabelClassName: {},
    mediumLargeNavText: "Events",
    mediumLargeNavText1: "Connect",
    mediumLargeNavCommunities: "https://c.animaapp.com/S5qOUeiW/img/communities-1.svg",
    mediumLargeNavHelpCenter: "https://c.animaapp.com/S5qOUeiW/img/help-center-1.svg",
    mediumLargeNavHome: "https://c.animaapp.com/S5qOUeiW/img/home-3.svg",
  },
};
