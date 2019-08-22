import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUser = (res) => {
    return {
        type: RECEIVE_USER,
        res,
    };
};

export const requestUser = (id) => dispatch => {
    return UserApiUtil.requestUser(id).then(
        (res) => dispatch(receiveUser(res))
    );
};

export const createUser = (UserResForm) => dispatch => {
    return UserApiUtil.createtUser(UserResForm).then(
        (res) => dispatch(receiveUser(res)),
        (err) => dispatch(receiveUserErrors(err.responseJSON))
    );
};

export const receiveUserErrors = err => {
    return {
        type: RECEIVE_USER_ERRORS,
        errors: err,
    };
};