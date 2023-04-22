import React, { useState, useEffect } from "react";
import "../sass/pages/home.scss";
import ListMovie from "../components/ListMovies";
import axios from "axios";
import Carousel from "t-a-e-3d-carousel-reactjs";
import SkeletonListMovie from "../components/subcomponents/SkeletonListMovie";

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
			title: "Avatar 2",
			url: "https://techbiz.vn/attachments/1671172015866-jpeg.153",
		},
		{
			title: "magic mike",
			url: "https://sgp1.digitaloceanspaces.com/cdns.dep365.com/wp-content/uploads/2023/02/phim-chieu-rap-2023-4.jpg",
		},
		{
			title: "tro tan ruc ro",
			url: "https://img.idesign.vn/2022/12/thumb_fixed.jpg",
		},
		{
			title: "muon gap anh",
			url: "https://cdn.dep365.com/wp-content/uploads/2023/02/phim-chieu-rap-2023-6-1.jpg?strip=all&lossy=1&quality=90&webp=90&avif=60&w=800&ssl=1",
		},
		{
			title: "trainsformers",
			url: "https://bloganchoi.com/wp-content/uploads/2020/07/phim-robot-hanh-dong-hay-nhat.jpg",
		},
	];

	return (
		<div className='home'>
			<div className='main'>
				<Carousel imageList={image} autoPlay={true} interval={1000} />
				<div className='tag_movie'>
					<div className='title'>Now Showing</div>
					{listMovie.length > 0 ? (
						<ListMovie list={listMovie} />
					) : (
						<SkeletonListMovie />
					)}
				</div>
				<div className='tag_movie' style={{ marginBottom: "20px" }}>
					<div className='title'>Comming Soon</div>
				</div>
				{/* <div className="tag_movie">
          <div className="title">Promotion news</div>
          <VoucherHome />
        </div> */}
			</div>
		</div>
	);
};

export default Home;
