import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTVhN2Q2ZWUyOGIwZWRlNzEwMjllODA2ZTU3ZmY5MiIsInN1YiI6IjY2NTA4ODYzOGU1MTZmMGI3YWVjNTU1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zrs-a_V-h0jz1VcfyRl69HefPYmeGp8GLfaxviz_0tk",
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day", options);
  return response.data;
};
export const fetchDetailsMovies = async (movieId) => {
  const response = await axios.get(`movie/${movieId}`, options);
  return response.data;
};
export const fetchConfiguration = async () => {
  const response = await axios.get("configuration", options);
  return response.data.images;
};
