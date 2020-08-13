import React from 'react';

import './styles.css'

function QuestionDiv(props) {
    return (
        <div className="question-div">
            <span className="question-title">
                {props.title}
            </span>
            <span className="question-name">
                {props.name}
            </span>
            <p>
                {props.children}
            </p>
        </div>
    )
}

export default QuestionDiv;