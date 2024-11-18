import React, { Component } from 'react';
import hogs from '../porkers_data';
import HogList from './HogList';
import Nav from './Nav';
import AddHogForm from './AddHogForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hogData: hogs,
      showGreased: false,
      sortBy: null,
      hiddenHogs: [],
    };
  }

  handleToggleGreased = () => {
    this.setState((prevState) => ({
      showGreased: !prevState.showGreased,
    }));
  };

  handleSortBy = (criteria) => {
    this.setState({
      sortBy: criteria,
    });
  };

  hideHog = (hogName) => {
    this.setState((prevState) => ({
      hiddenHogs: [...prevState.hiddenHogs, hogName],
    }));
  };

  addHog = (newHog) => {
    this.setState((prevState) => ({
      hogData: [...prevState.hogData, newHog],
    }));
  };

  filterAndSortHogs = () => {
    const { hogData, showGreased, hiddenHogs, sortBy } = this.state;

    let filteredHogs = hogData.filter((hog) => {
      return (showGreased ? hog.greased : true) && !hiddenHogs.includes(hog.name);
    });

    if (sortBy === 'name') {
      filteredHogs = filteredHogs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'weight') {
      filteredHogs = filteredHogs.sort((a, b) => a.weight - b.weight);
    }

    return filteredHogs;
  };

  render() {
    const { showGreased } = this.state;
    const filteredAndSortedHogs = this.filterAndSortHogs();

    return (
      <div className="App">
        <Nav />

        {/* Filter, Sort, and Add Hog Controls */}
        <div className="ui container" style={{ marginTop: '20px' }}>
          <div className="ui segment">
            <h2>Filter and Sort Controls</h2>
            <div className="ui form">
              <div className="inline field">
                <label>
                  Show Greased
                  <input
                    type="checkbox"
                    checked={showGreased}
                    onChange={this.handleToggleGreased}
                  />
                </label>
              </div>
              <div className="ui buttons">
                <button
                  className="ui button"
                  onClick={() => this.handleSortBy('name')}
                >
                  Sort by Name
                </button>
                <button
                  className="ui button"
                  onClick={() => this.handleSortBy('weight')}
                >
                  Sort by Weight
                </button>
              </div>
            </div>
          </div>

          {/* Add Hog Form */}
          <AddHogForm addHog={this.addHog} />
        </div>

        {/* Render the Hog List */}
        <div className="ui container" style={{ marginTop: '40px' }}>
          <HogList hogData={filteredAndSortedHogs} hideHog={this.hideHog} />
        </div>
      </div>
    );
  }
}

export default App;
