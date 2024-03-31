// import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// // import "../components/Dashboard.css";
// // import Navbar from './Navbar';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import Inventory2Icon from '@mui/icons-material/Inventory2';
// import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import PeopleIcon from '@mui/icons-material/People';
// import LogoutIcon from '@mui/icons-material/Logout';
// // import Cookies from 'js-cookie';

 
// function SidebarPetitionhandler() {
 
//     // const RemoveCookie=()=>{
//     //     Cookies.remove('Emailid')
//     //     Cookies.remove('UserId')
 
//     // }
 
//   return (
 
//     <div>
//         <nav id='navvv' class="navbar navbar-expand-lg navbar-light bg-light">Petition Management System</nav>
       
//     <div class="container-fixed dashboard" id='dashboard'>
//     <div class="row flex-nowrap">
//         <div class="bg col-md-4 col-lg-3 min-vh-100 color">
//        <b><hr style={{color:"white",marginTop:"-0%",width:"120%",}}></hr></b>
//             <div class="p-2">
           
//             <a class="d-flex text-decoration-none align-items-center">
           
//             <ManageAccountsIcon fontSize='large' style={{color:"HighlightText",paddingRight:5}} /><span class="fs-5 d-none d-sm-inline" style={{color:"HighlightText"}}>Petition Handler Panel</span>
//             </a>
//             <hr style={{color:"white",width:"120%"}}></hr>
//             <ul class="nav nav-pills flex-column mt-4">
//                 <li class="nav-item item">
//                 <a href="./Home" class="nav-link text-white" >
//                 <PhonelinkSetupIcon fontSize='medium'style={{paddingRight:5}} /><span class="fs-6 d-none d-sm-inline Menu" >Menu</span>
//                 </a>
//                 </li>

//                  <li class="nav-item item">
//                     <a href="./userpetitionform" class="nav-link text-white">
//                         <PeopleIcon fontSize='medium'style={{paddingRight:5}}/><span class="fs-6  d-none d-sm-inline">View Petition</span>
//                     </a>
//                 </li> 
//                 <li class="nav-item item">
//                     <a href="/updatestatus" class="nav-link text-white">
//                     <Inventory2Icon fontSize='medium'style={{paddingRight:5}}/> <span class="fs-6 d-none d-sm-inline">Update Petition</span>
//                     </a>
//                 </li>
//                 <li class="nav-item item">
//                     <a href="/userpetitionform" class="nav-link text-white">
//                         <ShoppingBagIcon fontSize='medium'style={{paddingRight:5}}/><span class="fs-6 d-none d-sm-inline">Delete petition</span>
//                     </a>
//                 </li>
//                 {/* <li class="nav-item item">
//                     <a href="./customer" class="nav-link text-white">
//                         <PeopleIcon fontSize='medium'style={{paddingRight:5}}/><span class="fs-6  d-none d-sm-inline">Customer Details</span>
//                     </a>
//                 </li> */}
//                 <li class="nav-item item">
//                     <a href="/sign-in" class="nav-link text-white">
//                     <LogoutIcon fontSize='medium'style={{paddingRight:5}}/><span class="fs-6 d-none d-sm-inline">Logout</span>
//                     </a>
//                 </li>
//             </ul>
//         </div>
//         </div>
//     </div>
//     </div>
//     </div>
   
   
 
//   )
// };
 
// export default SidebarPetitionhandler;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar, Container } from "react-bootstrap";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Sidebar.css"; // Import custom CSS file

function SidebarPetitionhandler() {
  return (
    <div>
      <Navbar variant="light" expand="lg" className="mb-0"id="hola">
        <Container>
          <Navbar.Brand className="fone">
            <h1 style={{color:"white"}}>Petition Management System</h1>
            
          </Navbar.Brand>
        </Container>
      </Navbar>


      

      <div className="container-fixed dashboard">
        <div className="row flex-nowrap" id="okok">
          <div className="bg col-md-4 col-lg-3 min-vh-100 color" style={{"width":270}} >
            <b>
              <hr className="custom-hr" />
            </b>
            <div className="p-2" >
              
              <a className="d-flex text-decoration-none align-items-center">
                <ManageAccountsIcon fontSize="large" className="sidebar-icon" />
                <span className="fs-2 d-none d-sm-inline" id="panel">Petition Handler Panel</span>
              </a>
              <hr className="custom-hr" />
              <ul className="nav nav-pills flex-column mt-3">
                <li className="nav-item item">
                  <a href="./Home" className="nav-link text-white">
                    <PhonelinkSetupIcon
                      fontSize="medium"
                      className="sidebar-icon"
                    />
                    <span className="fs-3 d-none d-sm-inline Menu" style={{paddingLeft:"110px"}}>
                      Petition Handler Menu
                    </span>
                  </a>
                </li>

                <li className="nav-item item">
                  <a href="/handlerpetition" className="nav-link text-white">
                    <PeopleIcon fontSize="medium" className="sidebar-icon" />
                    <span className="fs-3  d-none d-sm-inline" style={{paddingRight:"70px"}}>
                      
                     View petitions      
                    </span>
                  </a>
                </li>
                <li className="nav-item item">
                  <a
                    href="/updatestatus"
                    className="nav-link text-white"
                  >
                    <Inventory2Icon
                      fontSize="medium"
                      className="sidebar-icon"
                    />{" "}
                    <span className="fs-3 d-none d-sm-inline" >
                       Update Petition status       
                    </span>
                  </a>
                </li>
                <li className="nav-item item">
                  <a
                    href="/dashboard"
                    className="nav-link text-white"
                  >
                    <Inventory2Icon
                      fontSize="medium"
                      className="sidebar-icon"
                    />{" "}
                    <span className="fs-3 d-none d-sm-inline" style={{paddingRight:"90px"}}>
                     Dashboard
                    </span>
                  </a>
                </li>
                <li className="nav-item item">
                  <a
                    href="/Handlerviewpetition"
                    className="nav-link text-white"
                  >
                    <Inventory2Icon
                      fontSize="medium"
                      className="sidebar-icon"
                    />{" "}
                    <span className="fs-3 d-none d-sm-inline" style={{paddingRight:"60px"}}>
                      Delete Petition
                    </span>
                  </a>
                </li>
                <li className="nav-item item">
                  {/* <a
                    href="/petitionhandlerupdateform"
                    className="nav-link text-white"
                  >
                    <ShoppingBagIcon
                      fontSize="medium"
                      className="sidebar-icon"
                    />
                    <span className="fs-3 d-none d-sm-inline" style={{paddingRight:"10px"}}>
                      Edit Petition Handler
                    </span>
                  </a> */}
                </li>
                <li className="nav-item item">
                  <a href="/sign-in" className="nav-link text-white">
                    <LogoutIcon fontSize="medium" className="sidebar-icon" />
                    <bu className="fs-3 d-none d-sm-inline " style={{paddingRight:"115px"}}>Logout</bu>
                  </a>
                </li>
              </ul>
            </div>
           
          </div>
         
        </div>
       
      </div>
    
    </div>
  );
}

export default SidebarPetitionhandler;



