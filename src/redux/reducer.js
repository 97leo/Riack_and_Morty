import {ADD_FAV,REMOVE_FAV,FILTER, ORDER} from './actions-type';

const inicialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = inicialState, {type,payload}) =>{
    switch(type) {
        case ADD_FAV:
            return {
                ... state,
               myFavorites: [... state.allCharacters, payload],
               allCharacters: [... state.allCharacters, payload]
            }
        case REMOVE_FAV:
            let filterCharacter = state.myFavorites.filter(fav => fav.id !== Number(payload))
            return {
                ... state,
                myFavorites: filterCharacter
            }
        case FILTER:
           const filterAllCharacters = state.allCharacters.filter(character => character.genero === payload);
            return {
                ... state,
                myFavorites: filterAllCharacters
            }
            case ORDER:
            const allCharactersCopy = [...state.allCharacters];
            return {
                ... state,
                myFavorites: 
              payload === 'A'
              ? allCharactersCopy.sort((a,b)=> a.id - b.id)
              : allCharactersCopy.sort((b,a)=> b.id - a.id)
            }
            default:
            return {
                ... state
            }
    }
}
export default reducer