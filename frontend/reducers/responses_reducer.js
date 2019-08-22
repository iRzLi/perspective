import { RECEIVE_USER } from '../actions/user_actions';

const ResponsesReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            return action.res.responses;
        default:
            return oldState;
    }
};

export default ResponsesReducer;