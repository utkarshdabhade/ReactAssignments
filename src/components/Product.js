import React, { Component } from 'react';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      isInStock: true,
    };
  }

  toggleStock = () => {
    this.setState(prevState => ({
      isInStock: !prevState.isInStock,
    }));
  };

  render() {
    return (
      <div>
        <h2>Product</h2>
        <p>Product Name: Example Product</p>
        <p>{this.state.isInStock ? 'In Stock' : 'Out of Stock'}</p>
        <button onClick={this.toggleStock}>Toggle Stock</button>
      </div>
    );
  }
}

export default Product;
