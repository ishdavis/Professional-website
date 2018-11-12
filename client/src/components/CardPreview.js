import React, {Component} from 'react';
import MenuOptions from './MenuOptions'
import Typing from 'react-typing-animation';
import MyAvatar from './MyAvatar';
import Fade from '@material-ui/core/Fade';
import ReactWOW from 'react-wow'
import IndividualCard from './IndividualCard'

class CardPreview extends Component{

    render(){
        var style = {
            display: 'block',
            width: '100%',
            height: '100%' 
        }
        var data = {
            title: 'yeard'
        }
        return(
            <div className="component third-component">
                <div style={style}>
                    <Typing speed={50}>
                            <h1 className="typer-title"><strong>Work Experience</strong></h1>
                    </Typing>
                    <div className="card-row">
                        <IndividualCard {...data}></IndividualCard>
                        <IndividualCard></IndividualCard>
                        <IndividualCard></IndividualCard>
                    </div>
                    <div className="card-row">
                        <IndividualCard></IndividualCard>
                        <IndividualCard></IndividualCard>
                        <IndividualCard></IndividualCard>
                    </div>
                </div>
            </div>
        )
    }
}



export default CardPreview;
