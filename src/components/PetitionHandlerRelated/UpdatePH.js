// import React, { useState } from "react";
// import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const initialValues = {
//   petitionHandlerId: "",
//   officialId: "",
//   userName: "",
//   email: "",
//   password: "Passwordpassword",
//   mobileNumber: "",
//   talukLocation: "",
//   adminId: "",
//   categoryId:"",

 
// };

// function UpdatePetitionhandler() {
//   const [values, setValues] = useState(initialValues);

//   const handleInput = (e) => {
//     setValues({
//       ...values,
//       [e.target.name]: e.target.value,
//     });
//   };

//   //   const handleImageChange = (e) => {
//   //     setValues({
//   //       ...values,
//   //       accessoryImage: e.target.files[0],
//   //     });
//   //   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.entries(values).forEach(([key, value]) => {
//       if (key !== "petitionHandlerId") {
//         formData.append(key, value);
//       }
//     });

//     try {
//       const response = await axios.put(
//         `http://localhost:5112/api/Petitionhandler/Put/api/UpdatePetitionHandler`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       window.alert("Updated successfully");
//       console.log("Updated successfully:", response.data);
//     } catch (error) {
//       console.error("Update failure:", error);
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <Container>
//           <Card>
//             <CardBody>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>petitionHandlerId:</Form.Label>
//                   <Form.Control
//                     type="number"
//                     name="petitionHandlerId"
//                     value={values.petitionHandlerId}
//                     onChange={handleInput}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>officialId:</Form.Label>
//                   <Form.Control
//                     type="number"
//                     name="officialId"
//                     value={values.officialId}
//                     onChange={handleInput}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>userName:</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="userName"
//                     value={values.userName}
//                     onChange={handleInput}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>email:</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="email"
//                     value={values.email}
//                     onChange={handleInput}
//                   />
//                 </Form.Group>

//                 {/* <Form.Group className="mb-3">
//               <Form.Label>Profile Image:</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="accessoryImage"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//             </Form.Group> */}

//                 {/* <Form.Group className="mb-3">
//                   <Form.Label>password:</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="password"
//                     value={values.password}
//                     onChange={handleInput}
//                   />
//                 </Form.Group> */}

//                 <Form.Group className="mb-3">
//                   <Form.Label>mobileNumber:</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="mobileNumber"
//                     value={values.mobileNumber}
//                     onChange={handleInput}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>talukLocation:</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="talukLocation"
//                     value={values.talukLocation}
//                     onChange={handleInput}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>adminId:</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="adminId"
//                     value={values.adminId}
//                     onChange={handleInput}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Category Id:</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="categoryId"
//                     value={values.categoryId}
//                     onChange={handleInput}
//                   />
//                 </Form.Group>

//                 <Button type="submit">Update</Button>
//               </Form>
//             </CardBody>
//           </Card>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default UpdatePetitionhandler;


import React, { useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
 
const initialValues = {
  petitionHandlerId: "",
  officialId: "",
  userName: "",
  email: "",
  password: "Passwordpassword",
  mobileNumber: "",
  talukLocation: "",
  adminId: "",
  categoryId: "",
};
 
function UpdatePetitionhandler() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
 
  const validate = () => {
    let isValid = true;
    const errors = {};
 
    if (!/^\d{1,4}$/.test(values.officialId)) {
      errors.officialId = "Official ID should be 1 to 4 digits";
      isValid = false;
    }
 
    if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }
 
    if (!/^\d{1,10}$/.test(values.mobileNumber)) {
      errors.mobileNumber = "Mobile number should be 1 to 10 digits";
      isValid = false;
    }
 
    setErrors(errors);
    return isValid;
  };
 
  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (key !== "petitionHandlerId") {
          formData.append(key, value);
        }
      });
 
      try {
        const response = await axios.put(
          `http://localhost:5112/api/Petitionhandler/Put/api/UpdatePetitionHandler`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        window.alert("Updated successfully");
        console.log("Updated successfully:", response.data);
      } catch (error) {
        console.error("Update failure:", error);
      }
    }
  };
 
  return (
    <div>
      <h1 style={{"paddingTop":"30px"}}>Update Petition handler Data</h1>
      <div>
   
<div className="auth-wrapper">
<div className="auth-inner">
  
<Container>
  
<Card>
<CardBody>
<Form onSubmit={handleSubmit}>
  
<Form.Group className="mb-1" style={{"fontSize":"medium"}}>
<Form.Label>petitionHandlerId:</Form.Label>
<Form.Control
                    type="number"
                    name="petitionHandlerId"
                    value={values.petitionHandlerId}
                    onChange={handleInput}
                  />
</Form.Group>
 
                <Form.Group className="mb-3"style={{"fontSize":"medium"}} >
<Form.Label>officialId:</Form.Label>
<Form.Control
                    type="number"
                    name="officialId"
                    value={values.officialId}
                    onChange={handleInput}
                  />
                  {errors.officialId && (
<div className="text-danger">{errors.officialId}</div>
                  )}
</Form.Group>
 
                <Form.Group className="mb-3" style={{"fontSize":"medium"}}>
<Form.Label>userName:</Form.Label>
<Form.Control
                    type="text"
                    name="userName"
                    value={values.userName}
                    onChange={handleInput}
                  />
</Form.Group>
 
                <Form.Group className="mb-3" style={{"fontSize":"medium"}}>
<Form.Label>email:</Form.Label>
<Form.Control
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleInput}
                  />
                  {errors.email && (
<div className="text-danger">{errors.email}</div>
                  )}
</Form.Group>
 
                <Form.Group className="mb-3" style={{"fontSize":"medium"}}>
<Form.Label>mobileNumber:</Form.Label>
<Form.Control
                    type="text"
                    name="mobileNumber"
                    value={values.mobileNumber}
                    onChange={handleInput}
                  />
                  {errors.mobileNumber && (
<div className="text-danger">{errors.mobileNumber}</div>
                  )}
</Form.Group>
 
                <Form.Group className="mb-3" style={{"fontSize":"medium"}}>
<Form.Label>talukLocation:</Form.Label>
<Form.Control
                    type="text"
                    name="talukLocation"
                    value={values.talukLocation}
                    onChange={handleInput}
                  />
</Form.Group>
 
                <Form.Group className="mb-3" style={{"fontSize":"medium"}}>
<Form.Label>adminId:</Form.Label>
<Form.Control
                    type="text"
                    name="adminId"
                    value={values.adminId}
                    onChange={handleInput}
                  />
</Form.Group>
 
                <Form.Group className="mb-3" style={{"fontSize":"medium"}}>
<Form.Label>Category Id:</Form.Label>
<Form.Control
                    type="text"
                    name="categoryId"
                    value={values.categoryId}
                    onChange={handleInput}
                  />
</Form.Group>
 
                <Button type="submit" >Update</Button>
                {/* <button type="button" class="btn btn-primary btn-lg">Submit</button> */}
</Form>
</CardBody>
</Card>
</Container>
</div>
</div>
</div>
</div>
  );
}
 
export default UpdatePetitionhandler;