import React, { Component } from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";

class SearchBox extends Component {
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.search();
  };

  render() {
    return (
      <Consumer>
        {context => (
          <div className="search-params">
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="location">
                Location
                <input
                  id="location"
                  name="location"
                  onChange={context.handleChange}
                  placeholder="Location"
                  value={context.location}
                />
              </label>
              <label htmlFor="animal">
                Animal
                <select
                  id="animal"
                  name="animal"
                  onChange={context.handleAnimalChange}
                  onBlur={context.handleAnimalChange}
                  value={context.animal}
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
                  onChange={context.handleChange}
                  onBlur={context.handleChange}
                  disabled={!context.breeds.length}
                  value={context.breed}
                >
                  <option />
                  {context.breeds.map(breed => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
                <button onClick={this.props.search}>Submit</button>
              </label>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SearchBox;
