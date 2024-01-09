import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddModal = ({ show, closeModal, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [list, setList] = useState("");
    const [tags, setTags] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        onSubmit(title, description, list, tags);
    };

    return (
        <Modal show={show} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add New Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated}>
                    <Form.Group>
                        <Form.Label className="add-title-label">
                            Title
                        </Form.Label>
                        <Form.Control
                            className="mb-3"
                            type="text"
                            placeholder="Enter Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Form.Label className="add-description-label">
                            Description
                        </Form.Label>
                        <Form.Control
                            className="mb-3"
                            as="textarea"
                            placeholder="Enter Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                            required
                        />
                        <Form.Label className="add-description-label">
                            List
                        </Form.Label>
                        <Form.Control
                            className="mb-3"
                            type="text"
                            placeholder="Enter List"
                            rows={4}
                            value={list}
                            onChange={(e) => setList(e.target.value)}
                        />
                        <Form.Label className="add-description-label">
                            Tags
                        </Form.Label>
                        <Form.Control
                            className="add-description-input"
                            type="text"
                            placeholder="Enter Tag(s) separated by a comma and space"
                            rows={4}
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => closeModal()}>
                    Close
                </Button>
                <Button
                    variant="success"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddModal;
