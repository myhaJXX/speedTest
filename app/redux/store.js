import { defaultState } from "./features/state";

const { createStore } = require("redux");

const reducer = (state = defaultState, action)=>{
    switch (action.type){
        case "changeColors": return {...state, colorsStore: action.payload}; //change color-theme
        case "changeFilters": return {...state, filtersStore: action.payload}; //change filters for text
        case "changeLetter": return {...state, gameItems: action.payload}; //change info about active letter
        case "changeWindow": return {...state, changeWindow: action.payload}; //open/close theme-window
        case "changeGameStats": return {...state, gameStats: action.payload}; //change stats of last game
        case "refreshText": return {...state, refreshText: action.payload}; //refresh text
        default: return state;
    }
  }
export const store = createStore(reducer)