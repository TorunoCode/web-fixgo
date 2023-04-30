import React from "react";
import { Routes as Rou, Route, Navigate } from "react-router-dom";
import { NotFound } from "../components";
import {
	BookingHistory,
	Home,
	Movie,
	MovieDetail,
	MyProfile,
	News,
	Support,
} from "../pages";
const Routes = () => {
	return (
		<Rou>
			<Route path='/' element={<Home />} />
			<Route path='/Home' element={<Home />} />
			<Route path='/Movie' element={<Movie />} />
			<Route path='/News' element={<News />} />
			<Route path='/MovieDetail/:name' element={<MovieDetail />} />
			<Route path='/MyProfile' element={<MyProfile />} />
			<Route path='/BookingHistory' element={<BookingHistory />} />
			<Route path='/Support' element={<Support />} />
			<Route path='/NotFound' element={<NotFound />} />
			<Route path='*' element={<Navigate to='/NotFound' />} />
		</Rou>
	);
};

export default Routes;
