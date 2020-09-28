import React from 'react';
import UniqueID from 'react-html-id';
import Product from './Product';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {Link} from 'react-router-dom';

class Foodlist extends React.Component {
  constructor() {
    super();
    UniqueID.enableUniqueIds(this);
    this.state = {
      products: [
        // {id:this.nextUniqueId(), name:'Test-product', productStatus: "disponibil" ,expirationDate: "2020-02-02", category: "test",quantity: 2
        //   ,producer: "test", claimedBy: "test"},
        //   {id:this.nextUniqueId(), name:'Test-produs', productStatus: "disponibil" ,expirationDate: "2020-02-02", category: "test",quantity: 2
        //   ,producer: "test", claimedBy: "test"},
      ]
    };

    //this.addProduct = this.addProduct.bind(this);
  }
  componentDidMount=()=> {
    const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        const userEmail = decoded.email;
    axios.post(`http:/52.14.50.14:8080/api/product/user`,{user: userEmail}).then(product=>{
      console.log(product)
      this.setState({
        products:product.data
      })
    })
  }
  
  
  // //functie care adauga produs 
  // addProduct() {
  //   console.log("click");
  //   var produs = {
  //     id: this.nextUniqueId(),
  //     name: 'AAA',
  //     productStatus: "AAA",
  //     expirationDate: "2020-02-02",
  //     category: "tesAAAAt",
  //     quantity: 2,
  //     producer: "tesAAt",
  //     claimedBy: "teaaaAAst"
  //   };
  //   const products = Object.assign([], this.state.products);
  //   products.push(produs);
  //   this.setState({ products: products })

  // }

  // deleteProduct = (index, e) => {
  //   console.log(this.nextUniqueId())
  //   const products = Object.assign([], this.state.products);
  //   products.splice(index, 1);
  //   this.setState({ products: products });
  // }



  // changeName = (id, event) => {
  //   if (event.target.value.length === 0) {
  //     return;
  //   }
  //   const index = this.state.products.findIndex((user) => {
  //     return (user.id === id);
  //   })

  //   const user = Object.assign({}, this.state.products[index]);
  //   user.name = event.target.value;

  //   const products = Object.assign([], this.state.products);
  //   products[index] = user;

  //   this.setState({ products: products });
  // }


  render() {
    const products=this.state.products.map((el, i) => <div key={i}><p>Name:{el.name}</p><p>Category:{el.category}</p><p>ExpirationDate:{el.expirationDate}</p><p>ClaimedBy:{el.claimedBy}</p><p>Quantity:{el.quantity}</p><p>Producer:{el.producer}</p><p>ProductStatus:{el.productStatus}</p></div>);
    
    return (
      <div>
            <h1>Food list</h1>
         <div>
            {products}
         </div>
        
        <Link className="addBTN" to="/createproduct">Add Product</Link>
      </div>
    );
  }

}

export default Foodlist;
