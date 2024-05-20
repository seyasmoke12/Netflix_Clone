import React, { useState, useEffect } from 'react';
import './row.css';
import axios from '../../../utils/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({ title, fetchurl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerurl, setTrailerurl] = useState("");

  const base_Url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchurl);
        const request = await axios.get(fetchurl);
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchurl]);

  const handleClick = (movie) => {
    if (trailerurl) {
      setTrailerurl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailerurl(urlParams.get("v"));
        })
        .catch((error) => console.log("Error finding trailer", error));
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <h1 className="topic">{title}</h1>
      <div className="row">
        <div className="row_posters">
          {movies?.map((movie, index) => (
            <img
              onClick={() => handleClick(movie)}
              key={index}
              src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
              className={`row_poster ${isLargeRow && "row_poster_Larger"}`}
            />
          ))}
        </div>
        
      </div>
      <div style={{ padding: '40px' }}>
          {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
        </div>
    </>
  );
};

export default Row;


    