import api from "./api";

const GIPHY_BASE_URL = "https://api.giphy.com/v1/gifs/";

const DEFAULT_PARAMS = {
  api_key: import.meta.env.VITE_GIPHY_API_KEY,
  limit: 20,
};

export const fetchTrending = () => {
  return api.get("trending", {
    baseURL: GIPHY_BASE_URL,
    params: DEFAULT_PARAMS,
  });
};
