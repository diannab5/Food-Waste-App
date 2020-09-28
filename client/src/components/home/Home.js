import React from 'react';
import './Home.css';
import food from '../../food.png';
import infpic1 from '../../infpic1.png';
import infpic2 from '../../infpic2.png';
import infpic3 from '../../infpic3.png';

class Home extends React.Component {
    render(){
        return(
            <div>
            <h1>Food waste</h1>

            
             <img className="pic1" src ={food} alt="food"></img>
              <div className="flexbox-container">
            <div><img src ={infpic1}></img></div>
            <div><img src ={infpic2}></img></div>
            <div><img src ={infpic3}></img></div>

            </div>
             
         
            </div>
           
            );
    }
    
}

export default Home;