import React from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

const Search = () => (
  <div className="search">
    <div>
      {preload.shows.map(show => (
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

export default Search;
