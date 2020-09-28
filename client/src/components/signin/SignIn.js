import React from 'react';
import { withRouter } from "react-router-dom"
import axios from 'axios';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit(e){
        e.preventDefault();
        const user = this.state;
        console.log(user);
        axios
        .post('http://52.14.50.14:8080/api/login', user)
        .then(res => {
            if(res.data) {
                localStorage.setItem('usertoken', res.data);
                this.props.history.push("/firstPage");
            }
            return res.data
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    
    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    
    render(){
        return(
            <div>
            <h1>Log in</h1>
             <div className="logInPage">
             <form onSubmit={this.handleSubmit}>
             <div className="div1">
                <label >E-mail: </label>
                <input className="inputSignInUp" onChange={this.handleChangeEmail} value={this.state.email} type="text" placeholder="Enter your e-mail" />
            </div>
            <div className="div1">
                <label >Password: </label>
                <input className="inputSignInUp" onChange={this.handleChangePassword} value={this.state.password}  type="password" placeholder="Enter your password" />
        
             </div>
             <div className="divBtn">
             <input type="submit" to="/firstPage" className="logIn" value="Log In"></input>
             </div>
             </form>
             </div>
             </div>
            );
    }
    
}

export default withRouter(SignIn);

