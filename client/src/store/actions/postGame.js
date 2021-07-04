import axios from 'axios'
import { POST_GAME_URL } from '../../constantes'

export const POST_GAME = 'POST_GAME'

export function postGame(game) {
    return function(dispatch){
        axios({
            url: POST_GAME_URL,
            method:'POST',
            data: game 
        })
        .then(() => {
            return dispatch({
                type:POST_GAME,
                payload: game
            })
        })
    }
}