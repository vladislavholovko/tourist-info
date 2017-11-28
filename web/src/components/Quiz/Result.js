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

                {
                    props.weather.data ? props.weather.data.list.map((el, i)=>{
                        return(
                            <div key={i}>
                            <p> Date = {el.dt} </p>
                            <p> humidity = {el.humidity} </p>
                            <p> weather = {el.weather[0].description} </p>
                            <p> wind speed = {el.speed} </p>
                            <p> Temp morn = {el.temp.morn}  day = {el.temp.day}  night = {el.temp.night}</p>
                            </div>
                        )
                    }):'weather loading'
                }

            </div>
        </ReactCSSTransitionGroup>
    );

}

Result.propTypes = {
    quizResult: React.PropTypes.any,
    weather: React.PropTypes.any,
};

export default Result;