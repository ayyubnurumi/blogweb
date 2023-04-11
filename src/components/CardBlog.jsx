import React from "react";
import { Avatar } from "./Avatar";

export const CardBlog = ({ user, blog, id }) => {
  return (
    <>
      <div
        className="card card-body px-0 mb-1 border-0"
        style={{ minHeight: "9rem" }}
        key={id}
      >
        <div className="row">
          <div className="col">
            <div
              style={{ maxHeight: "2rem" }}
              className="d-flex align-content-center mb-1"
            >
              <Avatar user={user.ava} height={"1.5rem"} />
              <p>
                {user.name} - {blog.postDate}
              </p>
            </div>
            <h5 className="card-title multiline-text-truncate-2 align-self-center">
              {blog.title}
            </h5>
            <div className="d-flex mt-2">
              <p>
                {blog.postDate} - {blog.timeRead}
              </p>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                className="ms-auto"
              >
                <path
                  d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                  fill="#292929"
                ></path>
              </svg>
            </div>
          </div>
          <img
            src={blog.img}
            alt="pic"
            className="col-3 col-lg-4 my-auto"
            style={{ maxHeight: "7rem" }}
          />
        </div>
      </div>
    </>
  );
};
