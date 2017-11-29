import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Jumbotron, Button, Row, Col, Grid} from 'react-bootstrap';


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
            <div><h3>Your category of turism: {props.quizResult.data.categories[0]} </h3></div>
            <Jumbotron>
                <Row>
                    <Col lg={9} sm={12}>
                        <h2>{props.quizResult.data.name_suffix}</h2>
                        <h3>{props.quizResult.data.name}</h3>
                        <p>{props.quizResult.data.perex}</p>
                    </Col>
                    <Col lg={3} sm={12} className="photo-column">
                        <div className="photo">
                            <img src={props.quizResult.data.thumbnail_url} />
                        </div>
                    </Col>
                </Row>
                <h4>Rating: {props.quizResult.data.rating}</h4>
                <p><Button bsStyle="primary">See more tours in this category...</Button></p>
            </Jumbotron>

            <div>
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