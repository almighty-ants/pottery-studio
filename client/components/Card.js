import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleProduct } from '../store/singleProduct';

class Card extends React.Component {

  componentDidMount () {
    this.props.loadSingleProduct(this.props.number)
  }

  render() {
    console.log(this.props.number);
    const { id, imgUrl } = this.props.product;
    return (
      <>
        <Link to={`/products/${id}`}>
          <img className="card" src={imgUrl} />
        </Link>
      </>
    )
  }
}

const mapState = (state) => ({
  product: state.singleProduct
});

const mapDispatch = (dispatch) => {
return {
  loadSingleProduct: (id) => dispatch(fetchSingleProduct(id))
};
};

export default connect(mapState, mapDispatch)(Card);

//////////////////////////
// import React from "react";
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchProducts } from '../store/products';

// class Card extends React.Component {

//   componentDidMount () {
//     this.props.getProducts();
//   }

//   render() {
//     const { products, number } = this.props;
//     const selectedProduct = products.filter(product => product.id === number)
//     console.log(selectedProduct)
//     return (
//       <>
//         <Link to={`/products/${number}`}>
//           <img className="card" src={selectedProduct.imgUrl} />
//         </Link>
//       </>
//     )
//   }
// }

// const mapState = (state) => ({
//   products: state.products,
// });

// const mapDispatch = (dispatch) => ({
//   getProducts: () => dispatch(fetchProducts()),
// });

// export default connect(mapState, mapDispatch)(Card);
