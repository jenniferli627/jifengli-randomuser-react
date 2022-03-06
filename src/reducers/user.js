import { user_FETCHED } from "../UserAction";

const initialState = null;

export default function (state = initialState, action = {}){
    switch (action.type) {
        case user_FETCHED:
          return action.payload
        default:
          return state
      }
}