import React from "react";
import "./style.scss";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';

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
        onClick={props.home}
        label="HOME"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        onClick={props.bio}
        label="BIO"
        icon={<MenuBookIcon />}
      />{" "}
      <BottomNavigationAction
        onClick={props.projects}
        label="PROJECTS"
        icon={<BuildIcon />}
      />
       <BottomNavigationAction
        onClick={props.contact}
        label="CONTACT"
        icon={<EmailIcon />}
      />
     
    </BottomNavigation>
  );
}
