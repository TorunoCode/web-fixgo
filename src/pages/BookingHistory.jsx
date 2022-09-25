import React from "react";
import "../sass/pages/bookingHistory.scss";
const BookingHistory = () => {
  return (
    <div className="container_bh">
      <div className="main">
        <div className="title">Hi, Hàn Vân Tịch</div>
        <div className="form_list">
          <div className="row_1">Recent Booking History</div>
          <div className="row_2">
            <div className="text">Ticket ID</div>
            <div className="text">Movie name</div>
            <div className="text">Seat</div>
            <div className="text">Departure</div>
            <div className="text">Price</div>
            <div className="text">Booked</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
