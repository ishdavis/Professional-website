import React, {Component} from 'react';
import MyAvatar from './MyAvatar';
import ReactWOW from 'react-wow'
import Typing from 'react-typing-animation';
import Fade from '@material-ui/core/Fade';

class EducationPage extends Component{
    render(){
        var style = {
            display: 'block',
            width: '100%',
            height: '100%' 
        }
        return(
            <div className="component second-component">
                <div style={style}>
                    <Typing speed={150}>
                            <h1 className="typer-title"><strong>Education</strong></h1>
                    </Typing>
                    <h2><strong><i>University of Pittsburgh </i></strong></h2>
                    <h3><strong>Magna Cum Laude Graduate </strong></h3>
                    <h3><strong>B.S. in computer science/minor in economics Spring 2017</strong></h3>
                    <h3><strong>Member of Upsilon Pi Epsilon honor's computing society</strong></h3>
                    <h3><strong>Dean's list 6x</strong></h3>
                    <h3><strong>Gilman Scholar, Tapia Scholar, Pitt Honors College Academic Scholar, Nationality Rooms Scholar</strong></h3>
                    <ReactWOW animation='fadeIn' delay={"15s"}>
                        <p>hey</p>
                        <div>
                            <p>hey</p>
                        </div>
                    </ReactWOW>
                </div>
            </div>
        )
    }
}



export default EducationPage;
