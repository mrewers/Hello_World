import React, { Component } from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

class Search extends Component {
  state = {
    searchTerm: ''
  };
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>Video</h1>
          <input
            value={this.state.searchTerm}
            type="text"
            onChange={this.handleSearchTermChange}
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => (
              <ShowCard
                key={show.imdbID}
                poster={show.poster}
                title={show.title}
                year={show.year}
                description={show.description}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
