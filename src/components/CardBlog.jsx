import React from "react";
import { Avatar } from "./Avatar";

export const CardBlog = ({user, blog, id}) => {
  return (
    <>
      <div
        className="card card-body px-0 mb-1 border-0 rounded-0 border-bottom border-black"
        style={{ minHeight: "9rem" }}
        key={id}
      >
        <div style={{ maxHeight: "2rem" }} className="d-flex align-content-center mb-1">
          <Avatar user={user.ava} height={"1.5rem"} />
          <p>{user.name} - {blog.postDate}</p>
        </div>
        <div className="row">
          <h5 className="card-title multiline-text-truncate col align-self-center">
            {blog.title}
          </h5>
          <img
            src={blog.img}
            alt="pic"
            className="col-3"
            style={{ maxHeight: "7rem" }}
          />
        </div>
      </div>
    </>
  );
};
