import React from "react";

const VideoList = () => {
  return (
    <div style={{ height: "100%", overflowY: "scroll" }}>
      <ul style={{ listStyle: "none" }}>
        <li>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tLG_sGlYXeE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </li>
        <li>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/6AIK-vOTj58"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </li>
        <li>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/46BSHOx32TY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </li>
      </ul>
    </div>
  );
};

export default VideoList;
