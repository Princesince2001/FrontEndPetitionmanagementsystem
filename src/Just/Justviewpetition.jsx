


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Nav, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar } from "rsuite";
// import {Link} from 'react-router-dom'

const Userviewpetition1 = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5112/api/Userpetition/GetAllPetAccessoryy"
        );
        setPosts(response.data);
        setFilteredPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = posts.filter((post) =>
      post.statusType.toLowerCase().includes(term),
      // post.talukLocation.toLowerCase().includes(term)
    );
    setFilteredPosts(filtered);
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
              View Petitions
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
     

    </tr>
  </thead>
  <tbody>
    {posts.map((post) => (
      <tr>
        <td>{post.date}</td>
        <td>{post.id}</td>
        <td>{post.statusType}</td>
        <td>{post.aadharNumber}</td>
        <td className="tableimg"> <img
                  src={`http://localhost:5112/wwwroot/Images/` +post.uploadDocumentname}
                  // className="tableimg"
                  alt={post.petname}
                  style={{ maxHeight: "80px", objectFit: "cover" }}
                /></td>
        <td>{post.talukLocation}</td>
        {/* <td><DeletePetitionButton
                      petitionId={post.petition.petitionId}
                      onDeleteSuccess={handleDeleteSuccess}
                    /></td> */}
        <td>{post.petitionDescription}</td>
        {/* <td> <Link to={`/Assignpetition/${post.id}`}>Assign</Link>
                     
                     </td>  */}
      </tr>
    ))

    } 
  </tbody>
</table>         
        </div>
      </div>
    </>
  )
}    

export default Userviewpetition1;




