import React from "react";

function Comment({ comment }) {
  return (
    <div className="Comment">
      <p>{comment.text}</p>
    </div>
  );
}

export default Comment;
