import { RECEIVE_QUESTIONS } from '../actions/question_actions';

const QuestionsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return action.res.questions;
        default:
            return oldState;
    }
};

export default QuestionsReducer;