import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: "",
            productStatus: "",
            expirationDate: "",
            category: "meat",
            quantity: "",
            producer:"",
            claimedBy:"",
            userEmail:""
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const product = this.state;
        console.log(product);
        axios
            .post('http://52.14.50.14:8080/api/product', product)
            .then(res => {
                console.log(res.data);
                this.props.history.push('/foodlist');
            })
            .catch(err => {
                console.log(err);
            })
    }
    componentDidMount = () => {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        const userEmailDecoded = decoded.email;
        this.setState({userEmail: userEmailDecoded});
    }
    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeProductStatus = (e) => {
        this.setState({
            productStatus: e.target.value
        })
    }

    handleChangeExpirationDate = (e) => {
        this.setState({
            expirationDate: e.target.value
        })
    }

    handleChangeCategory = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    handleChangeQuantity = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }
    
    handleChangeProducer = (e) => {
        this.setState({
            producer: e.target.value
        })
    }
    
    handleChangeClaimedBy = (e) => {
        this.setState({
            claimedBy: e.target.value
        })
    }

    render() {
        return (
            <div>
            <h1 className="title">Add a product</h1>
            <div className="addProducts">
                
                <form className="form" onSubmit={this.handleSubmit}>
                 <div className="div1">
                    <label>
                        Name:
                    <input className="inputProduct" type="text" onChange={this.handleChangeName}
                            value={this.state.name} />
                    </label>
                    </div>
                     <div className="div1">
                    <label>
                        ProductStatus:
                    <input className="inputProduct" type="text" onChange={this.handleChangeProductStatus}
                            value={this.state.productStatus} />
                    </label>
                    </div>
                     <div className="div1">
                    <label>
                        ExpirationDate:
                    <input className="inputProduct" type="text" onChange={this.handleChangeExpirationDate}
                            value={this.state.expirationDate} />
                    </label>
                    </div>
                     <div className="div1">
                    <label>
                        Category:
                    <select className="inputProduct" onChange={this.handleChangeCategory}
                            value={this.state.category}>
                            <option value="meat">meat</option>
                            <option value="dairy products">dairy products</option>
                            <option value="vegetables">vegetables</option>
                            <option value="fruits">fruits</option>
                            <option value="drinks">drinks</option>
                            <option value="other">other</option>
                            </select>
                    </label>
                    </div>
                     <div className="div1">
                    <label>
                        Quantity:
                    <input className="inputProduct" type="text" onChange={this.handleChangeQuantity}
                            value={this.state.quantity} />
                    </label>
                    </div>
                     <div className="div1">
                    <label>
                        Producer:
                    <input className="inputProduct" type="text" onChange={this.handleChangeProducer}
                            value={this.state.producer} />
                    </label>
                    </div>
                     <div className="div1">
                    <label>
                        ClaimedBy:
                    <input className="inputProduct" type="text" onChange={this.handleChangeClaimedBy}
                            value={this.state.claimedBy} />
                    </label>
                    </div>
                    
                    <input className="primary-button" type="submit" value="Save" />
                </form>
            </div>
            </div>
        );
    }
}

export default withRouter(CreateProduct);