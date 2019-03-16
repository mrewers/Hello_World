import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    value: ''
  }

  onInputChange = event => {
    const { value } = event.target;

    this.setState( {
      value
    } )
  };
  
  render() {
    const { value } = this.state;

    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>
              Image Search
              <input
                onChange={ this.onInputChange }
                type="text"
                value={ value }
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;