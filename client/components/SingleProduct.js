import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../store/singleProduct';
import CarouselCards from './Carousel'

class SingleProduct extends React.Component {

  componentDidMount () {
    this.props.loadSingleProduct(this.props.match.params.id)
  }

  render() {
    const { id, title, price, type, quantity, colour, imgUrl} = this.props.product

    const description = this.props.product.description || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia recusandae illo assumenda eos quos fuga non officia odio, minus asperiores cumque perspiciatis, in debitis ipsum consectetur nemo harum eum enim!";

    return (
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <img className="img-fluid" src={imgUrl} style={{width: '500px', height: 'auto'}}/>
          </div>

          <div className="col-md-6 single-product-content">
            <h2 className="title">{title}</h2>
            <p className="price">${price}</p>

            <div className="quantity">
              <label htmlFor="quantity">QUANTITY:</label>
              <input type="number" id="quantity" name="quantity" min="0" style={{width: '60px', height: 'auto'}}></input>
            </div>

            <button className="btn btn-dark">ADD TO CART <i className="bi bi-cart"></i></button>

            <div className="description">
              <p><span>Type: </span>{type}</p>
              <p><span>Colour: </span>{colour}</p>
              <p><span>Description: </span></p>
              <p>{description}</p>
            </div>
          </div>

        </div>
        <h2 className="suggestion">You May Also Like</h2>
        <CarouselCards currentId={id}/>
      </div>
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

export default connect(mapState, mapDispatch)(SingleProduct);

