import React, { Component } from 'react';

class HogTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  handleToggleDetails = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    const { hog, hideHog } = this.props;
    const { showDetails } = this.state;

    return (
      <div className="ui eight wide column">
        <div className="ui card" onClick={this.handleToggleDetails}>
          <div className="image">
            <img src={hog.image} alt={hog.name} />
          </div>
          <div className="content">
            <h3 className="header">{hog.name}</h3>
          </div>

          {showDetails && (
            <div className="extra content">
              <p><strong>Specialty:</strong> {hog.specialty}</p>
              <p><strong>Weight:</strong> {hog.weight} lbs</p>
              <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
              <p><strong>Highest Medal Achieved:</strong> {hog['highest medal achieved']}</p>
            </div>
          )}

          {/* Hide button */}
          <button onClick={(e) => { 
            e.stopPropagation(); // Prevent triggering the toggle when clicking the button
            hideHog(hog.name); 
          }}>
            Hide
          </button>
        </div>
      </div>
    );
  }
}

export default HogTile;
