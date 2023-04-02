import React from "react";
import "./Sipost.css";
import { Link, useNavigate } from "react-router-dom";

const SiPost = ({ post }) => {
  const { title, body, id } = post;
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="post">
      <h5>Id:{id}</h5>
      <h2>{title}</h2>
      <Link to={`/post/${id}`}>Show Detail</Link>
      <Link to={`/post/${id}`}>
        <button>Show Post Details</button>
      </Link>
      <button onClick={handleNavigation}>With Button Handler</button>
    </div>
  );
};

export default SiPost;
