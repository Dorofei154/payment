
import { combineReducers } from 'redux';
import {ACTIONS} from '../../constants/actions'


const reducerCurrentUser = (state = null, action) => {
    switch (action.type) {
        case ACTIONS.SET_CURRENT_USER:
            return action.value;
        default:
            return state;
    }
}

export const rootReducer = combineReducers(
    {currentUser: reducerCurrentUser,}
)