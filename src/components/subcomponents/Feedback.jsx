import React, { useState } from "react";
import "../../sass/components/subcomponents/feedback.scss";
import { FaStar } from "react-icons/fa";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Feedback = () => {
  const [openModal, setOpenModal] = useState(false);

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(10).fill(0);

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
    <div className="feedback">
      <div>Total: 100 feedback</div>
      <button onClick={() => setOpenModal(true)}>Review</button>
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
              />

              <button className="button">Post</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
