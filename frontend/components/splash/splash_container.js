import { connect } from 'react-redux';
import Splash from './splash';
import { withRouter } from 'react-router-dom';
import { createUser } from '../../actions/user_actions';
import { requestQuestions } from '../../actions/question_actions';

const msp = state => {
    return {
        questions: state.entities.questions,
        user_error: state.errors.user,
    };
};

const mdp = dispatch => {
    return {
        createUser: (UserResForm) => dispatch(createUser(UserResForm)),
        requestQuestions: () => dispatch(requestQuestions()),
    };
};


export default withRouter(connect(msp, mdp)(Splash));