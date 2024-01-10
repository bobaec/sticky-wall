import React, { useState } from "react";
import "./AddModal.scss";
import { Modal, Button, Form, Row, Col, Dropdown } from "react-bootstrap";

const AddModal = ({ show, closeModal, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [list, setList] = useState("General");
    const [colorTitle, setColorTitle] = useState("Yellow");
    const [listColor, setListColor] = useState("#ffd43b");
    const [tags, setTags] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        if (title.length > 0 && description.length > 0) {
            onSubmit(title, description, list, tags, listColor);
        }
    };

    return (
        <Modal show={show} size="lg" className="add-modal-container">
            <Modal.Header closeButton>
                <Modal.Title>Add New Todo</Modal.Title>
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
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
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
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
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
                                    value={list}
                                    onChange={(e) => setList(e.target.value)}
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
                                        setColorTitle(splitColorAndHex[0]);
                                        setListColor(color);
                                    }}
                                >
                                    <Dropdown.Toggle
                                        className={`dropdown-toggle-container w-100 ${colorTitle.toLowerCase()}-background`}
                                    >
                                        {colorTitle}
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
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}
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
