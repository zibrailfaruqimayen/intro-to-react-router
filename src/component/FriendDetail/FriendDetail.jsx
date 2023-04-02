import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();
  const { name, phone } = friend;
  console.log(friend);
  return (
    <div>
      <h3>Every Thing about this parson is here</h3>
      <h2>{name}</h2>
      <p>{phone}</p>
    </div>
  );
};

export default FriendDetail;
