import React from 'react';
const Results = (props) => {
    if (Boolean(props.user.id) === false) {
        props.history.push("/");
        return null;
    } else {
        let perspective = {
            EI: {
                left: "I",
                meaning: ["E", "I"],
                default: "Extraversion (E)",
                other: "Introversion (I)",
                value: 0,
            },
            SN: {
                left: "S",
                meaning: ["S", "N"],
                default: "Sensing (S)",
                other: "Intuition (N)",
                value: 0,
            },
            TF: {
                left: "T",
                meaning: ["T", "F"],
                default: "Thinking (T)",
                other: "Feeling (F)",
                value: 0,
            },
            JP: {
                left: "J",
                meaning: ["J", "P"],
                default: "Judging (J)",
                other: "Perceiving (P)",
                value: 0,
            }
        }
        Object.values(props.responses).forEach(element => {
            let question = props.questions[element.question_id]
            perspective[question.dimension].value += ((element.response - 4) * question.direction)
        });

        let type = "";
        let chart = null;
        let leftSide = <div className="graph-div graph-left"><span className="colored"></span></div>;
        let rightSide = <div className="graph-div graph-right"><span className="colored"></span></div>;
        Object.values(perspective).forEach(element => {
            if (chart === null) {
                chart = [];
            }

            // If the accum value is <= 0 they are in the default direction
            if (element.value <= 0) {
                type += element.meaning[0];
                // If type === E AND
                // If element.meaning[0] (E) === left (I)
                // LEFT SIDE FILL
                if (element.meaning[0] === element.left) {
                    chart.push(<div className="perspective-chart-row" key={element.default}>
                        <div>{element.default} </div>
                        <div>{leftSide}</div>
                        <div>{element.other}</div>
                    </div>)
                }
                // If type === E AND
                // If element.meaning[0] (E) !== left (I)
                // RIGHT SIDE FILL
                else {
                    chart.push(<div className="perspective-chart-row" key={element.default}>
                        <div>{element.other}</div>  
                        <div>{rightSide}</div>  
                        <div>{element.default} </div>
                    </div>)
                }
            } 
            // If the accum value is > 0 they are in the other direction
            else {
                type += element.meaning[1];
                // If type === I AND
                // If element.meaning[0] (E) === left (I)
                // RIGHT SIDE FILL
                if (element.meaning[0] === element.left) {
                    chart.push(<div className="perspective-chart-row" key={element.default}>
                        <div>{element.default} </div> 
                        <div>{rightSide}</div>  
                        <div>{element.other}</div> 
                    </div>)
                } 
                // If type === I AND
                // If element.meaning[0] (E) !== left (I)
                // LEFT SIDE FILL
                else {
                    chart.push(<div className="perspective-chart-row" key={element.default}>
                        <div>{element.other}</div>  
                        <div>{leftSide}</div>  
                        <div>{element.default} </div>
                    </div>)
                }
            }
        });

        return (
            <div className="center-container">
                <div className="border result-container">
                    <div className="perspective-text">
                        <div className="title yours">Your Perspective</div>
                        <div className="text-two">Your Perspective Type is {type}</div>
                    </div>
                    <div className="perspective-chart">
                        {chart}
                    </div>
                </div>
            </div>
        )
    }
}
export default Results;