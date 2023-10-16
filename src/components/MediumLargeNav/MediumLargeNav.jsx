/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Communities } from "../Communities";
import { Connect } from "../Connect";
import { Events } from "../Events";
import { HelpCenter } from "../HelpCenter";
import { Home } from "../Home";
import { Toolkit } from "../Toolkit";
import "./style.css";

export const MediumLargeNav = ({
  tab,
  state,
  device,
  className,
  home = "https://c.animaapp.com/S5qOUeiW/img/home-2.svg",
  labelClassName,
  events = "https://c.animaapp.com/S5qOUeiW/img/events-2.svg",
  text = "Events",
  connect = "https://c.animaapp.com/S5qOUeiW/img/connect-2.svg",
  text1 = "Connect",
  applicationsClassName,
  communities = "https://c.animaapp.com/S5qOUeiW/img/communities-2.svg",
  helpCenter = "https://c.animaapp.com/S5qOUeiW/img/help-center-2.svg",
  homeIcon = "https://c.animaapp.com/S5qOUeiW/img/icon-47.svg",
  eventsIcon = "https://c.animaapp.com/S5qOUeiW/img/icon-49.svg",
  connectIcon = "https://c.animaapp.com/S5qOUeiW/img/icon-37.svg",
  communitiesIcon = "https://c.animaapp.com/S5qOUeiW/img/icon-41.svg",
  communitiesImg = "https://c.animaapp.com/S5qOUeiW/img/icon-40.svg",
  toolkitIcon = "https://c.animaapp.com/S5qOUeiW/img/icon-43.svg",
  icon = "https://c.animaapp.com/S5qOUeiW/img/icon-54.svg",
  img = "https://c.animaapp.com/S5qOUeiW/img/icon-44.svg",
  helpCenterCombinedShape = "https://c.animaapp.com/S5qOUeiW/img/combined-shape-7.svg",
  toolkit = "https://c.animaapp.com/S5qOUeiW/img/toolkit-1.svg",
  icon1 = "https://c.animaapp.com/S5qOUeiW/img/icon-55.svg",
}) => {
  return (
    <div className={`medium-large-nav ${device} ${className}`}>
      {tab === "events" && ["large", "medium"].includes(device) && (device === "medium" || state === "selected") && (
        <Events icon={eventsIcon} />
      )}

      {tab === "connect" &&
        (device === "medium" || state === "selected") &&
        ["default", "selected"].includes(state) && <Connect icon={connectIcon} />}

      {((device === "large" && state === "selected" && tab === "events") ||
        (device === "medium" && state === "default" && tab === "connect") ||
        (device === "medium" && tab === "events") ||
        (state === "selected" && tab === "connect")) && (
        <div className={`label ${state} device-${device} ${labelClassName}`}>
          {tab === "events" && <>{text}</>}

          {tab === "connect" && <>{text1}</>}
        </div>
      )}

      {tab === "communities" && ["large", "medium"].includes(device) && (device === "medium" || state === "selected") && (
        <>
          <Communities
            className="communities-instance"
            icon={communitiesImg}
            iconClassName={`${device === "large" && "class-2"}`}
            iconClassNameOverride={`${device === "large" && "class-3"}`}
            img={communitiesIcon}
            overlapGroupClassName={`${device === "large" && "class"}`}
          />
          <div className={`text-wrapper state-${state} device-0-${device} ${labelClassName}`}>Communities</div>
        </>
      )}

      {tab === "toolkit" && (device === "medium" || state === "selected") && ["default", "selected"].includes(state) && (
        <>
          <Toolkit icon={toolkitIcon} />
          <div className={`div state-0-${state} device-1-${device} ${labelClassName}`}>Toolkit</div>
        </>
      )}

      {tab === "applications" && (
        <>
          <div className={`applications ${applicationsClassName}`}>
            <img
              className="img"
              alt="Icon"
              src={state === "selected" ? icon : state === "default" && device === "large" ? icon1 : img}
            />
          </div>
          <div className={`label-2 state-1-${state} device-2-${device} ${labelClassName}`}>Applications</div>
        </>
      )}

      {tab === "support" && ["large", "medium"].includes(device) && (device === "medium" || state === "selected") && (
        <>
          <HelpCenter combinedShape={helpCenterCombinedShape} />
          <div className={`label-3 state-2-${state} device-3-${device} ${labelClassName}`}>Support</div>
        </>
      )}

      {tab === "home" && ["large", "medium"].includes(device) && (device === "medium" || state === "default") && (
        <>
          <Home icon={homeIcon} />
          <div className={`label-4 state-3-${state} device-4-${device} ${labelClassName}`}>Home</div>
        </>
      )}

      {((device === "large" && state === "default" && tab === "communities") ||
        (device === "large" && state === "default" && tab === "connect") ||
        (device === "large" && state === "default" && tab === "events") ||
        (device === "large" && state === "default" && tab === "support") ||
        (device === "large" && state === "default" && tab === "toolkit") ||
        (device === "large" && state === "selected" && tab === "home")) && (
        <>
          <img
            className={`applications ${applicationsClassName}`}
            alt="Home"
            src={
              tab === "events"
                ? events
                : tab === "connect"
                ? connect
                : tab === "communities"
                ? communities
                : tab === "toolkit"
                ? toolkit
                : tab === "support"
                ? helpCenter
                : home
            }
          />
          <div className={`label-5 state-4-${state} ${labelClassName}`}>
            {tab === "home" && <>Home</>}

            {tab === "events" && <>{text}</>}

            {tab === "connect" && <>{text1}</>}

            {tab === "communities" && <>Communities</>}

            {tab === "toolkit" && <>Toolkit</>}

            {tab === "support" && <>Support</>}
          </div>
        </>
      )}
    </div>
  );
};

MediumLargeNav.propTypes = {
  tab: PropTypes.oneOf(["connect", "events", "applications", "communities", "home", "toolkit", "support"]),
  state: PropTypes.oneOf(["selected", "default"]),
  device: PropTypes.oneOf(["large", "medium"]),
  home: PropTypes.string,
  events: PropTypes.string,
  text: PropTypes.string,
  connect: PropTypes.string,
  text1: PropTypes.string,
  communities: PropTypes.string,
  helpCenter: PropTypes.string,
  homeIcon: PropTypes.string,
  eventsIcon: PropTypes.string,
  connectIcon: PropTypes.string,
  communitiesIcon: PropTypes.string,
  communitiesImg: PropTypes.string,
  toolkitIcon: PropTypes.string,
  icon: PropTypes.string,
  img: PropTypes.string,
  helpCenterCombinedShape: PropTypes.string,
  toolkit: PropTypes.string,
  icon1: PropTypes.string,
};
