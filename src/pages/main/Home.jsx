import React from "react";

export const Home = () => {
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="container-fluid ps-4 bg-warning d-flex flex-column justify-content-center align-items-start border-bottom border-dark"
      >
        <h1 style={{fontSize: '4.5rem', fontFamily: "serif"}}>Stay Curious.</h1>
        <p style={{fontSize: '1.5rem', lineHeight: '1.5rem'}} className="mt-4 mb-5">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button className="btn btn-dark rounded-pill px-5">
          Start Reading
        </button>
      </div>
      <div style={{height: '100vh'}}>
        belum dibuat, tunggu yaa
      </div>
    </>
  );
};
