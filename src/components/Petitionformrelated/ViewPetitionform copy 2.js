// // // import React from "react";
// // // import axios from "axios";
// // // import { Navbar, Nav, Button } from "react-bootstrap";
// // // import "bootstrap/dist/css/bootstrap.min.css";

// // // const Userviewpetition = () => {
// // //   const [posts, setPosts] = React.useState([]);

// // //   React.useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const response = await axios.get(
// // //           "http://localhost:5112/api/Userpetition/GetAllPetAccessoryy"
// // //         );
// // //         setPosts(response.data);
// // //       } catch (error) {
// // //         console.error("Error fetching data:", error);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []);

// // //   return (
// // //     <>
// // //       <div>
// // //         <Navbar expand="lg" className="navigationbar">
// // //           <Navbar.Brand href="#home" style={{ color: "black" }}>
// // //             Petition Management
// // //           </Navbar.Brand>
// // //           <Navbar.Toggle aria-controls="basic-navbar-nav" />
// // //           <Navbar.Collapse id="basic-navbar-nav">
// // //             <Nav className="mr-auto">
// // //               <Nav.Link href="#home" style={{ color: "black" }}>
// // //                 Home
// // //               </Nav.Link>
// // //               <Nav.Link href="#link" style={{ color: "black" }}>
// // //                 Link
// // //               </Nav.Link>
// // //             </Nav>
// // //           </Navbar.Collapse>
// // //         </Navbar>
// // //         <div className="App">
// // //           <div
// // //             className="d-flex flex-wrap justify-content-evenly"
// // //             style={{ columnGap: "160px" }}
// // //           >
// // //             {posts.map((post) => (
// // //               <div
// // //                 className="card m-2"
// // //                 style={{ width: "18rem" }}
// // //                 key={post.id}
// // //               >
// // //                 <img
// // //                   src={post.imageUrl}
// // //                   className="card-img-top"
// // //                   alt={post.petname}
// // //                 />
// // //                 <div className="card-body">
// // //                   <h5 className="card-title">User Id: {post.id}</h5>
// // //                   <h6 className="card-subtitle mb-2 text-muted">
// // //                     Description: {post.petitionDescription}
// // //                   </h6>
// // //                   <p className="card-text">
// // //                     Aadhar numbar: {post.aadharNumber}
// // //                   </p>
// // //                   <p className="card-text">
// // //                     Aadhar numbar: {post.talukLocation}
// // //                   </p>
// // //                   <p className="card-text">Aadhar numbar: {post.address}</p>
// // //                   <p className="card-text">
// // //                     Aadhar numbar: {post.uploadDocumentname}
// // //                   </p>
// // //                   <p className="card-text">Aadhar numbar: {post.statusType}</p>
// // //                   <div className="card-footer">
// // //                     {/* <small className="text-muted">Price: {post.price}</small> */}
// // //                   </div>
// // //                   <Button>Delete Petition</Button>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Userviewpetition;

// // import React from "react";
// // import axios from "axios";
// // import { Navbar, Nav } from "react-bootstrap";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import DeletePetitionButton from "./DeletePetition"; // Import the DeletePetitionButton component

// // const Userviewpetition = () => {
// //   const [posts, setPosts] = React.useState([]);

// //   React.useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get(
// //           "http://localhost:5112/api/Userpetition/GetAllPetAccessoryy"
// //         );
// //         setPosts(response.data);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const handleDeleteSuccess = async () => {
// //     // Fetch data again after deletion
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get(
// //           "http://localhost:5112/api/Userpetition/GetAllPetAccessoryy"
// //         );
// //         setPosts(response.data);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   };

// //   return (
// //     <>
// //       <div>
// //         <Navbar expand="lg" className="navigationbar">
// //           <Navbar.Brand href="#home" style={{ color: "black" }}>
// //             Petition Management
// //           </Navbar.Brand>
// //           <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //           <Navbar.Collapse id="basic-navbar-nav">
// //             <Nav className="mr-auto">
// //               <Nav.Link href="#home" style={{ color: "black" }}>
// //                 Home
// //               </Nav.Link>
// //               <Nav.Link href="#link" style={{ color: "black" }}>
// //                 Link
// //               </Nav.Link>
// //             </Nav>
// //           </Navbar.Collapse>
// //         </Navbar>
// //         <div className="App">
// //           <div
// //             className="d-flex flex-wrap justify-content-evenly"
// //             style={{ columnGap: "160px" }}
// //           >
// //             {posts.map((post) => (
// //               <div
// //                 className="card m-2"
// //                 style={{ width: "18rem" }}
// //                 key={post.id}
// //               >
// //                 <img
// //                   src={post.imageUrl}
// //                   className="card-img-top"
// //                   alt={post.petname}
// //                 />
// //                 <div className="card-body">
// //                   <h5 className="card-title">User Id: {post.id}</h5>
// //                   <h6 className="card-subtitle mb-2 text-muted">
// //                     Description: {post.petitionDescription}
// //                   </h6>
// //                   <p className="card-text">
// //                     Aadhar number: {post.aadharNumber}
// //                   </p>
// //                   <p className="card-text">
// //                     Taluk Location: {post.talukLocation}
// //                   </p>
// //                   <p className="card-text">Address: {post.address}</p>

// //                   <p className="card-text">Status Type: {post.statusType}</p>
// //                   <div className="card-footer">
// //                     {/* <small className="text-muted">Price: {post.price}</small> */}
// //                   </div>
// //                   {/* Integrate DeletePetitionButton component */}
// //                   {/* <DeletePetitionButton
// //                     petitionId={post.id}
// //                     onDeleteSuccess={handleDeleteSuccess}
// //                   /> */}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Userviewpetition;

import React from "react";
import axios from "axios";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DeletePetitionButton from "./DeletePetition"; // Import the DeletePetitionButton component
import { Sidebar } from "rsuite";
import Cookies from "js-cookie";

const Handlerviewpetition = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5112/Viewbyid/" + Cookies.get("Id")
        );
        setPosts(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteSuccess = async () => {
    // Fetch data again after deletion
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get(
    //         "http://localhost:5112/api/Userpetition/GetAllPetAccessoryy"
    //       );
    //       // setPosts(response.data);
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };
    //   fetchData();
  };

  return (
    <>
      <Sidebar />
      <div style={{ backgroundColor: "#f4f4f4", padding: "20px" }}>
        {/* <Navbar expand="lg" className="navigationbar" style={{ backgroundColor: "blue", color: "#fff" }}>
<Navbar.Brand href="#home">Petition Management</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<Nav.Link href="#home">Home</Nav.Link>
<Nav.Link href="#link">Link</Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar> */}
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <h1 class="navbar-brand" href="#" style={{ fontSize: "x-large" }}>
              Delete Petition
            </h1>
          </div>
        </nav>
        <div className="App">
         
           
 
<table class="table">
  <thead class="thead-light">
    <tr>
    <th scope="col">Date</th>
      <th scope="col">PetitionId</th>
      <th scope="col">Petition Status</th>
      <th scope="col">Aadhar number</th>
      <th scope="col">Image</th>
      <th scope="col">Taluk</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
      

      
    </tr>
  </thead>
  <tbody>
    {posts.map((post) => (
      <tr>
        <td>{post.petition.date}</td>
        <td>{post.petition.petitionId}</td>
        <td>{post.petition.statusType}</td>
        <td>{post.petition.aadharNumber}</td>
        <td className="tableimg"> <img
                  src={`http://localhost:5112/wwwroot/Images/` +post.petition.uploadDocumentname}
                  // className="tableimg"
                  alt={post.petition.petname}
                  style={{ maxHeight: "80px", objectFit: "cover" }}
                /></td>
        <td>{post.petition.talukLocation}</td>
       
        <td>{post.petition.petitionDescription}</td>
        <td><DeletePetitionButton
                      petitionId={post.petition.petitionId}
                      onDeleteSuccess={handleDeleteSuccess}
                    /></td>
      </tr>
    ))

    }
   
   
    
  </tbody>
</table>
            
                
                 
          
              
            
          
        </div>
      </div>
    </>
  );
};

export default Handlerviewpetition;

// import React from 'react'
// import { useEffect,useState } from 'react';
// import axios from 'axios';
// import './viewform.css';

// function Userviewpetition() {
//     const [hospital, setHospital] = useState([]);

//     useEffect(() => {
//         axios.get(`http://localhost:5112/api/Userpetition/GetAllPetAccessoryy`).then((response) => {
//             setHospital(response.data);
//             console.log(hospital);
//             console.log(response);
//         })
//     },[])

//   return (
//     <div  className='mainadmin mainbg '>
//          <h2 className='mt-3 ms-3'>Petition</h2>
//         <hr/>
//         <section className='tablebody'>
//                 <table className="table" style={{"overflow":"auto"}}>
//                     <thead>
//                         <tr>
//                             <th scope="col">petitionDescription</th>
//                             <th scope="col">aadharNumber</th>
//                             <th scope="col">talukLocation</th>
//                             <th scope="col">address</th>
//                             <th scope="col">uploadDocument</th>
//                             <th scope="col">uploadDocumentname</th>
//                             <th scope="col">statusType</th>
//                             <th scope="col">imageUrl</th>

//                         </tr>
//                     </thead>
//                     <tbody className='bg-transparent rowbody'>
//                     {hospital.map((data) => (
//                              <tr className='bg-transparent'>
//                              <th scope="row">{data.petitionDescription}</th>
//                              <th scope="row">{data.aadharNumber}</th>
//                              <th scope="row">{data.talukLocation}</th>
//                              <th scope="row">{data.address}</th>
//                              {/* <th scope="row">{data.statusType}</th> */}
//                              {/* <th scope="row">{data.uploadDocument}</th> */}
//                               {/* <th scope="row">{data.statusType}</th> */}
//                              <th scope="row"><img src={"data:image/png;base64,"+data.imageUrl} className='document' width="100px"/></th>
//                              {/* <th scope="row">{data.doorNo}, {data.street},<br/> {data.area},<br/> {data.area},<br/> {data.city},<br/> {data.state}-{data.postalCode}</th>
//                              <th scope="row">{data.location}</th> */}

//                              {/* <th scope="row">{data.status==1?<>Approved</>:data.status==0?<>Pending</>:<>Reject</>}</th> */}

//                          </tr>
//                         )

//                         )}
//                     </tbody>
//                 </table>
//                 </section>

//     </div>
//   )
// }

// export default Userviewpetition;
