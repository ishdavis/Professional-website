import React from 'react';
import {Pager} from "react-bootstrap";
import ReactPageScroller from 'react-page-scroller';
import HomePage from "./HomePage"
import EducationPage from "./EducationPage"
import SimpleAppBar from "./SimpleAppBar"
import CardPreview from "./CardPreview"
import {BrowserView} from "react-device-detect"

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
        this.pageOnChange = this.pageOnChange.bind(this);
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
            <BrowserView>
                <SimpleAppBar updatePage={this.goToPage}></SimpleAppBar>
            </BrowserView>
            <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                <HomePage key={1}/>
                <EducationPage key={2} wow={this.state.currentPage}/>
                <CardPreview key={3} name="Professional Experience" cardType="work"/>
                <CardPreview key={4} name="Personal Projects" cardType="project"/>
                <CardPreview key={5} name="Development Activities" cardType="activity"/>
            </ReactPageScroller>
        </React.Fragment>
    }
}