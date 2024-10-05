// src/components/BackgroundVideo.js
import React from 'react';
import ReactPlayer from 'react-player';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=Tv_bOQACsyk" // Replace with your actual video ID or URL
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} // Ensure the video is behind other content
      />
      <div className="overlay" /> {/* Add overlay here */}
    </div>
  );
};

export default BackgroundVideo;


