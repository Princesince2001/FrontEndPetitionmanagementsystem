import React from "react";
import { Link } from "react-router-dom";

function Admindash() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/Sign-up">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          {/* Sign-out Button */}
          <div className="d-flex">
            <Link className="btn btn-outline-light" to="/sign-out">
              Sign Out
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
            style={{ minHeight: "100vh", width: "250px" }} // Increase the length of the sidebar and add background color
          >
            <div className="position-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link text-red" to="/viewpetitionform">
                    View petition
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-red" to="/petitionhandlerupdateform">
                    Add petition handler
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-red" to="/PetitionHandlerdetails">
                    View Petition handler
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link text-red" to="/page3">
                    
                  </Link>
                </li> */}
              </ul>
            </div>
          </nav>

          {/* Page Content */}
          <main
            className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            style={{
              backgroundImage: `url('your-bg-image-url')`, // Add background image to content area
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1
              className="text-white"
              style={{ paddingTop: "20px" }} // Add padding to the top
            >
              Petition Management System [Admin]
            </h1>
        <h1>Hello</h1>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Admindash;
