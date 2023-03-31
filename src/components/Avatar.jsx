import React from "react";

export const Avatar = ({user, height}) => {
  return (
    <>
      <img
        src={user}
        alt="avatar"
        className="rounded-circle me-2"
        style={{ maxHeight: height, aspectRatio: 1/1 }}
      />
    </>
  );
};
