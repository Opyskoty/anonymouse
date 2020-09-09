import React from "react";
import DefaultPosts from "./DefaultPosts";
import PostCard from "./PostCard";
import { Row, Col } from "reactstrap";


function PostList() {
  return (
    <div className="PostList">
      <Row>
        {DefaultPosts.map( p => (<PostCard post={p} key={p.title} />))}
      </Row>

    </div>
  );
}

export default PostList;