import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, Dropdown } from "react-bootstrap";

const EditModal = ({ show, todo, closeModal, onSubmit, handleDelete }) => {
    const { todo_id, title, description, list_type, tags, list_color } = todo;

    const [updatedTitle, setUpdatedTitle] = useState(title || "");
    const [updatedDescription, setUpdatedDescription] = useState(
        description || ""
    );
    const [updatedList, setUpdatedList] = useState(list_type || "");
    const [updatedColorTitle, setUpdatedColorTitle] = useState(
        list_color.split(", ")[0] || "Yellow"
    );
    const [updatedListColor, setUpdatedListColor] = useState(
        list_color || "Yellow, #ffd43b"
    );
    const [updatedTags, setUpdatedTags] = useState(tags || "");
    const [validated, setValidated] = useState(false);

    const handleSubmitEdit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        if (updatedTitle.length > 0 && updatedDescription.length > 0) {
            onSubmit(
                todo_id,
                updatedTitle,
                updatedDescription,
                updatedList,
                updatedTags,
                updatedListColor
            );
        }
    };

    return (
        <Modal show={show} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Edit Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated}>
                    <Form.Group>
                        <Row>
                            <Col md={12}>
                                <Form.Label className="add-title-label">
                                    Title
                                </Form.Label>
                                <Form.Control
                                    className="mb-3"
                                    type="text"
                                    placeholder="Enter Title"
                                    value={updatedTitle}
                                    onChange={(e) =>
                                        setUpdatedTitle(e.target.value)
                                    }
                                    required
                                />
                            </Col>
                            <Col md={12}>
                                <Form.Label className="add-description-label">
                                    Description
                                </Form.Label>
                                <Form.Control
                                    className="mb-3"
                                    as="textarea"
                                    placeholder="Enter Description"
                                    value={updatedDescription}
                                    onChange={(e) =>
                                        setUpdatedDescription(e.target.value)
                                    }
                                    rows={4}
                                    required
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Label className="add-description-label">
                                    List
                                </Form.Label>
                                <Form.Control
                                    className="mb-3"
                                    type="text"
                                    placeholder="Enter List"
                                    rows={4}
                                    value={updatedList}
                                    onChange={(e) =>
                                        setUpdatedList(e.target.value)
                                    }
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Label className="add-description-label">
                                    Color
                                </Form.Label>
                                <Dropdown
                                    className={`color-dropdown-container w-100`}
                                    onSelect={(color) => {
                                        const splitColorAndHex =
                                            color.split(", ");
                                        setUpdatedColorTitle(
                                            splitColorAndHex[0]
                                        );
                                        setUpdatedListColor(color);
                                    }}
                                >
                                    <Dropdown.Toggle
                                        className={`dropdown-toggle-container w-100 ${updatedColorTitle.toLowerCase()}-background`}
                                    >
                                        {updatedColorTitle}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="w-100">
                                        <Dropdown.Item eventKey="Yellow, #ffd43b">
                                            Yellow
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="Red, #ff6b6b">
                                            Red
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="Blue, #66d9e8">
                                            Blue
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="Orange, #eea768">
                                            Orange
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="Gray, #7c7c7c">
                                            Gray
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col md={12}>
                                <Form.Label className="add-description-label">
                                    Tags
                                </Form.Label>
                                <Form.Control
                                    className="add-description-input"
                                    type="text"
                                    placeholder="Enter Tag(s) separated by a comma and space"
                                    rows={4}
                                    value={updatedTags}
                                    onChange={(e) =>
                                        setUpdatedTags(e.target.value)
                                    }
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => closeModal()}>
                    Close
                </Button>
                <Button
                    variant="danger"
                    type="submit"
                    onClick={() => handleDelete(todo_id)}
                >
                    Delete
                </Button>
                <Button
                    variant="success"
                    type="submit"
                    onClick={(e) => handleSubmitEdit(e)}
                >
                    Edit
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditModal;
