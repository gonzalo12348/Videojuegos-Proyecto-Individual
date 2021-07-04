import {GET_GAMES_FOUNDED_URL} from '../../constantes'

//action
export const GAME_FOUNDED = 'GAME_FOUNDED'

export function gameFounded(nameGame){
    return function(dispatch) {
        return fetch(GET_GAMES_FOUNDED_URL + nameGame).then(response => response.json())
                    .then((response) => {
                        dispatch({
                            type: GAME_FOUNDED,
                            payload: response
                        })
                    })
    }
}