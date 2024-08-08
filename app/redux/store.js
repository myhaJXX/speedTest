import { defaultState } from "./features/state";

const { createStore } = require("redux");

const reducer = (state = defaultState, action)=>{
    switch (action.type){
        case "changeColors": return {...state, colorsStore: action.payload};
        case "changeFilters": return {...state, filtersStore: action.payload};
        default: return state;
    }
  }
export const store = createStore(reducer)