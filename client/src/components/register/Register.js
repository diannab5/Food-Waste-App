import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            city: "",
            phoneNumber: ""
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = this.state;
        axios
            .post('http://52.14.50.14:8080/api/user/', user)
            .then(res => {
                console.log(user)
                this.props.history.push('/signin')
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    handleChangeCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    handleChangePhoneNumber = (e) => {
        this.setState({
            phoneNumber: e.target.value
        })
    }

    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleChangePasswrod = (e) => {
        this.setState({
            password: e.target.value
        })
    }


    render() {
        return (
            <div>
             <h1 className="title">Register</h1>
            <div className="registerPage">
                <form className="form" onSubmit={this.handleSubmit}>
                <div className="div1">
                    <label>
                        First Name:
                    <input className="inputSignInUp" type="text" onChange={this.handleChangeFirstName}
                            value={this.state.firstName} />
                    </label>
                     </div>
                     <div className="div1">
                    <label>
                        Last Name:
                    <input className="inputSignInUp" type="text" onChange={this.handleChangeLastName}
                            value={this.state.lastName} />
                    </label>
                     </div>
                     <div className="div1">
                    <label>
                        Email:
                    <input className="inputSignInUp" type="text" onChange={this.handleChangeEmail}
                            value={this.state.email} />
                    </label>
                     </div>
                     <div className="div1">
                    <label>
                        Password:
                    <input className="inputSignInUp" type="password" onChange={this.handleChangePasswrod}
                            value={this.state.password} />
                    </label>
                     </div>
                     <div className="div1">
                    <label>
                        City:
                    <input className="inputSignInUp" type="text" onChange={this.handleChangeCity}
                            value={this.state.city} />
                    </label>
                     </div>
                     <div className="div1">
                    <label>
                        Phone Number:
                    <input className="inputSignInUp" type="text" onChange={this.handleChangePhoneNumber}
                            value={this.state.phoneNumber} />
                    </label>
                    </div>
                    <input className="formBTN" type="submit" value="Register" />
                </form>
            </div>
            </div>
        );
    }
}

export default withRouter(Register);
