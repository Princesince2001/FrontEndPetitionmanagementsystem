
import React from "react";
import { Navbar, Container } from "react-bootstrap";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Sidebar.css"; // Import custom CSS file
 
function Sidebar() {
  return (
    <div>
      <Navbar variant="dark" expand="lg" className="mb-0" id="hola">
        <Container>
          <Navbar.Brand className="fone">
            <h1 style={{ color: "white" }}>Petition Management System</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="https://svg-files.pixelied.com/2a1d203c-4cf5-4f84-ba4e-cc59e4821955/thumb-256px.png" width="30" height="30" alt="" style={{marginRight:"1250px"}}/>
    <h2 style={{paddingBottom:"78px"}}className="nav-heading">Petition Management System</h2>
  </a>
</nav> */}
      <div className="container-fixed dashboard" id="okok">
        <div className="row flex-nowrap">
          <div className="bg col-md-1 col-lg-1 min-vh-100 color" style={{ width: 270 }}>
            <b>
              <hr className="custom-hr" />
            </b>
            <div className="p-9">
              <a className="d-flex text-decoration-none align-items-center">
                <ManageAccountsIcon fontSize="large" className="sidebar-icon" />
                <span className="fs-7 d-none d-sm-inline" id="panel">Admin Panel</span>
              </a>
              <hr className="custom-hr" />
              <ul className="nav nav-pills flex-column mt-2">
                <li className="nav-item item">
                  <a href="./Home" className="nav-link text-white">
                    <PhonelinkSetupIcon fontSize="small" className="sidebar-icon" />
                    <span className="fs-3 d-none d-sm-inline Menu" style={{ paddingLeft: "80px" }}> Admin Menu </span>
                  </a>
                </li>
                <li className="nav-item item">
                  <a href="/viewpetitionform" className="nav-link text-white">
                    <PeopleIcon fontSize="medium" className="sidebar-icon" />
                    <span className="fs-3 d-none d-sm-inline" style={{ paddingRight: "60px" }}> View petition </span>
                  </a>
                </li>
                <li className="nav-item item">
                  <a href="/uploadpetitionhandler" className="nav-link text-white" >
                    <Inventory2Icon fontSize="medium" className="sidebar-icon" />{" "}
                    <span className="fs-3 d-none d-sm-inline"> Add Petition Handler </span>
                  </a>
                </li>
                <li className="nav-item item">
                  <a href="/PetitionHandlerdetails" className="nav-link text-white" >
                    <Inventory2Icon fontSize="medium" className="sidebar-icon" />{" "}
                    <span className="fs-3 d-none d-sm-inline"> View Petition Handler </span>
                  </a>
                </li>
                <li className="nav-item item">
                  <a href="/dashboard" className="nav-link text-white" >
                    <ShoppingBagIcon fontSize="medium" className="sidebar-icon" />
                    <span className="fs-3 d-none d-sm-inline" style={{ paddingRight: "84px" }}> Dashboard </span>
                  </a>
                </li>
                <li className="nav-item item">
                  <a href="/petitionhandlerupdateform" className="nav-link text-white" >
                    <ShoppingBagIcon fontSize="medium" className="sidebar-icon" />
                    <span className="fs-3 d-none d-sm-inline" style={{ paddingRight: "10px" }}> Edit Petition Handler </span>
                  </a>
                </li>
                <li className="nav-item item">
                  <a href="/Assignpetition" className="nav-link text-white" >
                    <ShoppingBagIcon fontSize="medium" className="sidebar-icon" />
                    <span className="fs-3 d-none d-sm-inline" style={{ paddingRight: "60px" }}> Assign petition </span>
                  </a>
                </li>
                <li className="nav-item item">
                  <a href="/sign-in" className="nav-link text-white">
                    <LogoutIcon fontSize="medium" className="sidebar-icon" />
                    <bu className="fs-3 d-none d-sm-inline " style={{ paddingRight: "110px" }}>Logout</bu>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
 
export default Sidebar;








// import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// // import "../components/Dashboard.css";
// import Navbar from './Navbar';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import PeopleIcon from '@mui/icons-material/People';
// import LogoutIcon from '@mui/icons-material/Logout';
// // import Admin from '../components/images/Admin.jpg';
 
 
 
 
 
 
 
// function Sidebar() {
   
//   return (
//     <div>
   
//     <div className='sidebar'><Navbar/>
//     <div class="container-fixed dashboard" id='dashboard'>
//     <div class="row flex-nowrap">
//         <div class="bg col-md-4 col-lg-3 min-vh-100 color">
//             <div class="p-2">
//             <a class="d-flex text-decoration-none align-items-center">
//             <ManageAccountsIcon fontSize='large' style={{color:"HighlightText",paddingRight:5}} /><span class="fs-5 d-none d-sm-inline" style={{color:"HighlightText"}}>Admin Panel</span>
//             </a>
//             <hr style={{color:"white"}}></hr>
//             <ul class="nav nav-pills flex-column mt-4">
//                 <li class="nav-item item">
//                 <a href="./uploadFile" class="nav-link text-white" >
//                 <PhonelinkSetupIcon fontSize='medium'style={{paddingRight:6}} /><span class="fs-6 d-none d-sm-inline Menu" >Adding</span>
//                 </a>
//                 </li>&nbsp;
 
//                 <li class="nav-item item">
//                 <a href="./Uploadform" class="nav-link text-white" >
//                 <PhonelinkSetupIcon fontSize='medium'style={{paddingRight:6}} /><span class="fs-6 d-none d-sm-inline Menu" >Uploading</span>
//                 </a>
//                 </li>&nbsp;
//                 <li class="nav-item item">
//                 <a href="./Deleteone" class="nav-link text-white" >
//                 <PhonelinkSetupIcon fontSize='medium'style={{paddingRight:6}} /><span class="fs-6 d-none d-sm-inline Menu" >Removing </span>
//                 </a>
//                 </li>&nbsp;
           
//                 <li class="nav-item item">
//                     <a href="./adminorders" class="nav-link text-white">
//                         <ShoppingBagIcon fontSize='medium'style={{paddingRight:6}}/><span class="fs-6 d-none d-sm-inline">Purchasing</span>
//                     </a>
//                 </li>
//                 &nbsp;
//                 <li class="nav-item item">
//                     <a href="./customer" class="nav-link text-white">
//                         <PeopleIcon fontSize='medium'style={{paddingRight:6}}/><span class="fs-6  d-none d-sm-inline">Managing</span>
//                     </a>
//                 </li>&nbsp;
//                 <li class="nav-item item">
//                     <a href="/sign-in" class="nav-link text-white">
//                     <LogoutIcon fontSize='medium'style={{paddingRight:6}}/><span class="fs-6 d-none d-sm-inline">Logout</span>
//                     </a>
//                 </li>&nbsp;
//             </ul>
//         </div>
//         </div>
//     </div>
//     </div>
//     <div>
//     <h3 style={{textAlign:"center", color:" rgb(66, 66, 126)", marginLeft:"35%",marginTop:"2%"}} id='dashboard'>Admin Panel !</h3>
//     {/* <img id='imgadmin' src={Admin} alt='admin' className='admin' ></img> */}
//     </div>
//     </div>
//     </div>
   
   
 
//   )
// };
 
// export default Sidebar;