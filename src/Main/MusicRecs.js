import React from 'react';
import MusicCard from './MusicCard';
import SearchForm from './SearchForm';

// the data will be mapped through and passed as props to MusicCard
// There should be 3 cards in total

class MusicRecs extends React.Component {
  render() {
    return (
      <>
        <SearchForm />
        <MusicCard />
      </>
    );
  }
}

export default MusicRecs;
