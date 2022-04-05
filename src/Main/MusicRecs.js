import React from 'react';
import MusicCard from './MusicCard';
import SearchForm from './SearchForm';

// the data will be mapped through and passed as props to MusicCard
// There should be 3 cards in total

class MusicRecs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
      currentSearchQuery: '',
      searchQueries: []
    }
  }

  render() {
    // FOR THREE CARD RENDER - ANOTHER GET ON THE BACK END IS NEEDED FOR SEARCHQUERIES(BANDS) SAVED IN THE DB
    // let cards = this.state.searchQueries.map(searchQuery => {
    //   let cardData = await axios.get(ServerUrlCallUsingSearchQuery)
    //   return(
    //     <MusicCard
    //       searchQuery={searchQuery}
    //       img={cardData.data.img}
    //       name={cardData.data.name}
    //     />
    //   )
    // })
    return (
      <>
        <SearchForm/>
        <MusicCard 
          currentSearchQuery={this.state.currentSearchQuery}
          img={this.state.data.img}
          name={this.state.data.name}
        />
      </>
    );
  }
}

export default MusicRecs;
