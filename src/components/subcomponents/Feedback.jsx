import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postFeedbackSlice";
import { useSelector } from "react-redux";
import "../../sass/components/subcomponents/feedback.scss";
import { FaStar } from "react-icons/fa";
import StarRating from "./StarRating";
// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Feedback = () => {
  const post = useSelector((state) => state.postFeedback.postFeedbacks);
  const user = useSelector((state) => state.auth.login?.currentUser);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const [content, setContent] = useState();
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(10).fill(0);
  const handleBtnReview = () => {
    if (user) {
      setOpenModal(true);
    } else {
      toast.warning("Please login !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handlePost = () => {
    setOpenModal(false);
    const newPost = {
      nameuser: user.data.name,
      urlAvatar: "xxxx",
      createTime: null,
      rate: currentValue,
      content_feedback: content,
    };
    dispatch(createPost(newPost));
  };
  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="container_fb_cm">
      <section className="feedback">
        <div className="title_name">Feedback</div>
        <div className="total_rate">
          <b>Total:</b> 100 feedback
          <div className="rate">
            <StarRating rating={5.6} />
            &ensp;
            <div className="rating">5.6/10</div>
          </div>
          <div className="line_gray"></div>
        </div>

        {post.map((item, index) => {
          return (
            <div className="item_postFeedback" key={index}>
              <div className="row_1">
                <img
                  src={
                    user.data.avatar ||
                    "https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.15752-9/306560976_1478177569326420_2543756426164044655_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-2G1HRY79g8AX9gnj1V&_nc_ht=scontent.fsgn13-4.fna&oh=03_AVJJPT5lOcfprQA8dsepUNA9iTQNfyq65lt2uhFwlDfRkg&oe=6353AE03"
                  }
                  alt=""
                  className="avt_user"
                ></img>
                &ensp;
                <div className="name_user">{item.nameuser}</div>
              </div>
              <div className="rate">
                <b>Rate:</b> {item.rate}/10
              </div>
              <div className="content_feedback">{item.content_feedback}</div>
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
                <div className="content">Movie: CONTORTED </div>
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
