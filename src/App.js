// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Login from "./components/Login";
// import SignUp from "./components/Signup";
// import Petitionform from "./components/Petitionpost";
// import Appone from "./components/Homeone";

// import Home from "./Home";

// import UploadPH from "./components/PetitionForm";
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
//           <div className="container">
//             <Link className="navbar-brand" >
//               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nsiNyNglW8fB3Q5JG91S0f14ShY0rlw-fg&usqp=CAU" alt="car" height="65px"/>
//               Crown cars
//             </Link>
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     to={"/sign-in"}
//                     style={{ color: "black" }}
//                   >
//                     {" "}
//                     <b>Log-in </b>{" "}
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     to={"/sign-up"}
//                     style={{ color: "black" }}
//                   >
//                     {" "}
//                     <b>Sign up </b>{" "}
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     to={"/Pfu"}
//                     style={{ color: "black" }}
//                   >
//                     {" "}
//                     <b>Petition handler form </b>{" "}
//                   </Link>

//                 </li>

//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     to={"/petition"}
//                     style={{ color: "black" }}
//                   >
//                     {" "}
//                     <b>Petitionform </b>{" "}
//                   </Link>

//                 </li>

//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     to={"/Home"}
//                     style={{ color: "black" }}
//                   >
//                     {" "}
//                     <b>Petitionform </b>{" "}
//                   </Link>

//                 </li>

//               </ul>
//             </div>
//           </div>
//         </nav>
//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             <Routes>
//               <Route path="/Home" element={<Appone />} />
//               <Route path="/sign-in" element={<Login />} />
//               <Route path="/sign-up" element={<SignUp />} />

//               <Route path="/Pfu" element={<UploadPH />} />
//              <Route path ="/petition" element={<Petitionform/>} />

//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Homestuffs/Login";
import SignUp from "./Homestuffs/Signup";
import Petitionform from "./components/Petitionformrelated/PostPetition";
import UploadPH from "./components/PetitionHandlerRelated/PostPH";
import UpdatePetitionhandler from "./components/PetitionHandlerRelated/UpdatePH";
import UpdatePetitionform from "./components/Petitionformrelated/UpdatePetition";
import FinalShop from "./components/PetitionHandlerRelated/FetchPH";
import LoginSelection from "./Homestuffs/Rpage";
import UserDashboard from "./Homestuffs/Rdashboard";
import Admindash from "./Homestuffs/AdminDash";
import Userviewpetition from "./components/Petitionformrelated/ViewPetitionform";
import FetchHandler from "./components/PetitionHandlerRelated/FetchPH";
import Sidebar from "./Homestuffs/Adash";
import PetitionStatusUpdate from "./components/Petitionformrelated/ststus";
import SidebarPetitionhandler from "./Homestuffs/Bdash";
import Userviewpetition1 from "./Just/Justviewpetition";
import UserSidebar from "./Homestuffs/Unavbar";
import Petitionformnull from "./components/Petitionformrelated/PostPetition";
import CheckStatus from "./components/Petitionformrelated/SeeStatusbyid";

import AdminDashboardComponent from "./Homestuffs/AdminDashboard";
import AssignPetition from "./Homestuffs/Additional";
import Handlerviewpetition from "./components/Petitionformrelated/ViewPetitionform copy 2";
import Collasped from "./Newnavbar/NN";










function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nsiNyNglW8fB3Q5JG91S0f14ShY0rlw-fg&usqp=CAU" alt="car" height="65px"/> */}
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/sign-in"
                    style={{ color: "black" }}
                  >
                    <b>Log-in</b>
                  </Link> */}
                {/* </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/sign-up"
                    style={{ color: "black" }}
                  >
                    <b>Sign up</b>
                  </Link>
                </li> */}

                {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/petitionhandlerupdateform"
                    style={{ color: "black" }}
                  >
                    <b>Handlerupdate</b>
                  </Link>
                </li> */}

                {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/petitionform"
                    style={{ color: "black" }}
                  >
                    <b>Handlerpost</b>
                  </Link>
                </li> */}

                {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/petition"
                    style={{ color: "black" }}
                  >
                    <b>Petition form post</b>
                  </Link>
                </li> */}
                {/* 
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/updatepetitionform"
                    style={{ color: "black" }}
                  >
                    <b>Petitionformupdate</b>
                  </Link>
                </li> */}

                {/* 
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Finalshop"
                    style={{ color: "black" }}
                  >
                    <b>Read petitionhandler</b>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <div>
            <Routes>
              <Route path="/" element={<LoginSelection />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/Postpetition" element={<Petitionform />} />
              <Route path="/uploadpetitionhandler" element={<UploadPH />} />
              <Route
                path="/petitionhandlerupdateform"
                element={<UpdatePetitionhandler />}
              />
              {/* <Route
                path="/updatepetitionform"
                element={<UpdatePetitionform />}
              /> */}
              <Route
                path="/PetitionHandlerdetails"
                element={<FetchHandler />}
              />
              {/* <Route path="/" element={<LoginSelection />} /> */}
              {/* <Route path="/dashboard" element={<UserDashboard/>}/> */}
              {/* <Route path="/AdminDash" element={<Admindash/>}/> */}
              <Route path="/userpetitionform" element={<Userviewpetition />} />
              <Route
                element={<Handlerviewpetition />}
                path="/handlerpetition"
              />
              <Route path="/Admindashboard" element={<Sidebar />} />
              <Route path="/updatestatus" element={<PetitionStatusUpdate />} />
              <Route
                path="/petitionhandlerdashboard"
                element={<SidebarPetitionhandler />}
              />
              <Route path="/viewpetitionform" element={<Userviewpetition1 />} />
              <Route path="/Postpetition" element={<Petitionformnull />} />
              <Route path="/Assignpetition" element={<AssignPetition />} />

              <Route path="/Userdashboard" element={<UserSidebar />} />
              <Route
                path="/updatepetitionhandler"
                element={<UpdatePetitionhandler />}
              />
              <Route path="/seestatusbyid" element={<CheckStatus />} />
              <Route
                path="/Handlerviewpetition"
                element={<Handlerviewpetition />}
              />

              <Route
                element={<AdminDashboardComponent />}
                path="/dashboard"
              ></Route>

              <Route
                element={<Collasped />}
                path="/newdashboard"
              ></Route>

              {/* <Route path="/admindashboard" element={<Admindash />} /> */}

              {/* <Route path="/Deletepetition" element={<Userviewpetition/>}/> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
