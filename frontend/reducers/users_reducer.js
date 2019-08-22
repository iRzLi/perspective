import { RECEIVE_USER } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            return action.res.user;
        default:
            return oldState;
    }
};

export default UsersReducer;