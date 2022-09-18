

//   export const addToFavourite = (movie)=>
// {
//     return{
//         type: "ADD_FVOURITE",
//         payload:{movie}
//     }
// }

// export const removeFavourite = (id) => ({
//     type: "REMOVE_FAVOURITE",
//     payload: {
//         id,
//     },
//   });
  
export const setFavourite =(payload)=>{
    return {
        type:"SET_FAVOURITE",
        payload
    }
}

export const setReducer = (payload) =>{
    return {
        type:"SET_REDUCE",
        payload
    }
}

export const setCounter = (payload) =>{
    return {
        type:"SET_COUNTER",
        payload
    }
}