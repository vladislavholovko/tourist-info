import React from 'react';

function AnswerOption(props) {

    return (
        <li className="answerOption">
            <input
                type="radio"
                className="radioCustomButton"
                name="radioGroup"
                checked={props.answerType === props.answer}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
            />

            <label className="radioCustomLabel" htmlFor={props.answerType}>
                <p > {props.answerContent}</p>
            </label>
        </li>
    );

}

AnswerOption.propTypes = {
    answerType: React.PropTypes.string.isRequired,
    answerContent: React.PropTypes.string.isRequired,
    answer: React.PropTypes.string.isRequired,
    onAnswerSelected: React.PropTypes.func.isRequired
};

export default AnswerOption;