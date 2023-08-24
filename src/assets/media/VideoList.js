import React from "react";

const VideoList = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/LO-3WXhs3rg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tLG_sGlYXeE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/6AIK-vOTj58"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/46BSHOx32TY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoList;
