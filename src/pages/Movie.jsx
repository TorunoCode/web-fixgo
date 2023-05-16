import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListMovies, SkeletonListMovie, TopStory } from "../components";
import { BASE_URL } from "../constants";
import "../sass/pages/movie.scss";
// Toast
import {
	Container,
	FormControl,
	Grid,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Movie = () => {
	const [listMovie, setListMovie] = useState([]);
	const [tempList, setTempList] = useState([]);
	const [genre, setGenre] = useState("All");
	const [sort, setSort] = useState("default");

	useEffect(() => {
		const fetchMovie = async () => {
			let res = await axios.get(`${BASE_URL}/api/movies`);
			const list = res.data;
			const reverse = list.reverse();
			try {
				setListMovie(reverse);
				setTempList(reverse);
			} catch (err) {
				toast.error(err.message, { autoClose: 2000 });
			}
		};
		fetchMovie();
	}, []);

	useEffect(() => {
		const movie = tempList.filter(function (curData) {
			switch (genre) {
				case "All":
					return curData;
				case genre:
					return curData.genre === genre;
				default:
					return 0;
			}
		});
		setListMovie(movie);
	}, [genre]);

	useEffect(() => {
		console.log("sort:", sort);
		if (sort === "increase") {
			setListMovie(listMovie?.slice().sort((a, b) => a.rate - b.rate));
		}
		if (sort === "decrease") {
			setListMovie(listMovie?.slice().sort((a, b) => b.rate - a.rate));
		}
	}, [sort]);

	return (
		<div className='movie'>
			<TopStory />
			<Container disableGutters>
				<Grid container m='20px 0'>
					<Grid item xs={3} container alignItems='center' gap={2}>
						<Typography color='orange' fontSize={20} fontWeight={600}>
							Gener:
						</Typography>
						<FormControl sx={{ width: "150px" }}>
							<Select
								value={genre}
								displayEmpty
								onChange={(event) => {
									setGenre(event.target.value);
								}}
								size='small'
								sx={{
									border: "1px solid orange",
									background: "white",
									fontWeight: "600",
								}}
							>
								<MenuItem value='All'>All</MenuItem>
								<MenuItem value='Action'>Action</MenuItem>
								<MenuItem value='Thriller'>Thriller</MenuItem>
								<MenuItem value='Horror'>Horror</MenuItem>
								<MenuItem value='Adventure'>Adventure</MenuItem>
								<MenuItem value='Animation'>Animation</MenuItem>
								<MenuItem value='Music'>Music</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={3} container alignItems='center' gap={2}>
						<Typography color='orange' fontSize={20} fontWeight={600}>
							Rate:
						</Typography>
						<FormControl sx={{ width: "150px" }}>
							<Select
								value={sort}
								displayEmpty
								onChange={(event) => {
									setSort(event.target.value);
								}}
								size='small'
								sx={{
									border: "1px solid orange ",
									fontWeight: "600",
									background: "white",
								}}
							>
								<MenuItem value='default' disabled>
									Default
								</MenuItem>
								<MenuItem value='increase'>Low to high</MenuItem>
								<MenuItem value='decrease'>High to low</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				{listMovie.length > 0 ? (
					<ListMovies list={listMovie} />
				) : (
					<SkeletonListMovie />
				)}
				<ToastContainer />
			</Container>
		</div>
	);
};
