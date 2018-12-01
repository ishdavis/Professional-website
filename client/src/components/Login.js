import React from 'react';
import axios from 'axios';


class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {loggedIn: false};
      }

    getInput = (updateLogin) => {
        
        var value = prompt("Please input access password")
        if(value == null){return false;}
        axios.post('/api/adminAccess/'+value)
            .then(response => {
                updateLogin(response.data);
                this.setState({loggedIn: true});
            })
            .catch(err => {})
    }
    render(){
        const { updateLogin } = this.props;
        return (
            <div>
                {!this.state.loggedIn &&
                    <>{this.getInput(updateLogin)}</>
                }
            </div>
        );
    }

}

export default (Login);