import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast, ToastContainer, Zoom, Bounce } from "react-toastify";

import "./styles.scss";

import { withRouter } from "react-router-dom";
toast.configure();

function Contact(props) {
  const { register, handleSubmit, reset } = useForm();

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
    <>
      <div className="contact-wrapper">
        <div className="contact-heading">
          <h1>CONTACT ME</h1>
        </div>
        <div className="contact-main">
          <form onSubmit={handleSubmit(onSubmit)} className="form-style">
            <input
              //   className={classes.input}
              type="text"
              placeholder="Name"
              name="name"
              ref={register}
            />
            <br />
            <input
              className="email" //   className={classes.input}
              type="text"
              placeholder="Email"
              name="email"
              ref={register}
            />
            <br />
            <input
              className="message-area"
              type="textarea"
              placeholder="Message"
              name="message"
              ref={register}
              //   className={classes.messageInput}
            />
            <br />
            <button
              className="button-style"
              variant="contained"
              color="secondary"
              type="submit"
              //   startIcon={<SendIcon />}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default withRouter(Contact);
