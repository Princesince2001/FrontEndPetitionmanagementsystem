import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
// import Sidebar from "../../Homestuffs/Adash";

const initialValues = {
  petitionId: 0,
  petitionDescription: "",
  uploadDocument: "",
  uploadDocumentname: "",
  aadharNumber: "",
  talukLocation: "",
  // StatusType:"null",
  address: "",
  city: "",
  categoryId: "",
  userId: Cookies.get("Id"),
};

function Petitionformnull() {
  const [values, setValues] = useState(initialValues);
  const [catogory, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5112/api/Categorydetails")
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;

    // Validations
    if (name === "aadharNumber" && value.length > 12) return;
    if (name === "userId" && value.length > 4) return;
    if (name === "uploadDocumentname" && !isNaN(value)) return;

    setValues({ ...values, [name]: value });
  };

  const handleImageChange = (e) => {
    setValues({ ...values, uploadDocument: e.target.files[0] });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   Object.entries(values).forEach(([key, value]) => {
  //     formData.append(key, value);
  //   });
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5112/Add/Post",
  //       formData,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );
  //     window.alert("Posted successfully");
  //     console.log("Posted successfully:", response.data);
  //   } catch (error) {
  //     console.error("Post failure:", error);
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      const response = await axios.post(
        "http://localhost:5112/Add/Post",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      window.alert(`Posted successfully: Petition ID - ${response.data.petitionId}`);
      console.log("Posted successfully:", response.data);
    } catch (error) {
      console.error("Post failure:", error);
    }
  };

  return (
    // <><Sidebar/>
    <div className="auth-inner">
      <div className="auth-wrapper">
        <Container>
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>AadharNumber:</Form.Label>
                  <Form.Control
                    type="text"
                    name="aadharNumber"
                    value={values.aadharNumber}
                    onChange={handleInput}
                  />
                </Form.Group>

                {/* <Form.Group className="mb-2">
                  <Form.Label>PetitionDescription</Form.Label>
                  <Form.Control
                    type="text"
                    name="petitionDescription"
                    value={values.petitionDescription}
                    onChange={handleInput}
                  />
                </Form.Group> */}

                <Form.Group className="mb-3">
                  <Form.Label>PetitionDescription</Form.Label>
                  <Form.Control
                    type="text"
                    name="petitionDescription"
                    value={values.petitionDescription}
                    onChange={handleInput}
                    as="textarea"
                    rows={7}
                  />
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

                {/* <Form.Group className="mb-3">
                  <Form.Label>CategoryId:</Form.Label>
                  <Form.Control
                    type="number"
                    name="categoryId"
                    value={values.categoryId}
                    onChange={handleInput}
                  />
                </Form.Group> */}
                <Form.Label>Category</Form.Label>
                <select
                  class="form-control"
                  id="inputAddress2"
                  value={values.categoryId}
                  onChange={(e) =>
                    setValues({ ...values, categoryId: e.target.value })
                  }
                >
                  <option value="">Select a category</option>
                  {catogory.map((d) => (
                    <option value={d.categoryId}>
                      {d.categoryId}-{d.categoryName}
                    </option>
                  ))}
                </select>

                <Form.Group className="mb-3">
                  <Form.Label>UploadDocument:</Form.Label>
                  <Form.Control
                    type="file"
                    name="uploadDocument"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>UploadDocumentname:</Form.Label>
                  <Form.Control
                    type="text"
                    name="uploadDocumentname"
                    value={values.uploadDocumentname}
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
  );
}

export default Petitionformnull;



// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData();
//   Object.entries(values).forEach(([key, value]) => {
//     formData.append(key, value);
//   });
//   try {
//     const response = await axios.post(
//       "http://localhost:5112/Add/Post",
//       formData,
//       {
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );
//     window.alert(`Posted successfully: Petition ID - ${response.data.petitionId}`);
//     console.log("Posted successfully:", response.data);
//   } catch (error) {
//     console.error("Post failure:", error);
//   }
// };
