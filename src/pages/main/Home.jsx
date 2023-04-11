import React from "react";
import pic from "../../assets/react.svg";
import { CardBlog } from "../../components/CardBlog";
import { CardTrending } from "../../components/CardTrending";
import { Link } from "react-router-dom";

export const Home = () => {
  const titleDummy =
    "Ini adalah sebuah cerita romansa yang tidak biasa, jalannya tidak akan mudah, tentu butuh effort. this us against the world. semoga akhirnya baik-baik saja dan bahagia selama-lamanya";
  const userDummy = [
    { ava: pic, name: "ayyub" },
    { ava: pic, name: "idin" },
    { ava: pic, name: "david" },
    { ava: pic, name: "sanusi" },
    { ava: pic, name: "disa" },
    { ava: pic, name: "aya" },
  ];
  const blogDummy = [
    { postDate: "2 jan", timeRead: 5, img: pic, title: titleDummy },
    { postDate: "3 jan", timeRead: 6, img: pic, title: titleDummy },
    { postDate: "4 jan", timeRead: 7, img: pic, title: titleDummy },
    { postDate: "5 jan", timeRead: 8, img: pic, title: titleDummy },
    { postDate: "6 jan", timeRead: 9, img: pic, title: titleDummy },
    { postDate: "7 jan", timeRead: 4, img: pic, title: titleDummy },
  ];
  const topicDummy = [
    "programing",
    "react",
    "HTML5",
    "CSS",
    "Coding",
    "game",
    "movie",
    "music",
    "anime",
    "manga",
  ];
  return (
    <>
      {/* -- banner section -- */}
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

      {/* -- trending section -- */}
      <div className="m-5">
        <div>
          <h2>Trending on Medium</h2>
        </div>
        <ol className="container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {userDummy.map((item, i) => {
            const blogItem = blogDummy[i];
            return (
              <li key={i} className="col d-flex">
                <span className="mt-2 text-secondary h2 opacity-25">0{i+1}</span>
                <CardTrending user={item} blog={blogItem} />
              </li>
            );
          })}
        </ol>
      </div>
      <hr />

      {/* -- main section -- */}
      <div style={{ minHeight: "88vh" }} className="container-fluid row p-4">
        <div className="col col-md-8">
          {userDummy.map((item, i) => {
            const blogItem = blogDummy[i];
            return <CardBlog key={i} user={item} blog={blogItem} />;
          })}
        </div>
        <div className="col-md-4 d-none d-md-block text-dark p-3">
          <div className="sticky-md-top" style={{ top: "4rem" }}>
            <h2>Discover more of what matters to you</h2>
            <div>
              {topicDummy.map((item, i) => {
                return (
                  <button
                    key={i}
                    className="btn btn-secondary rounded-pill m-1"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <Link>See more topics</Link>
            <hr />
            <div>
              {topicDummy.map((item, i) => {
                return (
                  <button key={i} className="btn m-1">
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
