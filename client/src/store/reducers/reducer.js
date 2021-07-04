import { GET_15GAMES, GET_15GAMES_NEXT} from "../actions/getGamesActions"
import {GAME_FOUNDED} from '../actions/getGameFounded'
import { GAME_DETAILS } from "../actions/getGameDetails"
import { GET_GENRES } from "../actions/getGenres"
import {POST_GAME} from '../actions/postGame'
import { GET_GAMES_CREATED } from "../actions/getGamesCreated"

const initialState = {
    games: [],
    gamesNext: [],
    gameFounded:'',
    gameDetails: [],
    genres: [],
    generofiltrado:[],
    orden:[],
    ascenOdescen: null,
    gameCreado:[],
    gamesCreated:[], //Juego creado extraido en la base de datos
    indicePagina:1
}
const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case GET_15GAMES:
            return {
                ...state,
                games: action.payload
            }
        case GET_15GAMES_NEXT:
            return {
                ...state,
                gamesNext: action.payload.data
            }
        case GAME_FOUNDED :
            return {
                ...state,
                gameFounded: action.payload
            }
        case GAME_DETAILS :
            return {
                ...state,
                gameDetails: action.payload
            }
        case GET_GENRES :
            return {
                ...state,
                genres: action.payload
            }
        case 'GENERO_FILTRADO':
            return {
                ...state,
                generofiltrado: action.payload
            }
        case 'GET_ORDEN':
            return {
                ...state,
                orden: action.payload
            }
        case 'SET_ASCEN_DESCEN':
            return {
                ...state,
                ascenOdescen: action.payload
            }
        case POST_GAME:
            return {
                ...state,
                gameCreado: state.gameCreado.concat(action.payload)
            }
        case GET_GAMES_CREATED:
            return {
                ...state,
                gamesCreated: action.payload
            }
        case 'INDICE_PAGINA':
            return {
                ...state,
                indicePagina: action.payload
            }
        default:
            return {
                ...state
            } 
    }
}

export default reducer;