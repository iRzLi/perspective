import { combineReducers } from 'redux';
import QuestionsReducer from './questions_reducer';
import UsersReducer from './users_reducer';
import ResponsesReducer from './responses_reducer';


const EntitiesReducer = combineReducers({
    questions: QuestionsReducer,
    responses: ResponsesReducer,
    user: UsersReducer,
});

export default EntitiesReducer;