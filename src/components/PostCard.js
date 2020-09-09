import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Button,
  Col,
} from "reactstrap";

function PostCard({ post }) {
  return (
    <Col sm="6">
      <Card className="PostCard mb-3">
        <CardBody>
          <CardTitle>
            <h3>{post.title}</h3>
          </CardTitle>
          <CardText>{post.description}</CardText>
          <CardFooter>
            <Button color="info">Add Comment</Button>
          </CardFooter>
        </CardBody>
      </Card>
    </Col>
  );
}

export default PostCard;
