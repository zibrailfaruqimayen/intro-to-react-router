import React from "react";
import { useLoaderData } from "react-router-dom";
import SiPost from "../siPost/SiPost";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h2>All posts are here: {posts.length}</h2>
      <div>
        {posts.map((post) => (
          <SiPost key={post.id} post={post}></SiPost>
        ))}
      </div>
    </div>
  );
};

export default Posts;
