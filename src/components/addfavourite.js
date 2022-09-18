import React, { useState } from 'react';

const Addfavourite = (props) => {
    console.log(props);
    const [favourite, setfavourite] = useState([]);
    const addfavourite = (movie) => {
          const newlistmovie = [...favourite, movie];
          setfavourite(newlistmovie);
        };
     
    return (
        <>
     
            <div onClick={()=>addfavourite(props)} >
                           <i className="fa fa-solid fa-heart"></i>

        </div>
   
       </>
    );
}

export default Addfavourite;
