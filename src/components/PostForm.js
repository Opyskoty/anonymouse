import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

function PostForm() {
  return (
    <>
      <Form>
        <FormGroup>
          <Input type="textarea" name="text" id="text" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
}

export default PostForm;
