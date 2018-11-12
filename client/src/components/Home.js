import React, {Component} from 'react';
import {Pager} from "react-bootstrap";
import ReactPageScroller from 'react-page-scroller';
import HomePage from "./HomePage"
import EducationPage from "./EducationPage"
import SimpleAppBar from "./SimpleAppBar"
import CardPreview from "./CardPreview"

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
        //this.pageOnChange = this.pageOnChange.bind(this);
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    getPagesNumbers = () => {

        const pageNumbers = [];

        for (let i = 1; i <= 2; i++) {
            pageNumbers.push(
                <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>{i}</Pager.Item>
            )
        }

        return [...pageNumbers];
    };

    render() {

        //const pagesNumbers = this.getPagesNumbers();

        return <React.Fragment>
            <SimpleAppBar updatePage={this.goToPage}></SimpleAppBar>
            <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                <HomePage/>
                <EducationPage/>
                <CardPreview/>
            </ReactPageScroller>
        </React.Fragment>
    }
}