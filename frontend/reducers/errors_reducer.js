import { combineReducers } from 'redux';

import UserErrorsReducer from './user_errors_reducer';

const ErrorsReducer = combineReducers({
    user: UserErrorsReducer,
});

export default ErrorsReducer;