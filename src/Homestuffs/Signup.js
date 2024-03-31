// // import React, { Component } from "react";
// // import axios from "axios";
// // import { useState, useRef } from "react";
// // // import { Message } from 'rsuite';
// // import { Navigate, useNavigate } from "react-router-dom";
// // import TextField from "@mui/material/TextField";
// // import Button from "@mui/material/Button";
// // import { red } from "@mui/material/colors";

// // const Register = () => {
// //   const navigate = useNavigate();
// //   const [UserName, setUserName] = useState([""]);
// //   const [MobileNumber, setMobileNumber] = useState([""]);
// //   const [Email, setEmail] = useState();
// //   const [Address, setAddress] = useState();
// //   const [city, setcity] = useState();
// //   const [state, setstate] = useState();
// //   const [Password, setPassword] = useState();
// //   const msgref = useRef();
// //   const psdmsg = useRef();
// //   const nmmsg = useRef();

// //   const handleSignupForm = async (event) => {
// //     event.preventDefault();
// //     const headers = {
// //       Accept: "application/json",
// //       "Content-Type": "application/json",
// //     };
// //     let param = {
// //       UserName: UserName,
// //       MobileNumber: MobileNumber,
// //       Email: Email,
// //       Password: Password,
// //       Address: Address,
// //       city: city,
// //       state: state,
// //     };
 
// //     if (Password.length <= 8) {
// // psdmsg.current.style.display = "block";
// //     } else if (!/^\d{10}$/.test(MobileNumber) || MobileNumber.startsWith("0")) {
// //       // Mobile number validation
// // psdmsg.current.style.display = "none";
// // nmmsg.current.style.display = "block";
// //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
// //       // Email validation
// // psdmsg.current.style.display = "none";
// // nmmsg.current.style.display = "none";
// //       alert("Email is not in the right format.");
// //     } else {
// // let URL = "http://localhost:5112/api/User/Post";
// //       await axios
// //         .post(URL, param, { headers: headers })
// //         .then((response) => {
// //           if (response.data === null || response.data === undefined) {
// //             console.log(response.data);
// //           } else {
// // msgref.current.style.display = "block";
// //             console.log(response);
// //             setTimeout(() => {
// // msgref.current.style.display = "none";
// //               navigate("/sign-in");
// //             }, 2000);
// //           }
// //         });
// //     }
// //   };

// //   return (
// //     <div className="auth-wrapper">
// //       <div className="auth-inner">
// //         <form onSubmit={handleSignupForm}>
// //           <h3 data-testid="Heading">Sign Up</h3>

// //           {/* <div className="mb-3">
// //           <label>First name</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder="First name"
// //             onChange={(e) => setFirstName(e.target.value)}
// //           />
// //         </div> */}

// //           <div>
// //             <TextField
// //               id="outlined-basic"
// //               className="mojo"
// //               data-testid="Textone"
// //               label="UserName"
// //               type="text"
// //               required
// //               variant="standard"
// //               color="primary"
// //               onChange={(e) => setUserName(e.target.value)}
// //             />
// //           </div>
// //           <br></br>

// //           <div>
// //             <TextField
// //               id="outlined-basic"
// //               className="mojo"
// //               data-testid="Texttwo"
// //               label="Mobilenumber"
// //               type="long"
// //               required
// //               variant="standard"
// //               color="primary"
// //               onChange={(e) => setMobileNumber(e.target.value)}
// //             />
// //           </div>
// //           <br></br>

// //           <div>
// //             <TextField
// //               id="outlined-basic"
// //               className="mojo"
// //               data-testid="Textthree"
// //               label="Email Id"
// //               type="text"
// //               required
// //               variant="standard"
// //               color="primary"
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //           </div>
// //           <br></br>

// //           <div>
// //             <TextField
// //               id="outlined-basic"
// //               className="mojo"
// //               data-testid="Textthree"
// //               label="Address"
// //               type="text"
// //               required
// //               variant="standard"
// //               color="primary"
// //               onChange={(e) => setAddress(e.target.value)}
// //             />
// //           </div>
// //           <br></br>

// //           <div>
// //             <TextField
// //               id="outlined-basic"
// //               className="mojo"
// //               data-testid="Textthree"
// //               label="City"
// //               type="text"
// //               required
// //               variant="standard"
// //               color="primary"
// //               onChange={(e) => setcity(e.target.value)}
// //             />
// //           </div>
// //           <br></br>

// //           <div>
// //             <TextField
// //               id="outlined-basic"
// //               className="mojo"
// //               data-testid="Textthree"
// //               label="State"
// //               type="text"
// //               required
// //               variant="standard"
// //               color="primary"
// //               onChange={(e) => setstate(e.target.value)}
// //             />
// //           </div>
// //           <br></br>

// //           <div>
// //             <TextField
// //               id="outlined-basic"
// //               className="mojo"
// //               data-testid="Textfour"
// //               label="Password"
// //               type="password"
// //               required
// //               variant="standard"
// //               color="primary"
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //           </div>
// //           <br></br>
// //           {/* <div className="mb-3">
// //           <label>Last name</label>
// //           <input type="text" className="form-control" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
// //         </div>
// //         <div className="mb-3">
// //           <label>Email address</label>
// //           <input
// //             type="email"
// //             className="form-control"
// //             placeholder="Enter email"
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //         </div> */}
// //           {/* <div className="mb-3">
// //           <label>Password</label>
// //           <input
// //             type="password"
// //             className="form-control"
// //             placeholder="Enter password"
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //         </div> */}
// //           {/* <div className="d-grid">
// //           <button type="submit" className="btn btn-primary">
// //             Sign Up
// //           </button>
// //         </div> */}

// //           <div>
// //             <Button
// //               type="submit"
// //               variant="contained"
// //               data-testid="Buttontest"
// //               style={{ backgroundColor: "darkgreen" }}
// //             >
// //               Sign Up
// //             </Button>
// //           </div>

// //           <p className="forgot-password text-right">
// //             <a href="/sign-in"> Already registered sign in?</a>
// //           </p>
// //           <b className="msg" data-testid="ptest" ref={psdmsg}>
// //             *Password should not be less than 8 characters
// //           </b>
// //           <b className="msg" ref={nmmsg}>
// //             Lastname characters must not exceed 20 characters
// //           </b>

// //           <div
// //             class="alert alert-success msg"
// //             data-testid="tata"
// //             ref={msgref}
// //             role="alert"
// //           >
// //             Registeration Successful!
// //           </div>
// //           <div class="alert alert-danger msg" ref={psdmsg} role="alert">
// //             not done!
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;



// // // import React, { useState, useRef } from "react";
// // // import axios from "axios";
// // // import { useNavigate } from "react-router-dom";
// // // import TextField from "@mui/material/TextField";
// // // import Button from "@mui/material/Button";
 
// // // const Register = () => {
// // //   const navigate = useNavigate();
// // //   const [UserName, setUserName] = useState("");
// // //   const [MobileNumber, setMobileNumber] = useState("");
// // //   const [Email, setEmail] = useState("");
// // //   const [Address, setAddress] = useState("");
// // //   const [city, setcity] = useState("");
// // //   const [state, setstate] = useState("");
// // //   const [Password, setPassword] = useState("");
// // //   const msgref = useRef();
// // //   const psdmsg = useRef();
// // //   const nmmsg = useRef();
 
// // //   const handleSignupForm = async (event) => {
// // //     event.preventDefault();
// // //     const headers = {
// // //       Accept: "application/json",
// // //       "Content-Type": "application/json",
// // //     };
// // //     let param = {
// // //       UserName: UserName,
// // //       MobileNumber: MobileNumber,
// // //       Email: Email,
// // //       Password: Password,
// // //       Address: Address,
// // //       city: city,
// // //       state: state,
// // //     };
 
// // //     if (Password.length <= 8) {
// // // psdmsg.current.style.display = "block";
// // //     } else if (!/^\d{10}$/.test(MobileNumber) || MobileNumber.startsWith("0")) {
// // //       // Mobile number validation
// // // psdmsg.current.style.display = "none";
// // // nmmsg.current.style.display = "block";
// // //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
// // //       // Email validation
// // // psdmsg.current.style.display = "none";
// // // nmmsg.current.style.display = "none";
// // //       alert("Email is not in the right format.");
// // //     } else {
// // // let URL = "http://localhost:5112/api/User/Post";
// // //       await axios
// // //         .post(URL, param, { headers: headers })
// // //         .then((response) => {
// // //           if (response.data === null || response.data === undefined) {
// // //             console.log(response.data);
// // //           } else {
// // // msgref.current.style.display = "block";
// // //             console.log(response);
// // //             setTimeout(() => {
// // // msgref.current.style.display = "none";
// // //               navigate("/sign-in");
// // //             }, 2000);
// // //           }
// // //         });
// // //     }
// // //   };
 
// // //   return (
// // //     <div className="auth-wrapper">
// // //       <div className="auth-inner">
// // //         <form onSubmit={handleSignupForm}>
// // //           <h3 data-testid="Heading">Sign Up</h3>
// // //           <div>
// // //             <TextField
// // //               id="outlined-basic"
// // //               className="mojo"
// // //               data-testid="Textone"
// // //               label="UserName"
// // //               type="text"
// // //               required
// // //               variant="standard"
// // //               color="primary"
// // //               onChange={(e) => setUserName(e.target.value)}
// // //               sx={{ width: '100%', mb: 2 }} // Increase text box size
// // //               inputProps={{ style: { fontSize: 16 } }} // Increase text size
// // //             />
// // //           </div>
// // //           {/* Additional text fields go here */}
// // //           <div>
// // //             <Button
// // //               type="submit"
// // //               variant="contained"
// // //               data-testid="Buttontest"
// // //               style={{ backgroundColor: "darkgreen", fontSize: "1.5rem" }} // Increase button font size
// // //             >
// // //               Sign Up
// // //             </Button>
// // //           </div>
// // //           <p className="forgot-password text-right">
// // //             <a href="/sign-in"> Already registered sign in?</a>
// // //           </p>
// // //           <b className="msg" data-testid="ptest" ref={psdmsg}>
// // //             *Password should not be less than 8 characters
// // //           </b>
// // //           <b className="msg" ref={nmmsg}>
// // //             Lastname characters must not exceed 20 characters
// // //           </b>
// // //           <div
// // //             className="alert alert-success msg"
// // //             data-testid="tata"
// // //             ref={msgref}
// // //             role="alert"
// // //           >
// // //             Registration Successful!
// // //           </div>
// // //           <div className="alert alert-danger msg" ref={psdmsg} role="alert">
// // //             Not done!
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };
 
// // // export default Register;



// // import React, { Component } from "react";
// import axios from "axios";
// import { useState, useRef } from "react";
// // import { Message } from 'rsuite';
// import { Navigate, useNavigate } from "react-router-dom";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// // import { red } from "@mui/material/colors";
 
// const Register = () => {
//   const navigate = useNavigate();
//   const [UserName, setUserName] = useState([""]);
//   const [MobileNumber, setMobileNumber] = useState([""]);
//   const [Email, setEmail] = useState();
//   const [Address, setAddress] = useState();
//   const [city, setcity] = useState();
//   const [state, setstate] = useState();
//   const [Password, setPassword] = useState();
//   const msgref = useRef();
//   const psdmsg = useRef();
//   const nmmsg = useRef();
 
//   const handleSignupForm = async (event) => {
//     event.preventDefault();
//     const headers = {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     };
//     let param = {
//       userId:98,
//       UserName: UserName,
//       MobileNumber: MobileNumber,
//       Email: Email,
//       Password: Password,
//       Address: Address,
//       city: city,
//       state: state
     
//     };
 
//     if (Password.length <= 8) {
//       psdmsg.current.style.display = "block";
//     }
 
//     // else if(LastName.length >20)
//     // {
//     //      nmmsg.current.style.display="block"
//     // }
//     else {
//       let URL = "http://localhost:5112/api/User/Post";
//       await axios
//         .post(URL, param, {
//           headers: headers,
//         })
//         .then((response) => {
//           if (response.data === null || response.data === undefined) {
//             console.log(response.data);
//           } else {
//             msgref.current.style.display = "block";
//             console.log(response);
 
//             setTimeout(() => {
//               msgref.current.style.display = "block";
//               navigate("/sign-in");
//             }, 2000);
//           }
//         });
//     }
//   };
 
//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleSignupForm}>
//           <h3 data-testid="Heading">Sign Up</h3>
 
//           {/* <div className="mb-3">
//           <label>First name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="First name"
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div> */}
 
//           <div>
//             <TextField
//               id="outlined-basic"
//               className="mojo"
//               data-testid="Textone"
//               label="UserName"
//               type="text"
//               required
//               variant="standard"
//               color="primary"
//               onChange={(e) => setUserName(e.target.value)}
//             />
//           </div>
//           <br></br>
 
//           <div>
//             <TextField
//               id="outlined-basic"
//               className="mojo"
//               data-testid="Texttwo"
//               label="Mobilenumber"
//               type="int"
//               required
//               variant="standard"
//               color="primary"
//               onChange={(e) => setMobileNumber(e.target.value)}
//             />
//           </div>
//           <br></br>
 
//           <div>
//             <TextField
//               id="outlined-basic"
//               className="mojo"
//               data-testid="Textthree"
//               label="Email Id"
//               type="text"
//               required
//               variant="standard"
//               color="primary"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <br></br>
 
//           <div>
//             <TextField
//               id="outlined-basic"
//               className="mojo"
//               data-testid="Textthree"
//               label="Address"
//               type="text"
//               required
//               variant="standard"
//               color="primary"
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           </div>
//           <br></br>
 
//           <div>
//             <TextField
//               id="outlined-basic"
//               className="mojo"
//               data-testid="Textthree"
//               label="City"
//               type="text"
//               required
//               variant="standard"
//               color="primary"
//               onChange={(e) => setcity(e.target.value)}
//             />
//           </div>
//           <br></br>
 
//           <div>
//             <TextField
//               id="outlined-basic"
//               className="mojo"
//               data-testid="Textthree"
//               label="State"
//               type="text"
//               required
//               variant="standard"
//               color="primary"
//               onChange={(e) => setstate(e.target.value)}
//             />
//           </div>
//           <br></br>
 
//           <div>
//             <TextField
//               id="outlined-basic"
//               className="mojo"
//               data-testid="Textfour"
//               label="Password"
//               type="password"
//               required
//               variant="standard"
//               color="primary"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <br></br>
//           {/* <div className="mb-3">
//           <label>Last name</label>
//           <input type="text" className="form-control" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
//         </div>
//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div> */}
//           {/* <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div> */}
//           {/* <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Sign Up
//           </button>
//         </div> */}
 
//           <div>
//             <Button
//               type="submit"
//               variant="contained"
//               data-testid="Buttontest"
//               style={{ backgroundColor: "darkgreen" }}
//             >
//               Sign Up
//             </Button>
//           </div>
 
//           <p className="forgot-password text-right">
//             <a href="/sign-in"> Already registered sign in?</a>
//           </p>
//           <b className="msg" data-testid="ptest" ref={psdmsg}>
//             *Password should not be less than 8 characters
//           </b>
//           <b className="msg" ref={nmmsg}>
//             Lastname characters must not exceed 20 characters
//           </b>
 
//           <div
//             class="alert alert-success msg"
//             data-testid="tata"
//             ref={msgref}
//             role="alert"
//           >
//             Registeration Successful!
//           </div>
//           <div class="alert alert-danger msg" ref={psdmsg} role="alert">
//             not done!
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
 
// export default Register;


//new code  


// import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import './Registration.css'
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import axios from "axios";
// import { Link, NavLink } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
// import { NavItem,Button} from 'react-bootstrap';
 
 
 
// const schema = yup.object().shape(
//     {
//       userName: yup.string().required('**First name is required'),
//       mobileNumber: yup.string().required('**Last name is required'),
//       email: yup.string().email('**Please enter the Valid email').required('**Email is required'),
//       city: yup.string().required("**Phone Number is Required"),
//       state: yup.string().required("**Phone Number is Required"),
//       password: yup.string().required().min(6, "**Minimun 6 chars is Required").max(14, "**Enter upto 14 chars only"),
//       address: yup.string().required("**Phone Number is Required"),
//         // confirmpassword: yup.string().oneOf([yup.ref("password"), null])
//     }
// )
 
// const Register = () => {
//     const Usenavigate = useNavigate();
//     const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
 
//     console.log(errors);
 
//     // function to handle form submission
//     const onSubmit = data => {
//         axios.post('http://localhost:5112/api/User/Post', data)
//             .then(response => {
//                 // Handle success
 
 
//                 window.alert("Registration successfull", response.data);
//                 Usenavigate('/sign-up')
//                 // console.log('Registration successful', response.data);
//             })
//             .catch(error => {
//                 // Handle error
//                 console.error('Registration failed', error);
//             });
 
//         // console.log(data);
 
//     };
 
 
 
//     return (
//       <>
//       <div className='registration-app'>
//       <div>
//       <Navbar className='navbar' bg='dark' variant='dark' fixed="top">
//       <Container>
//       <Navbar.Brand>
//       <h4><span className='nav-text' style={{ marginRight: "10px" }}>Petition management </span></h4>
//       </Navbar.Brand>
//       <Nav className="justify-content-end">
//       <Navbar.Toggle aria-controls='basic-navbar-nav' />
//       <Navbar.Collapse id='basic-navbar-nav'>
//       <NavItem>
//       <Link to='/sign-in'><Button>Login</Button></Link>
//       </NavItem>
//       </Navbar.Collapse>
//       </Nav>
//       </Container>
//       </Navbar>
//       </div>
//       <div className="registration-container" style={{ marginTop: "80px" }}>
//       <div className='registerHeader'>
//       <h2 data-testid='registration-heading' style={{ textAlign: "center" }}>Registration</h2>
//       </div>
//       <div className='registerform-container'>
//       <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <input {...register('userName')} placeholder='userName.....' data-testid='firstnamefield' style={{ margin: "5px", padding: "5px" }}></input>
//       <p data-testid="nameerrormessage" style={{ color: "red" }}>{errors.userName?.message}</p>
       
//                               <input {...register('city')} placeholder='city....' type='text' data-testid='city' style={{ margin: "5px", padding: "5px" }}></input>
//       <p style={{ color: "red" }}>{errors.city?.message}</p>
       
//                               <input {...register('email')} type='email' placeholder='Email.....' data-testid='emailfield' style={{ margin: "5px", padding: "5px" }}></input>
//       <p style={{ color: "red" }}>{errors.email?.message}</p>
       
//                               <input {...register('mobileNumber')} type='number' placeholder='mobileNumber.....' style={{ margin: "5px", padding: "5px" }}></input>
//       <p style={{ color: "red" }}>{errors.mobileNumber?.message}</p>
       
//                               <input {...register('state')} placeholder='state....' type='text' data-testid='state' style={{ margin: "5px", padding: "5px" }}></input>
//       <p style={{ color: "red" }}>{errors.state?.message}</p>
       
//                               <input {...register('address')} placeholder='address....' type='text' data-testid='address' style={{ margin: "5px", padding: "5px" }}></input>
//       <p style={{ color: "red" }}>{errors.address?.message}</p>
       
//                               <input {...register('password')} type='password' placeholder='Password.....' data-testid='passwordfield' style={{ margin: "5px", padding: "5px" }}></input>
//       <p style={{ color: "red" }}>{errors.password?.message}</p>
       
//                               <button data-id="registerbutton" className='btn btn-primary' style={{ margin: "10px", padding: "10px" }}>Register!</button>
//       </form>
//       <br></br>
//                           {/* <Link to="/"><button className='btn btn-success'>Back</button></Link> */}
//       </div>
//       </div>
//       </div>
//       </>
//       )
// }
 
// export default Register;



import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, Container, NavItem, Button } from 'react-bootstrap';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
 
const schema = yup.object().shape({
  userName: yup.string().required('**First name is required'),
  mobileNumber: yup.string().required('**Last name is required'),
  email: yup.string().email('**Please enter the Valid email').required('**Email is required'),
  city: yup.string().required("**City is Required"),
  state: yup.string().required("**State is Required"),
  password: yup.string().required().min(6, "**Minimum 6 characters is Required").max(14, "**Enter up to 14 characters only"),
  address: yup.string().required("**Address is Required"),
});
 
const Register = () => {
  const Usenavigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
 
  const onSubmit = data => {
axios.post('http://localhost:5112/api/User/Post', data)
      .then(response => {
        window.alert("Registration successful", response.data);
        Usenavigate('/sign-up');
      })
      .catch(error => {
        console.error('Registration failed', error);
      });
  };
 
  return (
    <>
      <div className='registration-app'>
        <div>
          <Navbar className='navbar' bg='dark' variant='dark' fixed="top">
            <Container>
              <Navbar.Brand>
                <h4><span className='nav-text' > </span></h4>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <NavItem>
                    <Link to='/sign-in' style={{marginLeft:"880px"}}><Button>Login</Button></Link>
                  </NavItem>
                </Navbar.Collapse>
              </Nav>
            </Container>
          </Navbar>
        </div>
        <div className="registration-container" style={{ marginTop: "80px" }}>
          <div className='registerHeader'>
            <h2 data-testid='registration-heading' style={{ textAlign: "center" }}>Registration</h2>
          </div>
          <div className='registerform-container'>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <input {...register('userName')} placeholder='Username' data-testid='firstnamefield' style={{ margin: "5px", padding: "5px", width: "300px" }} />
              <p data-testid="nameerrormessage" style={{ color: "red" }}>{errors.userName?.message}</p>
              <input {...register('city')} placeholder='City' type='text' data-testid='city' style={{ margin: "5px", padding: "5px", width: "300px" }} />
{errors.city?.message}
              <input {...register('email')} type='email' placeholder='Email' data-testid='emailfield' style={{ margin: "5px", padding: "5px", width: "300px" }} />
{errors.email?.message}
              <input {...register('mobileNumber')} type='number' placeholder='Mobile Number' style={{ margin: "5px", padding: "5px", width: "300px" }} />
              <p style={{ color: "red" }}>{errors.mobileNumber?.message}</p>
              <input {...register('state')} placeholder='State' type='text' data-testid='state' style={{ margin: "5px", padding: "5px", width: "300px" }} />
              <p style={{ color: "red" }}>{errors.state?.message}</p>
              <input {...register('address')} placeholder='Address' type='text' data-testid='address' style={{ margin: "5px", padding: "5px", width: "300px" }} />
              <p style={{ color: "red" }}>{errors.address?.message}</p>
              <input {...register('password')} type='password' placeholder='Password' data-testid='passwordfield' style={{ margin: "5px", padding: "5px", width: "300px" }} />
              <p style={{ color: "red" }}>{errors.password?.message}</p>
              <button data-id="registerbutton" className='btn btn-primary' style={{ margin: "10px", padding: "10px", width: "200px" }}>Register</button>
            </form>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Register;