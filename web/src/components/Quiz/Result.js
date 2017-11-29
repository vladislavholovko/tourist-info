import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactWeather from 'react-open-weather';
import {Jumbotron, Button, Row, Col, Grid} from 'react-bootstrap';


import 'react-open-weather/lib/css/ReactWeather.css';
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
                <ReactWeather
                    forecast="5days"
                    apikey="96955de8eeb343cdb78190903172911"
                    type="geo"
                    lat={props.quizResult.data.location.lat}
                    lon={props.quizResult.data.location.lng}/>
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


            </div>
        </ReactCSSTransitionGroup>
    );

}

Result.propTypes = {
    quizResult: React.PropTypes.any,
    weather: React.PropTypes.any,
};

export default Result;