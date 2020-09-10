import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Button,
  Alert,
} from "reactstrap";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function PostCard({ post, posts, deletePost, setPosts }) {
  const [flagged, setFlagged] = useState(false);

  return (
    <>
      <Card className="PostCard mb-3">
        <CardHeader>
          <Button
            size="sm"
            color="danger"
            className="float-left"
            onClick={() => setFlagged(true)}
          >
            Flag As Cat
          </Button>
          <Button
            onClick={() => deletePost(post.id)}
            size="sm"
            color="warning"
            className="float-right"
          >
            Delete Post
          </Button>
        </CardHeader>
        <CardBody>
          <CardTitle>
            {flagged && (
              <Alert color="danger">
                WARNING: We believe this post has been written by a cat. Comment
                at your own risk.
              </Alert>
            )}
            <h3>{post.title}</h3>
          </CardTitle>
          <CardText>{post.description}</CardText>
          <h5 className="text-left">Comments: </h5>
          <CommentList comments={post.comments} />
          <CardFooter>
            <CommentForm
              post={post}
              posts={posts}
              setPosts={setPosts}
            />
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default PostCard;
