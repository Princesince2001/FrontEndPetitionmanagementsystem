import React, { Component } from "react";
import { useState, useRef } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "../index.css";
import { Cookie } from "@mui/icons-material";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const msgref = useRef();

  const handleSignupForm = async (event) => {
    event.preventDefault();
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    let param = {
      email: Email,
      password: Password,
    };

    let URL = "http://localhost:5112/api/User/Signin";
    await axios
      .post(URL, param, {
        headers: headers,
      })
      .then((response) => {
        if (response.data == null || response.data == undefined) {
          console.log("success");
        } else {
          console.log(response.data);
          // JSON.parse(response); // should fail
          // JSON.parse(response["data"]); // should work
          var result = JSON.parse(response.data);
          console.log(result.emailstatus); // or if you prefer this notation

          if (
            result.emailstatus == true &&
            result.passwordstatus == true &&
            result.Role == "Admin"
          ) {
            msgref.current.style.visibility = "visible";
            Cookies.set("Id", result.Id);

            setTimeout(() => {
              msgref.current.style.visibility = "hidden";
              navigate("/Admindashboard");
            }, 1000);
          } else if (
            result.emailstatus == true &&
            result.passwordstatus == true &&
            result.Role == "User"
          ) {
            msgref.current.style.visibility = "visible";
            Cookies.set("Id", result.Id);

            setTimeout(() => {
              msgref.current.style.visibility = "hidden";
              navigate("/Userdashboard");
            }, 1000);
          }

          // if (result.emailstatus == true && result.passwordstatus == true && result.Role == "User") {
          //   msgref.current.style.visibility = "visible";

          //   setTimeout(() => {
          //     msgref.current.style.visibility = "hidden";
          //     navigate('/Userdashboard')
          //   }, 1000);

          // }
          else if (
            result.emailstatus == true &&
            result.passwordstatus == true &&
            result.Role == "PetitionHandler"
          ) {
            msgref.current.style.visibility = "visible";
            Cookies.set("Id", result.Id);

            setTimeout(() => {
              msgref.current.style.visibility = "hidden";
              navigate("/petitionhandlerdashboard");
            }, 1000);
          } else if (
            result.emailstatus == false &&
            result.passwordstatus == false
          ) {
            alert("Invalid email");
          } else if (
            result.emailstatus == true &&
            result.passwordstatus == false
          ) {
            alert("Invalid password");
          }
        }
      });
  };

  return (
    <div className="auth-wrapper" id="onoone">
      <div style={{paddingBottom:"450px"}}>
     <div className="auth-inner" style={{fontSize:"large"}}>
        <form onSubmit={handleSignupForm}>
          <h3 style={{fontSize:"large"}}>Sign In</h3>
          <div className="mb-3">
            <label >Email address</label>
            <input style={{fontSize:"medium"}}
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input style={{fontSize:"medium"}}
              type="password"
              className="form-control"
              placeholder="Enter password"
              required="Please enter "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid" >
            <button style={{fontSize:"medium"}} type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p> */}
          <div class="alert alert-success msg" ref={msgref} role="alert">
            Login Successful!
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
