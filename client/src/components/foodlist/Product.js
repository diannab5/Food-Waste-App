import React from 'react';

const Product = (props) => {
  if(props.children){
    return (
      <li>
      <span>  name: {props.children} | productStatus: {props.children} | expirationDate: {props.children} | category: {props.children} | 
      quantity: {props.children} | producer: {props.children} | claimedBy: {props.children}</span>
      <input onChange={props.changeEvent} value={props.children}/>
      <button onClick={props.delEvent}>Delete</button>
      </li>
    )
  } else {
    return(<li>Invalid Entry</li>)
  }
}

export default Product;