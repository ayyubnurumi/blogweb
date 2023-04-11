import React from "react";
import { Avatar } from "./Avatar";

export const CardTrending = ({key, user, blog}) => {
  return (
    <div
      className="card card-body mb-1 border-0 rounded-0"
      style={{ minHeight: "9rem" }}
      key={key}
    >
      <div
        style={{ maxHeight: "2rem" }}
        className="d-flex align-content-center mb-1"
      >
        <Avatar user={user.ava} height={"1.5rem"} />
        <p>
          {user.name}
        </p>
      </div>
      <h5 className="card-title multiline-text-truncate col align-self-center">
        {blog.title}
      </h5>
      <p>{blog.postDate} - {blog.timeRead}</p>
    </div>
  );
};
