import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: ''
  };

  onFormSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { term } = this.state;
    
    onSubmit( term );
  };
  
  render() {
    const { term } = this.state;

    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={ this.onFormSubmit }>
          <div className="field">
            <label>
              Image Search
              <input
                onChange={ e => this.setState({ term: e.target.value }) }
                type="text"
                value={ term }
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;