import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import VisibilitySensor from 'react-visibility-sensor';
import Zoom from '@material-ui/core/Zoom';


class EducationPage extends Component{

    constructor(props) {
        super(props);
        this.state = {showing: true};
    }

    comIsVisible = () => {
        this.setState({showing: !this.state.showing})
        console.log(this.state.showing);
    }

    render(){
        var style = {
            display: 'block',
            width: '100%',
            height: '100%' 
        }
        return(
            <div className="component second-component">
                <div style={style}>
                    <VisibilitySensor onChange={this.comIsVisible}>
                        <Typing speed={150}>
                                <h1 className="typer-title"><strong>Education</strong></h1>
                        </Typing>
                    </VisibilitySensor>
                    <Zoom in={this.state.showing} style={{ transitionDelay: 800}}>
                        <div>
                            <h2 className="text-shadow"><strong><i>University of Pittsburgh </i></strong></h2>
                            <h3 className="text-shadow"><strong>Magna Cum Laude Graduate </strong></h3>
                            <h3 className="text-shadow"><strong>B.S. in computer science/minor in economics Spring 2017</strong></h3>
                            <h3 className="text-shadow"><strong>Gilman Scholar, Tapia Scholar, Pitt Honors College Academic Scholar, Nationality Rooms Scholar</strong></h3>                    
                            <h3 className="text-shadow"><strong>Dean's list 6x</strong></h3>
                            <h3 className="text-shadow"><strong>Member of Upsilon Pi Epsilon Honors computing society</strong></h3>
                        </div>
                    </Zoom>
                </div>
            </div>
        )
    }
}



export default EducationPage;
