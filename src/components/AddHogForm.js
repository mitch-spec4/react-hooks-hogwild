import React, { Component } from 'react';

class AddHogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      specialty: '',
      weight: '',
      greased: false,
      highestMedal: '',
      image: ''
    };
  }

  handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, specialty, weight, greased, highestMedal, image } = this.state;
    this.props.addHog({
      name,
      specialty,
      weight: parseFloat(weight),
      greased,
      highestMedal,
      image
    });
    this.setState({
      name: '',
      specialty: '',
      weight: '',
      greased: false,
      highestMedal: '',
      image: ''
    });
  };

  render() {
    const { name, specialty, weight, greased, highestMedal, image } = this.state;

    return (
      <div className="add-hog-form">
        <h2>New Hog Details</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              placeholder="Enter hog name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="specialty">Specialty</label>
            <input
              id="specialty"
              name="specialty"
              value={specialty}
              onChange={this.handleInputChange}
              placeholder="Enter hog specialty"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="weight">Weight</label>
            <input
              id="weight"
              name="weight"
              type="number"
              value={weight}
              onChange={this.handleInputChange}
              placeholder="Enter hog weight"
            />
          </div>
          
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="greased"
                checked={greased}
                onChange={this.handleInputChange}
              />
              Greased?
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="highestMedal">Highest Medal Achieved</label>
            <input
              id="highestMedal"
              name="highestMedal"
              value={highestMedal}
              onChange={this.handleInputChange}
              placeholder="Enter highest medal achieved"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              id="image"
              name="image"
              value={image}
              onChange={this.handleInputChange}
              placeholder="Enter image URL"
            />
          </div>

          <button type="submit">Add Hog</button>
        </form>
      </div>
    );
  }
}

export default AddHogForm;
