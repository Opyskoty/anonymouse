import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

function CommentList({ comments }) {
  return (
    <ListGroup className="CommentList">
      {comments.map((c) => (
        <ListGroupItem>{c.text}</ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default CommentList;
