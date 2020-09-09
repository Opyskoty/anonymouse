import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Col } from "reactstrap";

const INITIAL_STATE = { title: "", description: "" };

function PostForm({posts, setPosts}) {
  const [formData, setFormData] = useState(INITIAL_STATE);


  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setPosts([...posts, {...formData}]);
    setFormData(INITIAL_STATE);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="title" sm={2}>
            Title:{" "}
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="description" sm={2}>
            Description:{" "}
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
}

export default PostForm;
