import React from "react";

import "./TrendingGiphy.css";

type TrendingGiphyProps = {
  giphy: {
    images: {
      downsized: {
        url: string;
      };
    };
    id: number;
    title?: string;
  };
};

const TrendingGiphy = ({ giphy }: TrendingGiphyProps) => {
  return (
    <div className="trending-giphy" key={giphy.id}>
      <img src={giphy.images.downsized.url} alt={giphy.title} />
    </div>
  );
};

export default TrendingGiphy;
