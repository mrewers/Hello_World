import React, { Component } from "react";
import pf, { ANIMALS } from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class SearchParams extends Component {
  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            id="location"
            name="location"
            onChange={this.handleChange}
            placeholder="Location"
            value={this.state.location}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={this.handleAnimalChange}
            onBlur={this.handleAnimalChange}
            value={this.state.animal}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            name="breed"
            onChange={this.handleChange}
            onBlur={this.handleChange}
            disabled={!this.state.breeds.length}
            value={this.state.breed}
          >
            <option />
            {this.state.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
          <button>Submit</button>
        </label>
      </div>
    );
  }
}

export default SearchParams;
