import axios from 'axios'
import { POST_GAMES_NEXT_URL } from '../../constantes';
import { GET_15GAMES_NEXT } from "./getGamesActions";

export function postGamesNextt(numero) {
    return function(dispatch) {
        axios({
            url: POST_GAMES_NEXT_URL,
            method: 'POST',
            data: numero
        })
        .then(data =>{
            return dispatch({
                type:GET_15GAMES_NEXT,
                payload: data
            })
        })
    }
}