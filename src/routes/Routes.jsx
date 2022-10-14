import React from "react";
import { Routes as Rou, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Movie from "../pages/Movie.jsx";
import Event from "../pages/Event.jsx";
import MovieDetail from "../pages/MovieDetail.jsx";
import MyProfile from "../pages/MyProfile.jsx";
import BookingHistory from "../pages/BookingHistory.jsx";
const Routes = () => {
  return (
    <Rou>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Movie" element={<Movie />} />
      <Route path="/Event" element={<Event />} />
      <Route path="/MovieDetail/:id" element={<MovieDetail />} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/BookingHistory" element={<BookingHistory />} />
    </Rou>
  );
};

export default Routes;
