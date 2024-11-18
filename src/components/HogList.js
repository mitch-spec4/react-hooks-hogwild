import React, { Component } from 'react';
import HogTile from './HogTile';

class HogList extends Component {
  render() {
    const { hogData, hideHog } = this.props;

    return (
      <div className="ui grid">
        {hogData.map((hog) => {
          return (
            <HogTile 
              key={hog.name} 
              hog={hog} 
              hideHog={hideHog} 
            />
          );
        })}
      </div>
    );
  }
}

export default HogList;
