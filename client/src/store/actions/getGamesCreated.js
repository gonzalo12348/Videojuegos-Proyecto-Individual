import { GET_GAMES_CREATED_URL } from "../../constantes";

//action
export const GET_GAMES_CREATED = 'GET_GAMES_CREATED'

export function getGamesCreated(){
    return async function(dispatch) {
        return await fetch(GET_GAMES_CREATED_URL).then(data => data.json())
            .then(data => {
                dispatch({
                    type: GET_GAMES_CREATED,
                    payload: data
                })
            })
    }
}