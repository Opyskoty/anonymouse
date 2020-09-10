import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

function CommentList({ comments }) {
  return (
    <ListGroup className="CommentList">
      {comments &&
        comments.map((c) => (
          <ListGroupItem className="text-left" key={c.id}>
            &#8226; {c.comment}
          </ListGroupItem>
        ))}
    </ListGroup>
  );
}

export default CommentList;
