import "./Profile.css"
import React from 'react';

class Profile extends React.Component {
    render(){
        return(
            <div className="div2" >
            
            <div style={{padding:10}}>
             <label>First Name: </label>
            </div>
            <div style={{padding:10}}>
             <label>Last Name:</label>
             </div>
              <div style={{padding:10}}>
             <label> Email:</label>
             </div>
              <div style={{padding:10}}>
             <label> City:</label>
             </div>
              <div style={{padding:10}}>
             <label>Phone Number:</label>
             </div>
             </div>
            );
    }
    
}

export default Profile;