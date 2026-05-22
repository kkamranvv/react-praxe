import React, { useState } from "react";

import "./Media.css";

const Media = () => {
  return (
    <div className="media">
      <div className="row">
        <div className="row-header">
          <img src="../../../public/images/trending.svg" alt="trending" />
          <h1>Trending</h1>
        </div>
        <div className="trending-container">Content</div>
      </div>

      <div className="row">
        <div className="row-header">
          <img src="../../../public/images/artists.svg" alt="artists" />
          <h1>Artists</h1>
        </div>
        <div className="artists-container">Content</div>
      </div>

      <div className="row">
        <div className="row-header">
          <img src="../../../public/images/clips.svg" alt="clips" />

          <h1>Clips</h1>
        </div>
        <div className="clips-container">Content</div>
      </div>

      <div className="row">
        <div className="row-header">
          <img src="../../../public/images/stories.svg" alt="stories" />
          <h1>Stories</h1>
        </div>
        <div className="stories-container">Content</div>
      </div>
    </div>
  );
};

export default Media;
