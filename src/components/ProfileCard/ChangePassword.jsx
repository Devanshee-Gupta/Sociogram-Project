import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ChangePasswordService from "../../services/ChangePasswordService";

const ChangePassword = ({ show, setShow}) => {
  let session = document.cookie.match(/session_key=([^;]*)/);
  const [formData, setFormData] = useState({
    password : "",
    confirm_password : ""
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
    ChangePasswordService(session,formData);
    setShow(false);
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-transparent">
          <Modal.Title style={{ fontSize: "1.3rem" }}>
            Change Your Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Enter your password here"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirm_password"
                type="password"
                onChange={handleChange}
                placeholder="Re-enter your password here"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            variant="secondary"
            onClick={handleClose}
            style={{ fontSize: "14px" }}
          >
            Cancel
          </Button>
          <Button
            className="btn btn-dark"
            type="submit"
            onClick={handleSave}
            style={{ fontSize: "14px" }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChangePassword;
