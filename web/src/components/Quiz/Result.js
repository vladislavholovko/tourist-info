import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {

    return (
        <ReactCSSTransitionGroup
            className="container result"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <div>
                You prefer <p>{props.quizResult.data.categories[0]}</p>
                <img src={props.quizResult.data.thumbnail_url} />
                <p>{props.quizResult.data.name_suffix}</p>
                <p>{props.quizResult.data.name}</p>
                <p>{props.quizResult.data.perex}</p>
                <p>{props.quizResult.data.rating}</p>


            </div>
        </ReactCSSTransitionGroup>
    );

}

Result.propTypes = {
    quizResult: React.PropTypes.any,
};

export default Result;