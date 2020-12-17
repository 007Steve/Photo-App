import React from "react";
import "../styles/Home.css";
import Nav from "../components/Nav";
import Row from "../components/Row";
import Post from "../components/Post";
function Home() {
  return (
    <div className="home">
      <Nav />
      <Row />
      <div className="home__container">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

        <Post />
        <Post />
        <Post />

        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Home;
