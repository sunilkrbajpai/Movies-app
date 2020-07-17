
import {ADD_MOVIES,ADD_Favorites, REM_favorites,Set_show_favorites} from '../actions';

const initialMoviesState={
    list:[],
    favorites:[],
    showFavorites:false
}

export default function movies(state=initialMoviesState,action)
{
//     if(action.type===ADD_MOVIES){
//         return {
//             ...state,
//             list:action.movies
//         };
//     }
//     return state;

switch (action.type){
    case ADD_MOVIES:
        return{
            ...state,
            list:action.movies
        }
    case ADD_Favorites:
        return{
            ...state,
            favorites:[action.movie,...state.favorites]
        }
    case REM_favorites:
        const filteredArray=state.favorites.filter(
            movie=>movie.Title!==action.movie.Title
        );

        return{
            ...state,
            favorites:filteredArray
        }
    case Set_show_favorites:
        return{
            ...state,
            showFavorites:action.val
        }
    default:
        return state;
    }
}
