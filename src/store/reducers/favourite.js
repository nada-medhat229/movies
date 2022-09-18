
// const INITIAL_STATE = {
// favourite:["ex"]
// };

// export function favouriteReducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case 'ADD_FAVOURITE':
//       return {
//         ...state,
//         favourite: [...state.favourite,action.payload],
//       };
//       case 'REMOVE_FAVOURITE':
//         return{
//          ...state,
//          favourite:state.favourite.filter((movie)=> movie.id !== action.payload)
//         }

//      default :
//          return  state ;
   
//   }
// }

const INITIAL_STATE={
    counter:0,
    currentMovie:[]
}


export function favouriteReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case "SET_FAVOURITE":
            return {
                ...state,
                currentMovie: [...state.currentMovie, action.payload],
            }
            case "SET_REDUCE":
                let index = state.currentMovie.findIndex((movie)=>movie.id === action.payload.id)
                state.currentMovie.splice(index, 1)
                console.log(index)
                return {
                    ...state,
                    currentMovie: [...state.currentMovie],
                    counter: state.currentMovie.length

                }
        case "SET_COUNTER":
            return{
                ...state,
                counter:action.payload
            }
            default:
            return state
    }
}