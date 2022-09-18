import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { setReducer } from "../store/actions/favourite";

export default function Favourite() {
  const fav = useSelector((state) => state.favourite.currentMovie);
  const dispatch = useDispatch();

  const removeFavourite = (mov) => {
    dispatch(setReducer(mov));
  };

  return (
    <>
   <div className="row">
        {fav.map((mov,index ) => {
          console.log(mov[index]);
          const baseURL =  `https://image.tmdb.org/t/p/original/${mov[index].poster_path}`;
          return (
            <Card style={{ width: "18rem" }} key={index}  >
                <i
                className="fa fa-solid fa-heart"
                onClick={() => {
                  removeFavourite(mov);
                }}
                style={{ color: "red" }}
              ></i>
                <Card.Body>
                <Card.Img src={baseURL} />
            <Card.Title>  {mov[index].title}</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
            {mov[index].overview}
            </Card.Subtitle>
            <Card.Title>
            {mov[index].tagline}
         
           </Card.Title>
          </Card.Body>
            </Card>
          );
        })}
    </div>
    </>
  );
}
