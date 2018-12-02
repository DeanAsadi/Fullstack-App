import React, { Component } from "react";
import { connect } from "react-redux";
import addProducts from "../redux/ducks/productsReducer";

class NewProduct extends Component {
  state = {
    productName: "",
    productImage: "",
    productPrice: 0
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { productName, productImage, productPrice } = this.state;

    if (productName && productImage && productPrice) {
      this.props.addProducts({ productName, productName, productPrice });
      this.props.history.replace("/");
    }
  };

  render() {
    const { productName, productImage, productPrice } = this.state;
    return (
      <div>
        <form onClick={this.onSubmit}>
          <input
            name="productName"
            value={productName}
            onChange={this.handleChange}
            placeholder="Product Name"
          />
          <input
            name="productImage"
            value={productImage}
            onChange={this.handleChange}
            placeholder="Product Image"
          />
          <input
            name="productPrice"
            vallue={productPrice}
            onChange={this.handleChange}
            placeholder=" Product Price "
          />
          <button>Add Product</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  { addProducts }
)(NewProduct);
