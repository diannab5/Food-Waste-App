import React from 'react';
import { Link, withRouter } from "react-router-dom"

class LoggedInLayout extends React.Component {
    logout(e) {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }
    foodList(e) {
        e.preventDefault();
        this.props.history.push('/foodList');
    }
    render() {
        return (
            <div>
            <div className="App">
            <header className="header">
                <nav className="navbarSignedIn">
                    <div class="dropdown">
                        <button class="dropbtn">Menu</button>
                        <div class="dropdown-content">
                          <a>Profile</a>
                          <a onClick={this.foodList.bind(this)}>My food list</a>
                          <a>Friends food list</a>
                          <a>Settings</a>
                          <a onClick={this.logout.bind(this)}>Log Out</a>
                        </div>
                         </div>
                    <div style={{position:"absolute",right:"10px"}}>
                        <input class="inputSearch" type="text" placeholder="Search..."/>
                    </div>
                </nav>
            </header>
        </div>
                {this.props.children}
                
            </div>
        );
    }
}

export default withRouter(LoggedInLayout);
