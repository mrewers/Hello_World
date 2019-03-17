import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' }

  onFormSubmit = e => {
    e.preventDefault();

    const { formSubmit } = this.props;
    const { term } = this.state;

    formSubmit( term );
  }

  render() {
    const { term } = this.state;

    return (
      <div className="search-bar ui ">
        <form className="ui form" onSubmit={ this.onFormSubmit } >
          <div className="field">
            <label htmlFor="search-input">
              Video Search
              <input
                id="search-input"
                onChange={ e => this.setState({ term: e.target.value }) }
                type="text"
                value={ term }
              />
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;