import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../sass/pages/movieDetail.scss";
import axios from "axios";
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	TelegramShareButton,
	TelegramIcon,
} from "react-share";
import { BASE_URL } from "../constants";
import { Booking, Feedback, SkeletonDetail, StarRating } from "../components";

export const MovieDetail = () => {
	const [description, setDescription] = useState(true);
	// const [payment, setPayment] = useState(false);
	// call lấy data movie detail theo id
	const [movie, setMovie] = useState(0);

	// render khi có listfeedback
	const [listFeedback, setListFeedback] = useState([]);
	const { name } = useParams();
	useEffect(() => {
		const fetchMovie = async () => {
			const { data } = await axios.get(`${BASE_URL}/api/movies/${name}`);
			setMovie(data);
		};
		fetchMovie();
	}, [name, listFeedback]);
	const url = `${BASE_URL}/MovieDetail/${encodeURIComponent(name)}`;
	return (
		// bấm thả xuống description
		<div className='detail'>
			<div className='main'>
				<div className='title'>Movie Details</div>
				{movie !== 0 ? (
					<div>
						<div className='detailmovie'>
							<div className='info'>
								<img src={movie.image} alt='' />
								<div className='info-text'>
									<div className='name'>{movie.name}</div>
									<div className='rate'>
										<StarRating rating={movie.rate} />
										<div className='rating'>{movie.rate}/10</div>
									</div>
									<div className='text'>
										<b>Director:</b> {movie.director} <br />
										<b>Cast:</b> {movie.cast} <br />
										<b>Genre:</b> {movie.genre} <br />
										<b>Release time:</b>{" "}
										{movie.releaseTime &&
											movie.releaseTime
												.slice(0, 10)
												.split("-")
												.reverse()
												.join("-")}
										<br />
										<b>Running time:</b> {movie.runningTime} minutes
										<br />
										<b>Language:</b> {movie.language} <br />
									</div>
								</div>
							</div>
							<div className='video_ytb'>
								<iframe
									width='480'
									height='270'
									src={movie.linkReview}
									title='YouTube video player'
									frameborder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowfullscreen
								></iframe>
							</div>
						</div>
						<div
							style={{
								marginTop: "10px",
								display: "flex",
								gap: "10px",
								alignItems: "center",
							}}
						>
							<div
								style={{
									fontSize: "20px",
									fontWeight: "bold",
									color: "orange",
								}}
							>
								Share the link now:
							</div>
							<FacebookShareButton url={url}>
								<FacebookIcon size={35} round={true} />
							</FacebookShareButton>
							<TwitterShareButton url={url}>
								<TwitterIcon size={35} round={true} />
							</TwitterShareButton>
							<TelegramShareButton url={url}>
								<TelegramIcon size={35} round={true} />
							</TelegramShareButton>
						</div>
						<div className='description'>
							<div className='btn_description'>
								Description &nbsp;
								<i
									onClick={() => setDescription(!description)}
									className='fa-solid fa-caret-down'
								></i>
							</div>
							{description && <p>&emsp; &emsp; {movie.describe}</p>}
						</div>
					</div>
				) : (
					<SkeletonDetail />
				)}
				<div className='title'>Booking</div>
				{/* <Booking idMovie={movie._id} nameMovie={movie.name} />*/}
				<Booking idMovie={movie._id} nameMovie={movie.name} />
				{/* <div className='title'>Feedback</div> */}
				<Feedback
					listFeedback={listFeedback}
					setListFeedback={setListFeedback}
					idMovie={movie._id}
					rate={movie.rate}
					nameMovie={movie.name}
				/>
			</div>
		</div>
	);
};
