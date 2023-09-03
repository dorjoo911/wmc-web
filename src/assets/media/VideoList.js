import React, { useState } from "react";

const VideoList = () => {
  // An array of YouTube video URLs
  const videoUrls = [
    "https://www.youtube.com/embed/LO-3WXhs3rg",
    "https://www.youtube.com/embed/tLG_sGlYXeE",
    "https://www.youtube.com/embed/6AIK-vOTj58",
    "https://www.youtube.com/embed/46BSHOx32TY",
    "https://www.youtube.com/embed/aCjbUz9THeE",
    "https://www.youtube.com/embed/WIvWYYcT5M0",
    "https://www.youtube.com/embed/LO-3WXhs3rg",
    "https://www.youtube.com/embed/tLG_sGlYXeE",
    "https://www.youtube.com/embed/6AIK-vOTj58",
    "https://www.youtube.com/embed/46BSHOx32TY",
    "https://www.youtube.com/embed/LO-3WXhs3rg",
    "https://www.youtube.com/embed/tLG_sGlYXeE",
    "https://www.youtube.com/embed/6AIK-vOTj58",
    "https://www.youtube.com/embed/46BSHOx32TY",
    "https://www.youtube.com/embed/aCjbUz9THeE",
    "https://www.youtube.com/embed/WIvWYYcT5M0",
    // Add more video URLs as needed
  ];

  // Number of videos to display per page
  const videosPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(videoUrls.length / videosPerPage);

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;

  // Function to render videos for the current page
  const renderVideosForPage = () => {
    return videoUrls.slice(startIndex, endIndex).map((url) => (
      <div className="col" key={url}>
        <iframe
          width="100%"
          height="100%"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    ));
  };

  // Function to handle page navigation
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {renderVideosForPage()}
      </div>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
              key={index + 1}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default VideoList;
