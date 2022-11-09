import React, { useState, useEffect, useMemo } from "react";
import AvtDefault from "../../assets/images/avt_user_default.png";
// import { useDispatch } from "react-redux";
// import { createPostFeedback } from "../../redux/postFeedbackSlice";
import { format } from "timeago.js";
import { useSelector } from "react-redux";
import "../../sass/components/subcomponents/feedback.scss";
import { FaStar } from "react-icons/fa";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Feedback = ({ idMovie, rate, nameMovie }) => {
  // const post = useSelector((state) => state.postFeedback.postFeedbacks);
  const user = useSelector((state) => state.auth.login?.currentUser);
  const [openModal, setOpenModal] = useState(false);
  // const dispatch = useDispatch();
  const [content, setContent] = useState();
  const [currentValue, setCurrentValue] = useState(0);

  const [hoverValue, setHoverValue] = useState(undefined);
  const [listFeedback, setListFeedback] = useState([]);

  const stars = Array(10).fill(0);
  const handleBtnReview = () => {
    if (user) {
      setOpenModal(true);
    } else {
      toast.warning("Please login !");
    }
  };

  // post feedback
  const handlePost = async () => {
    setOpenModal(false);
    const newPost = {
      movieId: idMovie,
      detail: content,
      userId: user.data._id,
      rate: currentValue,
      title: "Title",
    };
    // tạo view feedback giả chứ thật ra render lại mới get lại listfeedback
    // dispatch(createPostFeedback(newPost));
    try {
      await axios.post(
        `https://backend-boo.herokuapp.com/api/commentsFeedback/add_feedback`,
        newPost
      );
      toast.success("Add feedback success !", { autoClose: 2000 });
    } catch (err) {
      toast.error("Failed to add feedback!", { autoClose: 2000 });
    }
    await fetchFeedbacks();
  };
  /// get feedback
  useEffect(() => {
    fetchFeedbacks();
  }, [idMovie]);

  const fetchFeedbacks = async () => {
    try {
      const { data } = await axios.get(
        `https://backend-boo.herokuapp.com/api/commentsFeedback/feedbacks/${idMovie}/0`
      );
      setListFeedback(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(listFeedback);
  // stars
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  ///
  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  ////////
  return (
    <div className="container_fb_cm">
      <section className="feedback">
        <div className="title_name">Feedback</div>
        <div className="total_rate">
          <b>Total:</b> {listFeedback ? listFeedback?.length - 1 : <>0</>}{" "}
          feedback
          <div className="rate">
            <StarRating rating={rate} />
            &ensp;
            <div className="rating">{rate}/10</div>
          </div>
          <div className="line_gray"></div>
        </div>
        {listFeedback
          ?.reverse()
          .slice(1)
          .reverse()
          .map((item, index) => {
            return (
              <div className="item_postFeedback" key={index}>
                <Link
                  to="/MyProfile"
                  className="row_1"
                  style={{ textDecoration: "none" }}
                >
                  <div className="col1">
                    <img
                      src={user?.data.avatar || AvtDefault}
                      alt=""
                      className="avt_user"
                    ></img>
                    &ensp;
                    <div className="name_user">{item.userName}</div>
                  </div>
                  <div className="time_col2">
                    {format(item.orgirnCreatedAt)}
                  </div>
                </Link>
                <div className="rate">
                  <b>Rate:</b> {item.rate}/10
                </div>
                <div className="content_feedback">{item.detail}</div>
                <div className="line"></div>
              </div>
            );
          })}

        <button className="btn_review" onClick={handleBtnReview}>
          Add Review
        </button>
        {openModal && (
          <div className="modalx">
            <div className="modalx-form">
              <div>
                <button className="btnX" onClick={() => setOpenModal(false)}>
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="container">
                <div className="title"> Feedback Form</div>
                <div className="content">Movie: {nameMovie}</div>
                <form action="" onSubmit={handlePost}>
                  <div className=" stars">
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={24}
                          onClick={() => handleClick(index + 1)}
                          onMouseOver={() => handleMouseOver(index + 1)}
                          onMouseLeave={handleMouseLeave}
                          color={
                            (hoverValue || currentValue) > index
                              ? colors.orange
                              : colors.grey
                          }
                          style={{
                            marginLeft: 3,
                            marginRight: 3,
                            cursor: "pointer",
                          }}
                        />
                      );
                    })}
                  </div>
                  <textarea
                    placeholder="Write your message here..."
                    className="textarea"
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <button className="button">Post</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="comments">
        <div className="title_name">Commnent</div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Feedback;
