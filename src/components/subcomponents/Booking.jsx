import React, { useState, useEffect } from "react";
import "../../sass/components/subcomponents/booking.scss";
import axios from "axios";

const Booking = ({ idMovie, nameMovie }) => {
  const [payment, setPayment] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [cinema, setCinema] = useState([]);
  const [idcinema, setIdCinema] = useState("");

  const [date, setDate] = useState([]);
  const [iddate, setIdDate] = useState("");

  const [sesscion, setSesscion] = useState([]);
  const [idsesscion, setIdSession] = useState("");

  const [seat, setSeat] = useState([]);
  // call api cinema
  useEffect(() => {
    const fetchCinema = async () => {
      const { data } = await axios.get(
        `https://backend-boo.herokuapp.com/api/movies/findMovieStep1/${idMovie}`
      );
      await setCinema(data);
    };
    fetchCinema();
  }, [idMovie]);
  console.log(cinema);
  console.log(idcinema);

  // call api Date
  useEffect(() => {
    const fetchDate = async () => {
      const { data } = await axios.get(
        `https://backend-boo.herokuapp.com/api/movies/findMovieStep2/${idMovie}/${idcinema}`
      );
      await setDate(data);
    };
    fetchDate();
  }, []);
  console.log(date);
  console.log(iddate);
  // call api Session
  useEffect(() => {
    const fetchSesscion = async () => {
      const { data } = await axios.get();
      await setSesscion(data);
    };
    fetchSesscion();
  }, []);
  console.log(sesscion);
  console.log(idsesscion);
  // call api Seat
  useEffect(() => {
    const fetchSeat = async () => {
      const { data } = await axios.get();
      await setSeat(data);
    };
    fetchSeat();
  }, []);

  const handleBooking = () => {};
  return (
    <div>
      <div className="selectMovie">
        <div className="col-1">
          <div className="col-1-text">
            <br /> Cinema:
            <br /> Date:
            <br /> Session:
          </div>
          <div>
            <br />
            <select id="cinema" onChange={(e) => setIdCinema(e.target.value)}>
              <option value="">-- Select Cinema --</option>
              {cinema?.map((items, index) => (
                <option key={index} value={items._id}>
                  {items.name}
                </option>
              ))}
            </select>
            <br />
            <select id="date" onChange={(e) => setIdDate(e.target.value)}>
              <option value="">-- Select Date --</option>
              {date?.map((items, index) => (
                <option key={index} value={items}>
                  {items}
                </option>
              ))}
            </select>
            <br />
            <select id="time" onChange={(e) => setIdSession(e.target.value)}>
              <option value="">-- Select Session --</option>
              {sesscion?.map((items, index) => (
                <option key={index} value={items}>
                  {items}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-2">
          <div className="flex">
            <div className="available">
              <div className="seat"></div> &nbsp;Avaliable
            </div>
            <div className="selected">
              <div className="seat"></div> &nbsp;Selected
            </div>
            <div className="occupied">
              <div className="seat"></div> &nbsp;Occupied
            </div>
          </div>
          <div className="screen"></div>
          <div className="seat-parent">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
        </div>
        <div className="col-3">
          You selected <span id="count">0</span> seats <br />
          Price ticket: $ <br />
          <button className="btPay" onClick={() => setPayment(!payment)}>
            <i className="fa-solid fa-angles-right"></i> Buy Ticket
          </button>
          {payment && (
            <div className="optionpay">
              <div>Select Payment Method</div>
              <button>
                <i className="fa-regular fa-hand-point-right"></i> At checkout
                counters
              </button>
              <br />
              <button onClick={() => setOpenModal(true)}>
                <i className="fa-regular fa-hand-point-right"></i> With PayPal
              </button>
            </div>
          )}
          {openModal && (
            <div className="modal-booking">
              <div className="modal-booking-form">
                <div>
                  <button className="btnX" onClick={() => setOpenModal(false)}>
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className="container">
                  <div className="title"> Booking Form</div>
                  <div className="content">
                    <div className="row">
                      <div className="coll">Movie:</div>
                      <div className="colr">{nameMovie}</div>
                    </div>
                    <div className="row">
                      <div className="coll">Cinema:</div>
                      <div className="colr">Fixgo quận 1</div>
                    </div>
                    <div className="row">
                      <div className="coll">Date:</div>
                      <div className="colr">1/1/2022</div>
                    </div>
                    <div className="row">
                      <div className="coll">Session:</div>
                      <div className="colr">9:30</div>
                    </div>
                    <div className="row">
                      <div className="coll">Seat:</div>
                      <div className="colr">10,11,12</div>
                    </div>
                    <div className="row">
                      <div className="coll">Price:</div>
                      <div className="colr">10$</div>
                    </div>
                  </div>
                  <form action="" onSubmit={handleBooking}>
                    <button className="button">Booking</button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
