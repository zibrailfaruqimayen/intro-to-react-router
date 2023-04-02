import React from "react";
import "./friend.css";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  //   console.log(friend);
  const { email, name, id, phone } = friend;
  return (
    <div className="friend">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>
        <Link to={`/friend/${id}`}>show me details</Link>
      </p>
    </div>
  );
};

export default Friend;
