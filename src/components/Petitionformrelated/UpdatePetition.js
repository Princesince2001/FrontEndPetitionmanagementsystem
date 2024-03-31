import React, { useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
 
 
const initialValues = {
    id: "",
    petitionDescription: "",
    aadharNumber: "",
    talukLocation: "",
    uploadDocument: null,
    address: "",

};
 
function UpdatePetitionform() {
  const [values, setValues] = useState(initialValues);
 
  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleImageChange = (e) => {
    setValues({
      ...values,
      accessoryImage: e.target.files[0],
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key !== "id") {
        formData.append(key, value);
      }
    });
 
    try {
      const response = await axios.put(
        `http://localhost:5112/api/Petitionhandler/Put/api/UpdatePetitionHandler${values.id}`,
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
  };
 
  return (
    <div className="auth-inner">
        <div className="auth-wrapper">
    <Container>
      <Card>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>ID:</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={values.id}
                onChange={handleInput}
              />
            </Form.Group>
 
            <Form.Group className="mb-3">
              <Form.Label>petitionDescription:</Form.Label>
              <Form.Control
                type="text"
                name="petitionDescription"
                value={values.petitionDescription}
                onChange={handleInput}
              />
            </Form.Group>
 
            <Form.Group className="mb-3">
              <Form.Label>aadharNumber:</Form.Label>
              <Form.Control
                type="number"
                name="aadharNumber"
                value={values.aadharNumber}
                onChange={handleInput}
              />
            </Form.Group>
 
            <Form.Group className="mb-3">
              <Form.Label>talukLocation:</Form.Label>
              <Form.Control
                type="text"
                name="talukLocation"
                value={values.talukLocation}
                onChange={handleInput}
              />
            </Form.Group>
 
            <Form.Group className="mb-3">
              <Form.Label>uploadDocument:</Form.Label>
              <Form.Control
                type="file"
                name="uploadDocument"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>
 
            <Button type="submit">Update</Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
    </div>
    </div>
  );
}
 
export default UpdatePetitionform;