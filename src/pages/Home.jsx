import React, { useState, useEffect } from "react";
import "../sass/pages/home.scss";
import ListMovie from "../components/ListMovies";
import axios from "axios";

const Home = () => {
  const [listMovie, setListMovie] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      let res = await axios.get("/api/movies");
      try {
        setListMovie(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);
  return (
    <div className="home">
      <div className="main">
        <div className="tag_movie">
          <div className="title">Now Showing</div>
          {listMovie.length > 0 && <ListMovie list={listMovie} />}
        </div>
        <div className="tag_movie">
          <div className="title">Comming Soon</div>
          {listMovie.length > 0 && <ListMovie list={listMovie} />}
        </div>
        <div className="tag_movie">
          <div className="title">Movie Blog</div>
        </div>
        <div className="tag_movie">
          <div className="title">Promotion news</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
