import React, { useState, useEffect } from "react";
import "./style.scss";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BuildIcon from "@material-ui/icons/Build";
import EmailIcon from "@material-ui/icons/Email";
import { withRouter } from "react-router";
import { useSpring, animated } from "react-spring";

function SimpleBottomNavigation(props) {
  useEffect(() => {
    setToggle(true);
  }, []);
  const [value, setValue] = React.useState(0);
  const [toggle, setToggle] = useState(true);
  const animate = useSpring({
    config: {
      duration: 2000,
      tension: 400,
      mass: 5,
    },
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });
  const goHome = () => {
    props.history.push({
      pathname: "/",
    });
  };
  const goBio = () => {
    props.history.push({
      pathname: "/bio",
    });
  };
  const goProjects = () => {
    props.history.push({
      pathname: "/projects",
    });
  };
  const goContact = () => {
    props.history.push({
      pathname: "/contact",
    });
  };
  return (
    <animated.div style={animate}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className="nav-style"
      >
        <BottomNavigationAction
          onClick={goHome}
          label="HOME"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={goBio}
          label="BIO"
          icon={<MenuBookIcon />}
        />{" "}
        <BottomNavigationAction
          onClick={goProjects}
          label="PROJECTS"
          icon={<BuildIcon />}
        />
        <BottomNavigationAction
          onClick={goContact}
          label="CONTACT"
          icon={<EmailIcon />}
        />
      </BottomNavigation>
    </animated.div>
  );
}

export default withRouter(SimpleBottomNavigation);
