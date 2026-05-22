import React, { useEffect, useState } from "react";

interface GiphyItem {
  id: number;
  title?: string;
  images: {
    downsized: {
      url: string;
    };
  };
}

import "./Media.css";
import { fetchTrending, fetchSearchedGiphys } from "../../api/giphyApi";
import TrendingGiphy from "../TrendingGiphy/TrendingGiphy";
import giphyArtists from "../../artists";

const Media = () => {
  const [trending, setTrending] = useState<GiphyItem[]>([]);
  const [artists, setArtists] = useState<GiphyItem[]>([]);

  const getArtists = async () => {
    const results = await Promise.all(
      giphyArtists.map((giphyArtist) => fetchSearchedGiphys(giphyArtist))
    );
    const gifs = results.flatMap((res) => res.data.data);
    setArtists(gifs);
    console.log(gifs);
  };

  useEffect(() => {
    const load = async () => {
      const res = await fetchTrending();
      setTrending(res.data.data.sort(() => Math.random() - 0.5));
    };
    load();
    getArtists();
  }, []);

  console.log(trending);
  console.log(giphyArtists);

  return (
    <div className="media">
      <div className="row">
        <div className="row-header">
          <img src="../../../public/images/trending.svg" alt="trending" />
          <h1>Trending</h1>
        </div>
        <div className="trending-container">
          {trending.map((giphy) => (
            <div key={giphy.id} className="gif-card">
              <TrendingGiphy giphy={giphy} />
            </div>
          ))}
        </div>
      </div>

      <div className="row">
        <div className="row-header">
          <img src="../../../public/images/artists.svg" alt="artists" />
          <h1>Artists</h1>
        </div>
        <div className="artists-container">
          {artists.map((giphy) => (
            <p key={giphy.id} className="artist-title">{giphy.title}</p>
          ))}
        </div>
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
