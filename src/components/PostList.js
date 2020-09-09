import React, { useState } from "react";
// import DefaultPosts from "./DefaultPosts";
import PostCard from "./PostCard";
import { Row } from "reactstrap";

function PostList({ posts }) {
  return (
    <div className="PostList">
      <Row>
        {posts.map((p) => (
          <PostCard post={p} key={p.id} />
        ))}
      </Row>
    </div>
  );
}

export default PostList;
