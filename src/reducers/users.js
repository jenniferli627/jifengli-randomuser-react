import { users_FETCHED } from "../UserAction";

const initialState = null;

export default function (state = initialState, action = {}){
    switch (action.type) {
        case users_FETCHED:
          return action.payload
        default:
          return state
      }
}