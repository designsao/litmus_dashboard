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
import { MediumLargeNav } from "../MediumLargeNav";
import "./style.css";

export const NavTabs = ({
  tab,
  state,
  device,
  className,
  mediumLargeNavLabelClassName,
  mediumLargeNavText = "Events",
  mediumLargeNavText1 = "Connect",
  mediumLargeNavCommunities = "https://c.animaapp.com/S5qOUeiW/img/communities-1.svg",
  mediumLargeNavHelpCenter = "https://c.animaapp.com/S5qOUeiW/img/help-center-1.svg",
  mediumLargeNavHome = "https://c.animaapp.com/S5qOUeiW/img/home-3.svg",
}) => {
  return (
    <div className={`nav-tabs device-5-${device} ${className}`}>
      {tab === "home" && device === "mobile" && (
        <Home
          icon={
            state === "selected"
              ? "https://c.animaapp.com/S5qOUeiW/img/icon-47.svg"
              : "https://c.animaapp.com/S5qOUeiW/img/icon.svg"
          }
        />
      )}

      {tab === "events" && device === "mobile" && (
        <Events
          icon={
            state === "selected"
              ? "https://c.animaapp.com/S5qOUeiW/img/icon-49.svg"
              : "https://c.animaapp.com/S5qOUeiW/img/icon-34.svg"
          }
        />
      )}

      {device === "mobile" && ["events", "home"].includes(tab) && (
        <div className={`label-6 state-5-${state}`}>
          {tab === "home" && <>Home</>}

          {tab === "events" && <>Events</>}
        </div>
      )}

      {tab === "connect" && device === "mobile" && (
        <>
          <Connect
            icon={
              state === "selected"
                ? "https://c.animaapp.com/S5qOUeiW/img/icon-50.svg"
                : "https://c.animaapp.com/S5qOUeiW/img/icon-36.svg"
            }
          />
          <div className={`label-7 state-6-${state}`}>Connect</div>
        </>
      )}

      {device === "mobile" && tab === "communities" && (
        <>
          <Communities
            className="instance-node"
            icon={
              state === "selected"
                ? "https://c.animaapp.com/S5qOUeiW/img/icon-40.svg"
                : "https://c.animaapp.com/S5qOUeiW/img/icon-38.svg"
            }
            img={
              state === "selected"
                ? "https://c.animaapp.com/S5qOUeiW/img/icon-9.svg"
                : "https://c.animaapp.com/S5qOUeiW/img/icon-7.svg"
            }
          />
          <div className={`label-8 state-7-${state}`}>Communities</div>
        </>
      )}

      {(device === "medium" || tab === "more") && (
        <>
          <div className={`more tab-${tab} device-6-${device} state-8-${state}`}>
            {tab === "more" && (
              <img
                className="icon-2"
                alt="Icon"
                src={
                  state === "selected"
                    ? "https://c.animaapp.com/S5qOUeiW/img/icon-11.svg"
                    : "https://c.animaapp.com/S5qOUeiW/img/icon-10.svg"
                }
              />
            )}
          </div>
          <div className={`label-9 tab-0-${tab} device-7-${device} state-9-${state}`}>
            {tab === "more" && <>More</>}

            {device === "medium" && (
              <MediumLargeNav
                className="medium-large-nav-base-tabs"
                communitiesIcon={
                  state === "selected" && tab === "communities"
                    ? "https://c.animaapp.com/S5qOUeiW/img/icon-19.svg"
                    : state === "default" && tab === "communities"
                    ? "https://c.animaapp.com/S5qOUeiW/img/icon-21.svg"
                    : undefined
                }
                communitiesImg={
                  state === "selected" && tab === "communities"
                    ? "https://c.animaapp.com/S5qOUeiW/img/icon-18.svg"
                    : state === "default" && tab === "communities"
                    ? "https://c.animaapp.com/S5qOUeiW/img/icon-20.svg"
                    : undefined
                }
                connectIcon={
                  state === "selected" && tab === "connect"
                    ? "https://c.animaapp.com/S5qOUeiW/img/icon-16.svg"
                    : state === "default" && tab === "connect"
                    ? "https://c.animaapp.com/S5qOUeiW/img/icon-17.svg"
                    : undefined
                }
                device="medium"
                eventsIcon={
                  tab === "events" && state === "selected"
                    ? "https://c.animaapp.com/S5qOUeiW/img/icon-14.svg"
                    : state === "default" && tab === "events"
                    ? "https://c.animaapp.com/S5qOUeiW/img/icon-15.svg"
                    : undefined
                }
                helpCenterCombinedShape={
                  tab === "support" && state === "selected"
                    ? "https://c.animaapp.com/S5qOUeiW/img/combined-shape-2.svg"
                    : tab === "support" && state === "default"
                    ? "https://c.animaapp.com/S5qOUeiW/img/combined-shape-3.svg"
                    : undefined
                }
                homeIcon={
                  tab === "home" && state === "selected"
                    ? "https://c.animaapp.com/S5qOUeiW/img/icon-12.svg"
                    : tab === "home" && state === "default"
                    ? "https://c.animaapp.com/S5qOUeiW/img/icon-13.svg"
                    : undefined
                }
                icon={
                  tab === "applications" && state === "selected"
                    ? "https://c.animaapp.com/S5qOUeiW/img/icon-24.svg"
                    : undefined
                }
                img={
                  state === "default" && tab === "applications"
                    ? "https://c.animaapp.com/S5qOUeiW/img/icon-25.svg"
                    : undefined
                }
                state={state === "default" ? "default" : "selected"}
                tab={
                  tab === "events"
                    ? "events"
                    : tab === "connect"
                    ? "connect"
                    : tab === "communities"
                    ? "communities"
                    : tab === "toolkit"
                    ? "toolkit"
                    : tab === "applications"
                    ? "applications"
                    : tab === "support"
                    ? "support"
                    : "home"
                }
                text={tab === "events" ? "Events" : undefined}
                text1={tab === "connect" ? "Connect" : undefined}
                toolkitIcon={
                  state === "selected" && tab === "toolkit"
                    ? "https://c.animaapp.com/S5qOUeiW/img/icon-22.svg"
                    : state === "default" && tab === "toolkit"
                    ? "https://c.animaapp.com/S5qOUeiW/img/icon-23.svg"
                    : undefined
                }
              />
            )}
          </div>
        </>
      )}

      {tab === "support" && device === "mobile" && (
        <>
          <HelpCenter
            combinedShape={
              state === "selected"
                ? "https://c.animaapp.com/S5qOUeiW/img/combined-shape-1.svg"
                : "https://c.animaapp.com/S5qOUeiW/img/combined-shape.svg"
            }
          />
          <div className="label-10">Support</div>
        </>
      )}

      {device === "large" && (
        <div className="overlap-group">
          <div className={`selector state-10-${state}`} />
          <div className="frame">
            <MediumLargeNav
              applicationsClassName={`${state === "default" && tab === "communities" && "class-4"}`}
              className="medium-large-nav-base-tabs"
              communities={mediumLargeNavCommunities}
              communitiesIcon={
                state === "selected" && tab === "communities"
                  ? "https://c.animaapp.com/S5qOUeiW/img/icon-28.svg"
                  : undefined
              }
              communitiesImg={
                state === "selected" && tab === "communities"
                  ? "https://c.animaapp.com/S5qOUeiW/img/icon-27.svg"
                  : undefined
              }
              connect={
                state === "default" && tab === "connect"
                  ? "https://c.animaapp.com/S5qOUeiW/img/connect-3.svg"
                  : undefined
              }
              connectIcon={
                state === "selected" && tab === "connect"
                  ? "https://c.animaapp.com/S5qOUeiW/img/icon-31.svg"
                  : undefined
              }
              device="large"
              events={
                state === "default" && tab === "events" ? "https://c.animaapp.com/S5qOUeiW/img/events-3.svg" : undefined
              }
              eventsIcon={
                tab === "events" && state === "selected" ? "https://c.animaapp.com/S5qOUeiW/img/icon-29.svg" : undefined
              }
              helpCenter={mediumLargeNavHelpCenter}
              helpCenterCombinedShape={
                tab === "support" && state === "selected"
                  ? "https://c.animaapp.com/S5qOUeiW/img/combined-shape-4.svg"
                  : undefined
              }
              home={mediumLargeNavHome}
              homeIcon={
                tab === "home" && state === "default" ? "https://c.animaapp.com/S5qOUeiW/img/icon-26.svg" : undefined
              }
              icon={
                tab === "applications" && state === "selected"
                  ? "https://c.animaapp.com/S5qOUeiW/img/icon-32.svg"
                  : undefined
              }
              icon1={
                state === "default" && tab === "applications"
                  ? "https://c.animaapp.com/S5qOUeiW/img/icon-33.svg"
                  : undefined
              }
              labelClassName={mediumLargeNavLabelClassName}
              state={state === "default" ? "default" : "selected"}
              tab={
                tab === "communities"
                  ? "communities"
                  : tab === "events"
                  ? "events"
                  : tab === "toolkit"
                  ? "toolkit"
                  : tab === "connect"
                  ? "connect"
                  : tab === "applications"
                  ? "applications"
                  : tab === "support"
                  ? "support"
                  : "home"
              }
              text={mediumLargeNavText}
              text1={mediumLargeNavText1}
              toolkit={
                state === "default" && tab === "toolkit" ? "https://c.animaapp.com/S5qOUeiW/img/toolkit.svg" : undefined
              }
              toolkitIcon={
                state === "selected" && tab === "toolkit"
                  ? "https://c.animaapp.com/S5qOUeiW/img/icon-30.svg"
                  : undefined
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

NavTabs.propTypes = {
  tab: PropTypes.oneOf(["connect", "events", "applications", "more", "home", "communities", "toolkit", "support"]),
  state: PropTypes.oneOf(["selected", "default"]),
  device: PropTypes.oneOf(["large", "medium", "mobile"]),
  mediumLargeNavText: PropTypes.string,
  mediumLargeNavText1: PropTypes.string,
  mediumLargeNavCommunities: PropTypes.string,
  mediumLargeNavHelpCenter: PropTypes.string,
  mediumLargeNavHome: PropTypes.string,
};
