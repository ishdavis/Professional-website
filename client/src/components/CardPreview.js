import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import MyAvatar from './MyAvatar';
import Fade from '@material-ui/core/Fade';
import ReactWOW from 'react-wow';
import IndividualCard from './IndividualCard';
import axios from 'axios';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';
import TrackVisibility from 'react-on-screen';
import OnVisible from 'react-on-visible';
import VisibilitySensor from 'react-visibility-sensor';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


class CardPreview extends Component{

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            animationReady: true,
            cardsPerRow: 0,
            rowExtras: [0, 0, 0],
            animate: false,
            page: 0,
            moreCards: false,
            cardsPerPage: 12
        }
    }

    getCardsForRow = (start,end) => {
        return ( this.state.cards.slice(start,end).map(card => 
            <div className="card-spacing">
                <Zoom in={this.state.animationReady} style={{ transitionDelay: 200}} >
                    <div>
                        <IndividualCard {...card}></IndividualCard>
                    </div>
                </Zoom>
            </div>)
        )
    };

    visibilityChanged = (visible) => {
        this.setState({animationReady: !this.state.animationReady});
    }

    componentWillMount(){
        let cardLimit = {"cardLimit": this.state.cardsPerPage + 1}; {/*Adding one here to determine if there are any cards remaining to show after this page*/}
        let url = this.props.cardType;
        this.getNewCards(url,cardLimit);
    }

    getNewCards = (url,data) => {
        axios.post('/api/Card/' + url,data)
            .then(response => {
                let cards = response.data;
                let moreCards = false;
                if(cards.length > this.state.cardsPerPage){
                    cards.pop()
                    moreCards = true;
                }
                if(data["direction"] === "previous"){
                    moreCards = true; /*There's obviously more cards if we're going to the previous page*/
                }
                let rowExtras = [0, 0, 0]; {/*If cards can't be evenly divided by row, need to show more cards on the first & maybe 2nd rows*/}
                var i = cards.length % 3;
                while(i > -1){
                    i--;
                    rowExtras[i] = 1;
                } 
                this.setState({rowExtras, moreCards, cards, cardsPerRow: Math.floor(cards.length / 3), animate: true});
            })
            .catch(err => {
                console.log(err);
            })
    }

    changeCardPage = (direction) => {
        let page = this.state.page;
        page = direction === "next" ? page + 1 : page - 1;
        this.setState({page});
        let lastCardId = this.state.cards[this.state.cards.length-1]["_id"];
        let firstCardId = this.state.cards[0]["_id"]
        let cardLimit = direction === "next" ? this.state.cardsPerPage + 1 : this.state.cardsPerPage; {/*If we are going back we know that there are cards that can be shown on the next page*/}
        let data = {"direction": direction, "cardLimit": cardLimit};
        let url = ""
        if (direction === "next"){
            url = this.props.cardType + "/" + lastCardId;
        }
        else{
            url = this.props.cardType + "/" + firstCardId;
        }
        this.getNewCards(url,data);
    }

    render(){
        var style = {
            display: 'block',
            width: '100%',
            height: '100%' 
        }
        const { name } = this.props;
        return(
            <div className="component third-component">
                <div style={style}>
                    <VisibilitySensor onChange={this.visibilityChanged}>
                        <h1 className="typer-title"><strong>{ name }</strong></h1>
                    </VisibilitySensor>
                    <ArrowForwardIcon onClick={() => this.changeCardPage("next")} visibility={this.state.moreCards === true ? "visible":"hidden"} fontSize={"large"} className="next-arrow"></ArrowForwardIcon>
                    <h3 onClick={() => this.changeCardPage("next")} className="next-text" style={{visibility: this.state.moreCards === true ? "visible":"hidden"}}><strong>Older</strong></h3>
                    <ArrowBackIcon onClick={() => this.changeCardPage("previous")} visibility={this.state.page !== 0 ? "visible":"hidden"} fontSize={"large"} className="prev-arrow"></ArrowBackIcon>
                    <h3 onClick={() => this.changeCardPage("previous")} className="prev-text" style={{visibility: this.state.page !== 0 ? "visible":"hidden"}}><strong>Newer</strong></h3>
                    <div className="card-row">
                        { this.getCardsForRow(0,this.state.cardsPerRow + this.state.rowExtras[0])} {/*The parameters signify where the cards on this row should begin, and where they should end*/}
                    </div>
                    <div className="card-row">
                        { this.getCardsForRow(this.state.cardsPerRow + this.state.rowExtras[0],(this.state.cardsPerRow * 2) + this.state.rowExtras[0] + this.state.rowExtras[1])}
                    </div>
                    <div className="card-row">
                        { this.getCardsForRow((this.state.cardsPerRow * 2) + this.state.rowExtras[0] + this.state.rowExtras[1],this.state.cards.length)}
                    </div>
                </div>
            </div>
        )
    }
}



export default CardPreview;
