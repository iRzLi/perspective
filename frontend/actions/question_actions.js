import * as QuestionApiUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const receiveQuestions = (res) => {
    return {
        type: RECEIVE_QUESTIONS,
        res,
    };
};

export const requestQuestions = () => dispatch => {
    return QuestionApiUtil.requestQuestions().then(
        (res) => dispatch(receiveQuestions(res))
    );
};