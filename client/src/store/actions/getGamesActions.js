//import axios from 'axios'
import {GET_15GAMES_URL} from '../../constantes'

export const GET_15GAMES = 'GET_15GAMES';
export const GET_15GAMES_NEXT = 'GET_15GAMES_NEXT';

export function get15games(){
    return function(dispatch) {
        return fetch(GET_15GAMES_URL).then(response => response.json())
                    .then((response) => {
                        dispatch({
                            type: GET_15GAMES,
                            payload: response
                        })
                    })
    }
}
export function get15gamesNext(){
    return function(dispatch) {
        return fetch(GET_15GAMES_URL + '/next').then(response => response.json())
                    .then((response) => {
                        dispatch({
                            type: GET_15GAMES_NEXT,
                            payload: response
                        })
                    })
    }
}