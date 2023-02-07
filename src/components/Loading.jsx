import React from "react";
import ReactLoading from "react-loading";
import "../sass/components/loading.scss";
const Loading = () => {
  return (
    <div className="parent">
      <div className="loading">
        <ReactLoading
          type="spinningBubbles"
          color="orange"
          height={150}
          width={150}
        />
      </div>
    </div>
  );
};

export default Loading;
