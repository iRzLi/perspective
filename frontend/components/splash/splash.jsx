import React from 'react';
import Buffer from '../buffer/buffer';

class Splash extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fetched: false,
            email: "",
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnChange(field) {
        return e => {
            if (e.target.checked){
                let res = this.state.responses;
                let temp = {...res};
                temp[field] = parseInt(e.target.value)
                this.setState({ responses: temp });
            }
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createUser(this.state).then(()=>{
            let ids = {}
            Object.keys(this.props.questions).forEach(currId => {
                ids[currId] = null;
            })
            this.setState({ email:"", responses: ids }, ()=>{
                this.props.history.push("/results");
            })
        })
    }

    componentDidMount(){
        this.props.requestQuestions().then(
            (res)=> {
                let ids = {}
                Object.keys(res.res.questions).forEach(currId => {
                    ids[currId] = null;
                })
                this.setState({ fetched: true, responses: ids })
            }
        );
    }

    render(){
        let questionsElements = null;
        // if questions are loaded
        if (this.state.fetched){
            // Builds question and choices html
            questionsElements = Object.values(this.props.questions).map((currEle, index)=>{
                let curr_res = this.state.responses[currEle.id];
                return (
                    <div key={currEle.id} className="border-no-bottom">
                        <div className="question-label">
                            <label>{currEle.question}</label>
                        </div>
                        <div className="question-radio">
                            <span className="disagree">Disagree</span>
                            <input type="radio" name={currEle.id} value="1" checked={curr_res === 1} onChange={this.handleOnChange(currEle.id)} required/>
                            <input type="radio" name={currEle.id} value="2" checked={curr_res === 2} onChange={this.handleOnChange(currEle.id)} />
                            <input type="radio" name={currEle.id} value="3" checked={curr_res === 3} onChange={this.handleOnChange(currEle.id)} />
                            <input type="radio" name={currEle.id} value="4" checked={curr_res === 4} onChange={this.handleOnChange(currEle.id)} />
                            <input type="radio" name={currEle.id} value="5" checked={curr_res === 5} onChange={this.handleOnChange(currEle.id)} />
                            <input type="radio" name={currEle.id} value="6" checked={curr_res === 6} onChange={this.handleOnChange(currEle.id)} />
                            <input type="radio" name={currEle.id} value="7" checked={curr_res === 7} onChange={this.handleOnChange(currEle.id)} />
                            <span className="agree">Agree</span>
                        </div>
                    </div>
                )
            })
        }
        

        // Asking if questions are loaded in to the store yet
        if(this.state.fetched===false){
            return (
                <Buffer />
            )
        }else {
            let errMsg = null;
            if (this.props.user_error.length>0){
                errMsg = <div className="disagree">{this.props.user_error[0]}</div>
            }

            return (
                <div className="center-container">
                    <div className="splash-header">
                        <div className="title">Discover Your Perspective</div>
                        <div>Complete the 7min test and get a detailed report of your lenses on the world</div>
                    </div>
                    <form onSubmit={this.handleSubmit} className="form-container">
                        {questionsElements}
                        <div className="border">
                            <div className="question-label">
                                <label>Your Email</label>
                            </div>
                            {errMsg}
                            <div className="question-input">
                                <input type="email" placeholder="you@example.com" value={this.state.email} required onChange={(e)=>{this.setState({email: e.target.value})}}/>
                            </div>
                        </div>
                        <div>
                            <input className="form-submit" type="submit" value="Save & Continue" />
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default Splash;