import React, { Component } from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";

class SearchBox extends Component {
  render() {
    return (
      <Consumer>
        {context => (
          <div className="search-params">
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
              <button>Submit</button>
            </label>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SearchBox;
