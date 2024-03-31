// import React, { useState } from "react";
// import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../../Homestuffs/Navbar";

// const initialValues = {
//   petitionHandlerId: 0,
//   officialId: "",
//   userName: "",
//   //   accessoryImage: null,
//   email: "",
//   password: "",
//   mobileNumber: "",
//   talukLocation: "",
//   CategoryId: "",
//   AdminId: "",

// };

// function UploadPH() {
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
//       formData.append(key, value);
//     });

//     try {
//       const response = await axios.post(
//         "http://localhost:5112/api/Petitionhandler/Post",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       window.alert("Posted successfully");
//       console.log("Posted successfully:", response.data);
//     } catch (error) {
//       console.error("Post failure:", error);
//     }
//   };

//   return (

// <div>
//     <nav class="navbar navbar-light bg-dark">
//   <a class="navbar-brand" href="#" style={{"padding":"10px","fontSize":"large",color:"white"}}>
//     {/* <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/> */}
//     Add petition handler
//   </a>
// </nav>
//     <div className="auth-wrapper" id="diff">
//     <div className="auth-inner" id="diff1">

//       <Container>
//         <Card>
//           <CardBody>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="mb-3" id="kio">
//                 <Form.Label>UserName:</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="userName"
//                   value={values.userName}
//                   onChange={handleInput}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Official ID:</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="officialId"
//                   value={values.officialId}
//                   onChange={handleInput}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Email:</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="email"
//                   value={values.email}
//                   onChange={handleInput}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Password:</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="password"
//                   value={values.password}
//                   onChange={handleInput}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>MobileNumber:</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="mobileNumber"
//                   value={values.mobileNumber}
//                   onChange={handleInput}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>TalukLocation:</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="talukLocation"
//                   value={values.talukLocation}
//                   onChange={handleInput}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>CategoryId:</Form.Label>
//                 <Form.Control
//                   type="number"
//                   name="CategoryId"
//                   value={values.CategoryId}
//                   onChange={handleInput}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>AdminId:</Form.Label>
//                 <Form.Control
//                   type="number"
//                   name="AdminId"
//                   value={values.AdminId}
//                   onChange={handleInput}
//                 />
//               </Form.Group>

//               {/* <Form.Group className="mb-3">
//               <Form.Label>Profile Image:</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="accessoryImage"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//             </Form.Group> */}

//               <Button type="submit">Submit</Button>
//             </Form>
//           </CardBody>
//         </Card>
//       </Container>
//     </div>
//     </div>
//     </div>
//   );
// }

// export default UploadPH;

import React, { useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const initialValues = {
  petitionHandlerId: 0,
  officialId: "",
  userName: "",
  email: "",
  password: "",
  mobileNumber: "",
  talukLocation: "",
  CategoryId: "",
  AdminId: "",
};

function UploadPH() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let isValid = true;
    const errors = {};

    if (!values.officialId || values.officialId.length > 12) {
      errors.officialId = "Official ID should not exceed 12 digits";
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }

    if (!/^\d{10}$/.test(values.mobileNumber)) {
      errors.mobileNumber = "Mobile number should be 10 digits";
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
        formData.append(key, value);
      });

      try {
        const response = await axios.post(
          "http://localhost:5112/api/Petitionhandler/Post",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        window.alert("Posted successfully");
        console.log("Posted successfully:", response.data);
      } catch (error) {
        console.error("Post failure:", error);
      }
    }
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <a
          className="navbar-brand"
          href="#"
          style={{ padding: "10px", fontSize: "large", color: "white" }}
        >
          Add petition handler
        </a>
      </nav>
      <div className="auth-wrapper" id="diff">
        <div className="auth-inner" id="diff1">
          <Container>
            <Card>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" id="kio">
                    <Form.Label>UserName:</Form.Label>
                    <Form.Control
                      type="text"
                      name="userName"
                      value={values.userName}
                      onChange={handleInput}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Official ID:</Form.Label>
                    <Form.Control
                      type="text"
                      name="officialId"
                      value={values.officialId}
                      onChange={handleInput}
                    />
                    {errors.officialId && (
                      <div className="text-danger">{errors.officialId}</div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
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

                  <Form.Group className="mb-3">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleInput}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>MobileNumber:</Form.Label>
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

                  <Form.Group className="mb-3">
                    <Form.Label>TalukLocation:</Form.Label>
                    <Form.Control
                      type="text"
                      name="talukLocation"
                      value={values.talukLocation}
                      onChange={handleInput}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>CategoryId:</Form.Label>
                    <Form.Control
                      type="number"
                      name="CategoryId"
                      value={values.CategoryId}
                      onChange={handleInput}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>AdminId:</Form.Label>
                    <Form.Control
                      type="number"
                      name="AdminId"
                      value={values.AdminId}
                      onChange={handleInput}
                    />
                  </Form.Group>

                  <Button type="submit">Submit</Button>
                </Form>
              </CardBody>
            </Card>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default UploadPH;
