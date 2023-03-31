import React from "react";
import pic from "../../assets/react.svg";

export const Home = () => {
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="container-fluid bg-warning d-flex flex-column justify-content-center align-items-start border-bottom border-dark"
      >
        <h1 style={{ fontSize: "4.5rem", fontFamily: "serif" }}>
          Stay Curious.
        </h1>
        <p
          style={{ fontSize: "1.5rem", lineHeight: "1.5rem" }}
          className="mt-4 mb-5"
        >
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button className="btn btn-dark rounded-pill px-5">
          Start Reading
        </button>
      </div>
      <div style={{ height: "100vh" }} className="p-4">
        <div className="card card-body" style={{ minHeight: "9rem" }}>
          <div style={{ maxHeight: "2rem" }} className="d-flex">
            <img
              src={pic}
              alt="avatar"
              className="rounded-circle me-2"
              style={{ maxHeight: "1.7rem" }}
            />
            <p>Author's Name - posting date</p>
          </div>
          <div className="row">
            <h5 className="card-title text-truncate col">
              Card title. Some quick example text to build on the card title and
              make up the bulk of the card's content.
            </h5>
            <img
              src={pic}
              alt="pic"
              className="col-3"
              style={{ maxHeight: "7rem" }}
            />
          </div>
        </div>{" "}
      </div>
    </>
  );
};
