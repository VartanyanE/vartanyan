import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
// import { BrowserRouter as Router } from "react-router-dom";
import { Paper, Grid, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { toast, ToastContainer, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTransition, animated, useSpring, config } from "react-spring";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import { Link } from "react-scroll";
import "./style.css";
toast.configure();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  itemCenter: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px !important",
    fontFamily: "Alata sans-serif",

    alignItems: "center",
  },

  customtoast: {
    backgroundColor: "#f44336",
  },

  messageInput: {
    height: "80px",
    backgroundColor: "#FBFBEF !important",

    fontSize: "20px",
    fontFamily: "Alata sans-serif",
  },

  messageSucces: {
    color: "black",
  },

  input: {
    backgroundColor: "#FBFBEF !important",

    marginBottom: "6px !important",
    fontSize: "20px",
    fontFamily: "Alata sans-serif",
  },

  buttonSize: {
    height: "20px",
    width: "20px",
  },
  button: {
    padding: "20px",
  },
}));

function Contact() {
  const classes = useStyles();
  const [on, toggle] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  // const successToast = () => {
  //   toast("Your Message Was Sent!", {
  //     className: "customtoast",
  //     draggable: true,
  //     position: toast.POSITION.BOTTOM_CENTER,
  //     transition: Zoom,
  //     autoClose: 4000,
  //   });
  // };

  const animation = useSpring({
    opacity: on ? 1 : 0,
  });

  const messageClear = () => {
    toggle(false);
  };

  const onSubmit = (data, event) => {
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: data,
    }).then((response) => {
      if (response.data.msg === "success") {
        toast.info("Your Message Has Been Received!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // setTimeout(function () {
        //   messageClear();
        // }, 5000);
        event.target.reset();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  return (
    <animated.div className={classes.root}>
      <Grid container spacing={0} style={{ marginTop: "100px" }}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} className={classes.itemCenter}>
          <strong>
            {" "}
            <h3>Send Me A Message</h3>
          </strong>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={12} className={classes.paper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className={classes.input}
              type="text"
              placeholder="Name"
              name="name"
              ref={register}
              color="primary"
            />
            <br />
            <input
              className={classes.input}
              type="text"
              placeholder="Email"
              name="email"
              ref={register}
            />
            <br />
            <input
              type="textarea"
              placeholder="Message"
              name="message"
              ref={register}
              className={classes.messageInput}
            />
            <br />
            <Button
              className="send-button"
              variant="contained"
              color="secondary"
              type="submit"
              startIcon={<SendIcon />}
            >
              Send
            </Button>
          </form>
          <animated.h5 className={classes.messageSucces} style={animation}>
            Got it! Will get back to you ASAP!
          </animated.h5>
        </Grid>
      </Grid>
    </animated.div>
  );
}

export default Contact;
