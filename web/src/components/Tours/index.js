import React, {Component} from 'react';

import {
    PageHeader,
    Row,
    Col,
} from 'react-bootstrap';

import './index.css';

export default class TourList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            result: '',
            data: null
        };

    }

    componentWillMount() {
        this.props.dashboardActions.getTourList({
            'category': this.props.location.query.category,
            'limit': 50,
            'ran': 'false'

        }).then((resp) => {
            console.log(resp)
            this.setState({
                data: resp.data.data.places
            })
        })
    }

    render() {
        console.log(this.state.data)
        return (
            <div>
                <Row className="row">
                    <Col lg={12}>
                        <PageHeader>TEST</PageHeader>
                    </Col>
                </Row>
                <div className="container-fluid">
                    <div className="row">
                        {this.state.data ? this.state.data.map((el, i) => {
                            return (
                                <div className="col-md-6" key={i}>
                                    <div className="well well-sm">
                                        <div className="row">
                                            <div className="col-xs-3 col-md-3 text-center">
                                                <img src={el.thumbnail_url} alt="bootsnipp"
                                                     className="img-rounded img-responsive"/>
                                            </div>
                                            <div className="col-xs-9 col-md-9 section-box">
                                                <h2>
                                                    {el.name} <a href={el.url} target="_blank"><span
                                                    className="glyphicon glyphicon-new-window">
                            </span></a>
                                                </h2>
                                                <p> {el.perex} </p>
                                                <hr/>
                                                <div className="row rating-desc">
                                                    <div className="col-md-12">
                                                        {el.name_suffix}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <div className="sk-fading-circle">
                            <div className="sk-circle1 sk-circle"></div>
                            <div className="sk-circle2 sk-circle"></div>
                            <div className="sk-circle3 sk-circle"></div>
                            <div className="sk-circle4 sk-circle"></div>
                            <div className="sk-circle5 sk-circle"></div>
                            <div className="sk-circle6 sk-circle"></div>
                            <div className="sk-circle7 sk-circle"></div>
                            <div className="sk-circle8 sk-circle"></div>
                            <div className="sk-circle9 sk-circle"></div>
                            <div className="sk-circle10 sk-circle"></div>
                            <div className="sk-circle11 sk-circle"></div>
                            <div className="sk-circle12 sk-circle"></div>
                        </div>}

                    </div>
                </div>
            </div>
        );
    }
}
