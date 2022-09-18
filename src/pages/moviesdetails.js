import axios from "axios";
import "../App.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Moviesdetails = () => {
  const [moviesdetails, setmoviesdetails] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=9e0a106a939d354dbe70519e006672bd`

      )
      .then((res) => setmoviesdetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="card mb-3">
        <div className="row ">
          <div className="col-md-4">
            <img
              className="img-fluid rounded-start"
              src={`https://image.tmdb.org/t/p/original/${moviesdetails.poster_path}`}
              alt={moviesdetails.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{moviesdetails.title}</h5>
              <p className="card-text">
                <small className="text-muted">{moviesdetails.popularity}</small>
              </p>
              <p className="card-text">{moviesdetails.overview}</p>
              <p className="card-text">{moviesdetails.original_language}</p>
              <p className="card-text">
                <small className="text-muted">{moviesdetails.vote_count}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moviesdetails;
