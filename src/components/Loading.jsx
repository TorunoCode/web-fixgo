import React from "react";
import ReactLoading from "react-loading";
import "../sass/components/loading.scss";
const Loading = () => {
  return (
    <div className="parent">
      <div className="loading">
        <ReactLoading
          type="spinningBubbles"
          color="gray"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Loading;
