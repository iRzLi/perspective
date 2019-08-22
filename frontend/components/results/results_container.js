import { connect } from 'react-redux';
import Results from './results';
import { withRouter } from 'react-router-dom';

const msp = state => {
    return {
        responses: state.entities.responses,
        user: state.entities.user,
        questions: state.entities.questions,
    };
};

// const mdp = dispatch => {
//     return {
//         createUser: (UserResForm) => dispatch(createUser(UserResForm)),
//         requestQuestions: () => dispatch(requestQuestions()),
//     };
// };


export default withRouter(connect(msp, null)(Results));