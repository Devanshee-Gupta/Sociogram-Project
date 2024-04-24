import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./EditCard.css";

const EditProfile = ({show,setShow}) => {

  const handleClose = () => setShow(false);
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
                placeholder="Lorem ipsum dolor sit amet."
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Bio</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{fontSize:"14px"}}>
            Cancel
          </Button>
          <Button className="btn btn-dark" onClick={handleClose} style={{fontSize:"14px"}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProfile;
