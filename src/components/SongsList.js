import React, { useState, useEffect } from "react";

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchSongs = async () => {
      // Fetch songs from your database
      const response = await fetch(`/api/songs?page=${currentPage}`);
      const data = await response.json();
      const newSongs = data.songs;

      // Append new songs to the existing list
      setSongs((prevSongs) => [...prevSongs, ...newSongs]);
    };

    fetchSongs();
  }, [currentPage]);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;

    // When the user scrolls to the bottom of the list, load more songs
    if (scrollTop + clientHeight === scrollHeight) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div
      style={{ height: "500px", overflowY: "scroll" }}
      onScroll={handleScroll}
    >
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <a href={song.url}>{song.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
