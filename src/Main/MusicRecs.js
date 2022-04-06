import React from 'react';
import MusicCard from './MusicCard';
import SearchForm from './SearchForm';
import axios from 'axios';

// the data will be mapped through and passed as props to MusicCard
// There should be 3 cards in total

let SERVER = process.env.REACT_APP_SERVER;

class MusicRecs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentSearchQuery: '',
      searchQueries: []
    };
  }

  //GET all data basic skeleton
  //url needs to be assigned correctly
  //GETs all data from the mongodb 
  getBands = async () => {
    try {
      let url = `${SERVER}/artists`;
      let bands = await axios.get(url);
      this.setState({
        data: bands.data,
      });
    }
    catch (error) {
      console.log('error');
    }
  };

  //DELETE
  //url needs to be assigned correctly
  //delete is associated with the delete button
  deleteBand = async (id) => {
    try {
      let url = `${SERVER}/artists/${id}`;
      await axios.delete(url);
      let updatedBands = this.state.data.filter(band => band._id !== id);
      this.setState({
        data: updatedBands,
      });
    }
    catch (error) {
      console.log('error');
    }
  };

  //PUT
  //associated with the favorite button
  updateBand = async (bandToUpdate) => {
    try {
      let url = `${SERVER}/artists/${bandToUpdate._id}`;
      await axios.put(url, bandToUpdate);
      this.getBands();
    }
    catch (error) {
      console.log('error');
    }
  };


  //SEARCH GET
  //when the user searches, the server will call the api's for data, then the server will put data in mongodb in schema form, then the server will send that data to the user. 
  searchBand = async () => {
    let url = `${SERVER}/artist?searchQuery=${this.state.currentSearchQuery}`;
    let bands = await axios.get(url);
    this.setState({
      data: bands.data,
    });
  };



  handleFormQuery = (formQuery) => {
    this.setState({
      currentSearchQuery: formQuery,
    });
  };

  componentDidMount = async () => {
    this.getBands();
  };

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
        <SearchForm
          handleFormQuery={this.handleFormQuery}
        />
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
