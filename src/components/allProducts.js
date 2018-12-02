import React, { Component } from "react";
import { getProducts } from "../../src/redux/ducks/productsReducer";
import { connect } from "react-redux";

class allProducts extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { isLoading, products } = this.props;
    console.log("products--> ", products);

    const displayProducts = isLoading ? (
      <p>Loading...</p>
    ) : (
      products.map((element, index) => {
        return <h2>{element.name}</h2>;
      })
    );

    return <div>{displayProducts}</div>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getProducts }
)(allProducts);
