import React from 'react';
import ReactPlayer from 'react-player';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=Nia_I4n3nGA" // Replace with your actual video ID or URL
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{
          position: 'fixed', // Keep video fixed to background
          top: 0,
          left: 0,
          zIndex: -1, // Place it behind content
          objectFit: 'cover', // Ensure it covers the entire screen
          animation: 'zoomInOut 20s ease-in-out infinite, blurEffect 15s linear infinite, rotateBackground 30s linear infinite',
        }}
      />
      <div className="overlay" />
      {/* Content with animations */}
      <div className="content">
        <h1 className="content-title">Welcome to My Portfolio</h1>
        <p className="content-description">Explore my projects, skills, and more.</p>
      </div>
    </div>
  );
};

export default BackgroundVideo;





