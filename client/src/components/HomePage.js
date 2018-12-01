import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import MyAvatar from './MyAvatar';
import Fade from '@material-ui/core/Fade';
import ReactWOW from 'react-wow'


class HomePage extends Component{

    doSomething = () => {
        var copyText = document.getElementById("myEmail");
        copyText.select();
        document.execCommand("copy");
    }

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
                    <Fade in={true} style={{ transitionDelay: 2000}} mountOnEnter>
                        <div className="tooltip">
                            <ul className="social-icons icon-circle icon-rotate list-unstyled list-inline"> 
                                <li><a href="https://www.linkedin.com/in/ishvarausdavis/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a> </li> 
                                <li><a href="https://github.com/ishdavis" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a> </li>
                                <li><a href="mailto:ishvaraus@gmail.com"><i className="fa fa-envelope"></i></a></li>
                                <li><a href="Resume.docx" download><i className="fa fa-file"></i></a></li>
                            </ul>
                        </div>
                    </Fade>
                </div>
                
            </div>
        )
    }
}



export default HomePage;
