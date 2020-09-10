import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function CommentForm(){
  return(
    <>
    <Form>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 text-center">
        <Label for="comment" className="mr-sm-2">Add a Comment</Label>
        <Input type="text" name="comment" id="comment"/>
      </FormGroup>
      <Button>Add Comment</Button>
    </Form>
    </>
  )
}

export default CommentForm;