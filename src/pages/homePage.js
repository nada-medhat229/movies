import axios from "axios";
import { useEffect, useState } from "react";
import CardMovies from "../components/header/cardMovies";

const Homepage = () => {
  const [movies, setmovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?page=${pageNum}&api_key=9e0a106a939d354dbe70519e006672bd`
      )
      .then((res) => {
        setmovies(res.data.results);
      })

      .catch((err) => console.log(err));
  }, [pageNum]);
  
  return (
    <>
      <div className="row">
        <CardMovies
          movie={movies}
        />
      </div>
      <ul className="pagination">
        <li className="page-item">
          <button
            onClick={() => {
              pageNum > 2 ? setPageNum(pageNum - 1) : setPageNum(1);
            }}
            className="page-link"
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          <button
            onClick={() => {
              setPageNum(pageNum + 1);
            }}
            className="page-link"
          >
            Next
          </button>
        </li>
      </ul>
     
    </>
  );
};

export default Homepage;
