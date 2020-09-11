import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import Comment from "./Comment";
import { HotKeys } from "react-hotkeys";

function CommentList({ post, posts, setPosts }) {

  const deleteComment = (commentId) => {
    const updatedComments = post.comments.filter((c) => c.id !== commentId);

    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === post.id) {
        posts[i].comments = [...updatedComments];
      }
    }
    let updatedPosts = [...posts];
    setPosts(updatedPosts);
  };

  return (
    <ListGroup className="CommentList">
      {post.comments &&
        post.comments.map((c) => (
          <HotKeys handlers={{ DELETE: () => deleteComment(c.id) }} key={c.id}>
            <ListGroupItem className="text-left" key={c.id}>
              <Comment comment={c} deleteComment={deleteComment} />
            </ListGroupItem>
          </HotKeys>
        ))}
    </ListGroup>
  );
}

export default CommentList;
