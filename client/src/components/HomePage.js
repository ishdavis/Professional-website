import React, {Component} from 'react';
import MenuOptions from './MenuOptions'
import Typing from 'react-typing-animation';
import MyAvatar from './MyAvatar';
import Fade from '@material-ui/core/Fade';
import ReactWOW from 'react-wow'

class HomePage extends Component{

    render(){
        var style = {
            display: 'block',
            width: '100%',
            height: '100%' 
        }
        return(
            <div className="component first-component">
                <div style={style}>
                    <Typing speed={150}>
                        <h1 className="typer-title"><strong>Ishvaraus Davis</strong></h1>
                    </Typing>
                    <Typing speed={40}>
                        <h2 className="typer">Human<br></br>Software engineer<br></br>ML/Full-Stack/Security</h2>
                    </Typing>
                    <ReactWOW animation='fadeIn' delay={"2s"}>
                        <div>
                        <MyAvatar imageName={"received_2222416901112511.jpeg"}></MyAvatar>
                        </div>
                    </ReactWOW>
                </div>
            </div>
        )
    }
}



export default HomePage;
