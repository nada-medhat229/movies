import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setFavourite, setReducer } from "../../store/actions/favourite";
const CardMovies = (props) => {
  // const Favcomp = props.favcomp;

  const dispatch = useDispatch();
  const addFavMovie = () => {
    dispatch(setFavourite(props.movie));
  };
  const removeFavourite = (moviesData) => {
    dispatch(setReducer(moviesData));
  };
  return (
    <>
      {props.movie.map((movie, index) => (
        <Card
          style={{ width: "18rem" }}
          key={index}
          className="me-3"
          onClick={addFavMovie}
        >
          <Card.Title>
            <i className="fa fa-solid fa-heart" onClick={addFavMovie}></i>
            <i
              className="fa-solid fa-xmark"
              onClick={() => {
                removeFavourite(props.movie);
              }}
            ></i>
          </Card.Title>

          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
          />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
              {movie.vote_average}
            </Card.Subtitle>

            <Link to={`/homePage/${movie.id}`} className="btn btn-primary">
              Details
            </Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default CardMovies;
