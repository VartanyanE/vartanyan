import React from "react";
import "./style.scss";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import VisibilityIcon from "@material-ui/icons/Visibility";

export default function SimpleBottomNavigation(props) {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className="nav-style"
    >
      <BottomNavigationAction
        onClick={props.compliment}
        label="Compliment"
        icon={<ThumbUpIcon />}
      />
      <BottomNavigationAction
        onClick={props.joke}
        label="Joke"
        icon={<InsertEmoticonIcon />}
      />{" "}
      <BottomNavigationAction
        onClick={props.motivate}
        label="Quote Of The Day"
        icon={<VisibilityIcon />}
      />
      <BottomNavigationAction
        onClick={props.horoscope}
        label="Horoscope"
        icon={<VisibilityIcon />}
      />
    </BottomNavigation>
  );
}
