import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Button,
  Col
} from "reactstrap";
import CommentList from "./CommentList";

function PostCard({ post }) {
  return (
    <Col sm="6">
      <Card className="PostCard mb-3">
        <CardBody>
          <CardTitle>
            <h3>{post.title}</h3>
          </CardTitle>
          <CardText>{post.description}</CardText>
          <h5>Comments: </h5>
          <CommentList comments={post.comments} />
          <CardFooter>
            <Button color="info">Add Comment</Button>
          </CardFooter>
        </CardBody>
      </Card>
    </Col>
  );
}

export default PostCard;
