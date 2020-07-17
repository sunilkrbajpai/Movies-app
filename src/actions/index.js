//action types
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_Favorites='ADD_Favorites';
export const REM_favorites='REMOVE_FAVORITES'
export const Set_show_favorites='Set_show_favorites'


//action creators
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
}


//action creators
export function addFavorites(movie){
    return{
        type:ADD_Favorites,
        movie
    }
}

export function removeFavorites(movie)
{
    return{
        type:REM_favorites,
        movie
    }
}
export function setShowFavorites(val)
{
    return{
        type:Set_show_favorites,
        val
    }
}

