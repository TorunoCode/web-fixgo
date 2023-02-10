import React, { useState, useEffect } from "react";
import "../sass/pages/home.scss";
import ListMovie from "../components/ListMovies";
import axios from "axios";
import VoucherHome from "../components/subcomponents/VoucherHome";
import Carousel from "t-a-e-3d-carousel-reactjs";
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
  const image = [
    {
      title: "black panther",
      url: "https://kyty.vn/wp-content/uploads/2021/06/black-panther-744x419-1.png",
    },
    {
      title: " decibel",
      url: "https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/t/h/thumb-decibel.jpg",
    },

    {
      title: "trainsformers",
      url: "https://bloganchoi.com/wp-content/uploads/2020/07/phim-robot-hanh-dong-hay-nhat.jpg",
    },
    {
      title: "Avatar 2",
      url: "https://techbiz.vn/attachments/1671172015866-jpeg.153/",
    },
    {
      title: "train to busan",
      url: "http://imgs.vietnamnet.vn/Images/2016/08/12/08/20160812084751-1108-chuyen-tau-sinh-tu-005.jpg",
    },
    {
      title: "tro tan ruc ro",
      url: "https://img.idesign.vn/2022/12/thumb_fixed.jpg",
    },
  ];

  return (
    <div className="home">
      <div className="main">
        <Carousel imageList={image} autoPlay={true} interval={1000} />
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
