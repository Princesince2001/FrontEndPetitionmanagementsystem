import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";

function LoginSelection() {
  return (
    <>
      {/* navbar segment */}
      <div>
        {" "}
        <nav class="navbar fixed-top  " style={{paddingLeft:"70px" }}>
          <div class="container-fluid">
            <span style={{fontSize:"30px", "marginTop":"0.1px"}} class="navbar-brand mb-0 h1">E-Petition</span>
          </div>
          
        </nav>
        {/* body segment */}
        <div 
          className="d-flex justify-content-center align-items-center" id="backone"
          style={{ height: "100vh" }}
        >
          <div
            className="text-center" 
            style={{  height:"20%",width:"30%",marginLeft:"42px",background:"transparent"}}
          >
            <h2 style={{marginTop:"8%"}}> click here based on your role</h2>
            <Link to="/sign-up">
              {" "}
              <button className="btn btn-primary btn btn-lg  m-2">User Login</button>
            </Link>
            <Link to="/sign-in">
              {" "}
              <button className="btn btn-secondary btn btn-lg m-2">Admin Login</button>
            </Link>
            <Link to="/sign-in">
              {" "}
              <button className="btn btn-info btn btn-lg  m-2">Petition handler</button>
            </Link>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default LoginSelection;
