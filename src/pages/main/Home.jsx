import React from "react";
import pic from "../../assets/react.svg";
import { CardBlog } from "../../components/CardBlog";

export const Home = () => {
  const userDummy = [
    { ava: pic, name: "ayyub", postDate: "2 jan" },
    { ava: pic, name: "idin", postDate: "3 jan" },
    { ava: pic, name: "david", postDate: "4 jan" },
    { ava: pic, name: "sanusi", postDate: "5 jan" },
    { ava: pic, name: "disa", postDate: "6 jan" },
    { ava: pic, name: "aya", postDate: "7 jan" },
  ];
  return (
    <>
      <div
        style={{ height: "88vh" }}
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
      <div style={{ minHeight: "88vh" }} className="container row p-4">
        <div className="col">
          {userDummy.map((item, i) => {
            return (
              <CardBlog
                key={i}
                user={item}
                title="Ini adalah sebuah cerita romansa yang tidak biasa, jalannya tidak akan mudah, tentu butuh effort. this us against the world. semoga akhirnya baik-baik saja dan bahagia selama-lamanya"
                img={pic}
              />
            );
          })}
        </div>
        <aside className="col-3 d-none d-md-block text-dark"><hr/></aside>
      </div>
    </>
  );
};
