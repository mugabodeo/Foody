import {FETCH_DATA} from '../actions/types'

const initialState = {
  recipes: []
}

function rootReducer(state = initialState, action) {
  if (action.type === FETCH_DATA) {
    console.log(action.payload)
  }
  return state;
};

export default rootReducer;