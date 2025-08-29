import React, {useContext} from "react";
import "./twitter.scss";
import {Timeline} from "react-twitter-widgets";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Twitter() {
  const {isDark} = useContext(StyleContext);

  if (!twitterDetails.display) {
    return null;
  }
  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
  }
  if (twitterDetails.userName) {
    return (
      <div className="tw-main-div" id="twitter">
        <div className="centerContent">
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: twitterDetails.userName
            }}
            options={{
              height: "400",
              theme: isDark ? "dark" : "light"
            }}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
