import React from "react";
import PostCard from "./PostCard";
import { Row, Col } from "reactstrap";
import { HotKeys } from "react-hotkeys";

function PostList({ posts, setPosts }) {

  const deletePost = (postId) => {
    const updatedPosts = posts.filter((p) => p.id !== postId);
    setPosts([...updatedPosts]);
  };

  return (
    <div className="PostList">
      <Row>
        <Col sm="12">
          {posts.map((p) => (
            <HotKeys handlers={{ DELETE: () => deletePost(p.id) }} key={p.id}>
              <PostCard
                post={p}
                key={p.id}
                setPosts={setPosts}
                posts={posts}
                deletePost={deletePost}
              />
            </HotKeys>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default PostList;
