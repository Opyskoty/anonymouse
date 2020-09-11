import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = { comment: "" };

function CommentForm({ post, posts, setPosts }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === post.id) {
        posts[i].comments = posts[i].comments
          ? [...posts[i].comments, { ...formData, id: uuidv4() }]
          : [{ ...formData, id: uuidv4() }];
      }
    }
    let updatedPosts = [...posts];

    setPosts([...updatedPosts]);
    setFormData(INITIAL_STATE);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 text-center">
          <Label for="comment" className="mr-sm-2">
            Add a Comment
          </Label>
          <Input
            type="text"
            name="comment"
            id="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </FormGroup>
        <Button className="mt-2">Add Comment</Button>
      </Form>
    </>
  );
}

export default CommentForm;
