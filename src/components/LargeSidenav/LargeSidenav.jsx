/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { NavTabs } from "../NavTabs";
import "./style.css";

export const LargeSidenav = ({
  className,
  navTabsMediumLargeNavLabelClassName,
  navTabsMediumLargeNavText = "Events",
  navTabsMediumLargeNavLabelClassNameOverride,
  navTabsMediumLargeNavText1 = "Connect",
  navTabsMediumLargeNavDivClassName,
  navTabsMediumLargeNavDivClassNameOverride,
  navTabsMediumLargeNavCommunities = "https://c.animaapp.com/S5qOUeiW/img/communities.svg",
  navTabsMediumLargeNavHelpCenter = "https://c.animaapp.com/S5qOUeiW/img/help-center-1.svg",
  navTabsMediumLargeNavLabelClassName1,
}) => {
  return (
    <div className={`large-sidenav ${className}`}>
      <div className="frame-2">
        <NavTabs
          className="nav-tabs"
          device="large"
          mediumLargeNavHome="https://c.animaapp.com/S5qOUeiW/img/home.svg"
          mediumLargeNavLabelClassName={navTabsMediumLargeNavLabelClassName}
          state="selected"
          tab="home"
        />
        <NavTabs
          className="nav-tabs"
          device="large"
          mediumLargeNavLabelClassName={navTabsMediumLargeNavLabelClassNameOverride}
          mediumLargeNavText={navTabsMediumLargeNavText}
          state="default"
          tab="events"
        />
        <NavTabs
          className="nav-tabs"
          device="large"
          mediumLargeNavLabelClassName={navTabsMediumLargeNavDivClassName}
          mediumLargeNavText1={navTabsMediumLargeNavText1}
          state="default"
          tab="connect"
        />
        <NavTabs
          className="nav-tabs"
          device="large"
          mediumLargeNavCommunities={navTabsMediumLargeNavCommunities}
          mediumLargeNavLabelClassName={navTabsMediumLargeNavDivClassNameOverride}
          state="default"
          tab="communities"
        />
        <NavTabs
          className="nav-tabs"
          device="large"
          mediumLargeNavHelpCenter={navTabsMediumLargeNavHelpCenter}
          mediumLargeNavLabelClassName={navTabsMediumLargeNavLabelClassName1}
          state="default"
          tab="support"
        />
      </div>
    </div>
  );
};

LargeSidenav.propTypes = {
  navTabsMediumLargeNavText: PropTypes.string,
  navTabsMediumLargeNavText1: PropTypes.string,
  navTabsMediumLargeNavCommunities: PropTypes.string,
  navTabsMediumLargeNavHelpCenter: PropTypes.string,
};
