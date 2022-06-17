import React from 'react';
import { connect } from 'react-redux';

import { createProduct } from '.../store/products';

class CreateProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      price: '',
      description: '',
      type: '',
      quantity: '',
      colour: '',
      imgUrl: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createProduct(this.state, this.props.history);
  }

  render() {
    const { title, price, description, type, quantity, colour, imgUrl } =
      this.state;
    return (
      <div className="product-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input
              name="title"
              type="text"
              onChange={this.handleChange}
              value={title}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              name="price"
              type="number"
              min="0"
              onChange={this.handleChange}
              value={price}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              name="description"
              type="text"
              onChange={this.handleChange}
              value={description}
            />
          </div>
          <div>
            <label>Type</label>
            <input
              name="type"
              type="text"
              onChange={this.handleChange}
              value={type}
            />
          </div>
          <div>
            <label>Quantity</label>
            <input
              name="type"
              type="number"
              min="0"
              onChange={this.handleChange}
              value={quantity}
            />
          </div>
          <div>
            <label>Colour</label>
            <input
              name="colour"
              type="text"
              onChange={this.handleChange}
              value={colour}
            />
          </div>
          <div>
            <label>ImgURL</label>
            <input
              name="imgUrl"
              type="text"
              onChange={this.handleChange}
              value={imgUrl}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (formData, history) =>
      dispatch(createProduct(formData, history)),
  };
};

export default connect(null, mapDispatchToProps)(CreateProduct);
