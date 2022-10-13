import React, { useState, useEffect } from "react";
import "../sass/components/listMovie.scss";
import StarRating from "./subcomponents/StarRating";
import { Link } from "react-router-dom";

const ListMovie = ({ list }) => {
  const listMovie = list;
  console.log(listMovie);
  // số lượng item sẽ show ra
  const [quantityShow, setQuantityShow] = useState(5);
  // số lượng item còn lại
  const [totalQuantity, setTotalQuantity] = useState(listMovie.length - 5);

  useEffect(() => {
    setQuantityShow(5);
    setTotalQuantity(listMovie.length - 5);
  }, [listMovie]);
  const handleShowViewMore = (e) => {
    setQuantityShow((prev) => prev + 5);
    setTotalQuantity((prev) => prev - 5);
  };

  return (
    <div>
      <div className="listMovie">
        {listMovie?.slice(0, quantityShow).map((item) => (
          <Link to="/MovieDetail" style={{ textDecoration: "none" }}>
            <div className="itemMovie" key={item.id}>
              <StarRating rating={item.rate} />
              <img src={item.image} alt="" />
              <div className="name">{item.name}</div>
              <div className="genre-rate">
                Genre: {item.genre} <br />
                Rate: {item.rate}/10
              </div>
              <div className="btn_buy">BUY TICKET</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="button_xemthem">
        {totalQuantity <= 0 ? (
          ""
        ) : (
          <button onClick={handleShowViewMore}>
            View add {totalQuantity} movie &nbsp;
            <i class="fa-solid fa-caret-down"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default ListMovie;
