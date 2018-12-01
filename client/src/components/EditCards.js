import React, {Component} from 'react';
import IndividualCard from './IndividualCard';
import axios from 'axios';
import Login from './Login.js'

class CardPreview extends Component{

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            endIndeces: [],
            animationReady: true,
            cardsPerRow: 4,
            loggedIn: false
        }
        var body = document.getElementsByTagName("BODY")[0];
        body.style.overflow = "scroll";
    }

    getCardsForRow = (start,end) => {
        console.log(start,end);
        return ( this.state.cards.slice(start,end).map((card,index) => 
            <div className="card-spacing">
                    <IndividualCard {...card}></IndividualCard>
                    <button onClick={() => this.deleteCard(card,start+index)} style={{"color": "red"}}>Delete</button>
                    {this.getButtonLink(card['_id'],card['cardType'])}
            </div>)
        )
    };

    getButtonLink = (id, cardType) => {
        var link = "add?id=" + id + "&cardtype=" + cardType;
        return (
            <a href={link} target="_blank" rel="noopener noreferrer"><button style={{"color": "green"}}>Edit</button></a> 
        )
    }

    deleteCard = (card,index) => {
        var cards = [...this.state.cards];
        cards.splice(index,1);
        console.log(card['_id']);
        axios.delete('/api/Card/' + card['cardType'] + "/" + card['_id'])
            .then(response => {
                this.setState({cards});
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentWillMount(){
        axios.get('/api/Card/')
            .then(response => {
                let cards = response.data;
                var endIndeces = [0];
                var i = 0;
                while(i < cards.length){
                    if(i + this.state.cardsPerRow > cards.length){
                        i = cards.length;
                    }
                    else{
                        i += this.state.cardsPerRow;
                    }
                    endIndeces.push(i);
                }
                this.setState({cards, endIndeces, animate: true});
            })
            .catch(err => {
                console.log(err);
            })
    }

    getCardRow = () => {
        return ( this.state.endIndeces.map((element,index,arr) => 
                index > 0 &&
                <div className="card-row">
                    {this.getCardsForRow(arr[index-1],element)}
                </div>
            )
        )
    }

    updateLoggedIn = (value) => {
        this.setState({loggedIn: value});
    }

    render(){
        var style = {
            display: 'block',
            width: '100%',
            height: '100%' 
        }
        return(
            
            <div className="component third-component">
                {!this.state.loggedIn && 
                    <Login updateLogin={this.updateLoggedIn}></Login>
                }
                {this.state.loggedIn &&
                    <div style={style}>
                        { this.getCardRow() } 
                    </div>
                }
            </div>
        )
    }
}



export default CardPreview;
