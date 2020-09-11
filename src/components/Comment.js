import React from "react";
import { Button } from "reactstrap";

function Comment({ comment, deleteComment }) {
  return (
    <div className="Comment">
      &#8226; {comment.comment}
      <Button
        size="sm"
        color="danger"
        className="float-right"
        onClick={() => deleteComment(comment.id)}
      >
        X
      </Button>
    </div>
  );
}

export default Comment;
