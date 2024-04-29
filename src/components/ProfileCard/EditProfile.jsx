import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./EditCard.css";
import EditProfileService from "../../services/EditProfileService.jsx";

const EditProfile = ({show,setShow}) => {

  let session = document.cookie.match(/session_key=([^;]*)/);
  const [formData, setFormData] = useState({
    name : "",
    bio : ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleClose = () => setShow(false);

  const handleSave = (e) => {
    e.preventDefault();
    EditProfileService(session,formData);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-transparent">
          <Modal.Title style={{fontSize:"1.3rem"}}>Edit Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter name here"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Bio</Form.Label>
              <Form.Control as="textarea" rows={3} name="bio" onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{fontSize:"14px"}}>
            Cancel
          </Button>
          <Button className="btn btn-dark" type="submit" onClick={handleSave} style={{fontSize:"14px"}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProfile;
