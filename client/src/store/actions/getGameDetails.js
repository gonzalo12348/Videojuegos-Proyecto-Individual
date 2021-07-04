import { GET_GAME_DETAILS_URL } from "../../constantes";

export const GAME_DETAILS = 'GAME_DETAILS';

export function gameDetails(id){
    return function(dispatch) {
        return fetch(GET_GAME_DETAILS_URL + id).then(data => data.json())
            .then(data => {
                dispatch({
                    type: GAME_DETAILS,
                    payload: data 
                })
            })
    }
}