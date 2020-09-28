import React from 'react';
import { Link } from "react-router-dom"

class Layout extends React.Component {
    render() {
        const unAuthLinks = ( 
        <nav className="navbar">
          <Link className="signIn" to="/signin">Login</Link>
          <Link className="register" to="/register">Register</Link>
        </nav>
        )
        return (
            <div>
                         <div className="App">
        <header className="header">
        {localStorage.usertoken ? "" : unAuthLinks}
        </header>
      </div>
                {this.props.children}
                
                
            </div>
        );
    }
}

export default Layout;
