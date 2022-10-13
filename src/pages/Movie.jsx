import React, { useState, useEffect } from "react";
import axios from "axios";
import "../sass/pages/movie.scss";
import ListMovie from "../components/ListMovies";

const Movie = () => {
  const [listMovie, setListMovie] = useState([]);
  const [tempList, setTempList] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      let res = await axios.get("/api/movies");
      try {
        setListMovie(res?.data);
        setTempList(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);
  // handle fillter chung
  const handleFillter = (e) => {
    const value = e.target.value;
    const movie = tempList.filter(function (curData) {
      switch (value) {
        case "All":
          return curData;
        case "Adventure":
          return curData.genre === "Adventure";
        case "Horror":
          return curData.genre === "Horror";
        default:
          return 0;
      }
    });
    setListMovie(movie);
  };
  // sắp xếp tăng giảm
  const handleSort = (e) => {
    const sort = e.target.value;
    if (sort === "increase") {
      setListMovie(listMovie?.slice().sort((a, b) => a.rate - b.rate));
    }
    if (sort === "decrease") {
      setListMovie(listMovie?.slice().sort((a, b) => b.rate - a.rate));
    }
  };
  return (
    <div className="movie">
      <div className="main">
        <div className="box_filter">
          <div className="filter">
            <label htmlFor="">Gener:&nbsp;</label>
            <select className="select" onChange={handleFillter}>
              <option value="All">All</option>
              <option value="Horror">Horror</option>
              <option value="Adventure">Adventure</option>
            </select>
          </div>
          <div className="filter">
            <label htmlFor="">Rate:&nbsp;</label>
            <select className="select" onChange={handleSort}>
              {/* <option value="Default">Default</option> */}
              <option value="increase">Low to high</option>
              <option value="decrease">High to low</option>
            </select>
          </div>
        </div>
        {listMovie.length > 0 && <ListMovie list={listMovie} />}
      </div>
    </div>
  );
};

export default Movie;
