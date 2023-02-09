import React, { useState, useEffect } from "react";
import "../sass/pages/home.scss";
import ListMovie from "../components/ListMovies";
import axios from "axios";
import VoucherHome from "../components/subcomponents/VoucherHome";

const Home = () => {
  const [listMovie, setListMovie] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      let res = await axios.get("https://backend-boo.vercel.app/api/movies");
      try {
        setListMovie(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);
  // login Google

  return (
    <div className="home">
      <div className="main">
        <div className="tag_movie">
          <div className="title">Now Showing</div>
          {listMovie.length > 0 && <ListMovie list={listMovie} />}
        </div>
        <div className="tag_movie">
          <div className="title">Comming Soon</div>
        </div>
        <div className="tag_movie">
          <div className="title">Promotion news</div>
          <VoucherHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
