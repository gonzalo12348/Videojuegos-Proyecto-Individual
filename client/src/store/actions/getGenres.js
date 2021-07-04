import { GET_GENRES_URL } from "../../constantes";

//action
export const GET_GENRES = 'GET_GENRES';

export function getGenres() {
    return function(dispatch) {
        return fetch(GET_GENRES_URL).then(data => data.json())
            .then(data =>{
                dispatch({
                    type:GET_GENRES,
                    payload: data
                })
            })
    }
}