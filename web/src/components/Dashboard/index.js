import React, { Component } from 'react';

import {
  PageHeader,
  Row,
  Col,
  Panel,
  Button,
  FormGroup,
  ControlLabel,
  FormControl } from 'react-bootstrap';
import moment from 'moment';
import update from 'react-addons-update';
import quizQuestions from '../Quiz/quizQuestions';
import Quiz from '../Quiz/Quiz';
import Result from '../Quiz/Result';
import '../Quiz/quiz.css';

import './Dashboard.css'

const appUser = JSON.parse(localStorage.getItem('app_user'));

export default class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            weather:'',
            answersCount: {
                discovering: 0,
                relaxing: 0,
                shopping: 0,
                sightseeing:0,
                traveling:0
            },
            result: ''
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }
    componentWillMount() {
        const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
        this.setState({
            question: quizQuestions[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });
    }

    shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);

        if (this.state.questionId < quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }

    setUserAnswer(answer) {
        const updatedAnswersCount = update(this.state.answersCount, {
            [answer]: {$apply: (currentValue) => currentValue + 1}
        });

        this.setState({
            answersCount: updatedAnswersCount,
            answer: answer
        });
    }

    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer: ''
        });
    }

    getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);

        return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
    }

    setResults(result) {
        this.props.dashboardActions.getTourList({
            'category':result[0],
            'limit':100,
            'ran':'true'

        }).then((resp)=>{
          console.log(resp)
            this.setState({ result: resp })
            this.props.dashboardActions.getWeather({
                'lat':resp.data.location.lat,
                'lng':resp.data.location.lng
            }).then((response)=>{
                this.setState({ weather: response})
                console.log(response)

            })
        });

    }


  handleSubmit(e){
    e.preventDefault();
    let form = e.target;
    this.props.dashboardActions.getLocation(form.location.value)
      .then(response=>{
        let dataObj={
          lat: response.data.lat,
          lng: response.data.lng,
          date: moment()
        }
        this.props.dashboardActions.getWeather(dataObj)
      })
  }
    renderQuiz() {
        return (
            <Quiz
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={quizQuestions.length}
                onAnswerSelected={this.handleAnswerSelected}
            />
        );
    }

    renderResult() {
        return (
            <Result quizResult={this.state.result} weather={this.state.weather}/>
        );
    }
  render() {
    let data = this.props.dashboardReducer.weather;
    return (
      <div>
        <Row className="row">
          <Col lg={12}>
            <PageHeader>Weather</PageHeader>
          </Col>
        </Row>
        {/*<Row className="row">*/}
          {/*<Col lg={12}>*/}
            {/*<Panel collapsible defaultExpanded header={<span>Weather forecast</span>} className="admin-info">*/}
              {/*<form role="form" onSubmit={this.handleSubmit.bind(this)}>*/}
                {/*<Row>*/}
                  {/*<Col lg={11}>*/}
                  {/*<FormGroup controlId="location">*/}
                    {/*<FormControl*/}
                      {/*name="location"*/}
                      {/*type="text"*/}
                      {/*placeholder="Enter location"*/}
                    {/*/>*/}
                  {/*</FormGroup>*/}
                  {/*</Col>*/}
                  {/*<Col lg={1}>*/}
                  {/*<FormGroup controlId="weather-search-btn">*/}
                    {/*<Button type="submit">Search</Button>*/}
                  {/*</FormGroup>*/}
                  {/*</Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*<Col lg={12}>*/}
                  {/*<p>{`Summary: ${data.currently ? data.currently.summary : 'N/A'}`}</p>*/}
                {/*</Col>*/}
                {/*<Col lg={12}>*/}
                  {/*<p>{`Temperature: ${data.currently ? data.currently.temperature : 'N/A'}`}</p>*/}
                {/*</Col>*/}
                {/*</Row>*/}
              {/*</form>*/}
            {/*</Panel>*/}
          {/*</Col>*/}
        {/*</Row>*/}
              {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}
