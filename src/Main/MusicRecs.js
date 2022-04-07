import React from 'react';
import MusicCard from './MusicCard';
import SearchForm from './SearchForm';
import axios from 'axios';
import '../CSSfiles/musicRecs.css'

// the data will be mapped through and passed as props to MusicCard
// There should be 3 cards in total

let SERVER = process.env.REACT_APP_SERVER;

class MusicRecs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recs: [],
      currentSearchQuery: '',
      searchQueries: [],
      bandCard: []
    };
  }

  //GET all data basic skeleton
  //url needs to be assigned correctly
  //GETs all data from the mongodb 
  getBands = async () => {
    try {
      let url = `${SERVER}/artists`;
      let bands = await axios.get(url);
      this.setState((state) => {
        return { recs: [...state.recs, ...bands.data] }
      });
    } catch (error) {
      console.error('error');
    }
  };

  //DELETE
  //url needs to be assigned correctly
  //delete is associated with the delete button

  deleteBand = async (id) => {
    try {
      let url = `${SERVER}/artists/${id}`;
      await axios.delete(url);
      let updatedBands = this.state.recs.filter(band => band._id !== id);
      // keep an eye on this 
      this.setState({
        recs: updatedBands,
      });
    } catch (error) {
      console.error('error');
    }
  };
  // TODO this should filter through bandCard state, and delete the string that matches the card the user pressed the delete button on (this will delete the react card from the site)
  
  // TODO should then filter through recs state (array) and get the ID values for the 6 objects that have a search prop that matches that same string, Pass these 6 ID values to the server to make 6 DELETE calls. 
  // TODO once functional pass into MusicCard to be called with handle delete function.
  findBandToDelID = (bandToDel) => {
    // filter through bandCard and remove bandToDel
    let localBandCard = this.state.bandCard
    let indexToPop = this.state.bandCard.indexOf(bandToDel);
    localBandCard.splice(indexToPop,1) // removes the band from the card render state then sets the new arr to state to modify the render.
    this.setState({ 
      bandCard: localBandCard
    });
    let delIdArr = []
    this.state.recs.filter((band) => {
      if(band.search === bandToDel) {
        delIdArr.push(band._id);
      }
    });
    delIdArr.forEach(id => this.deleteBand(id))
  };




  //PUT
  //associated with the favorite button
  // TODO: get the string of the card that was favorite-ed, use that to get the ID values of the 6 bands on that card.
  // TODO Use the ID values of those six bands, to swap the boolean value of favorite to true.
  // Hint: The same logic to get the card string and the 6 ID values from the Delete function will work here.
  updateBand = async (recToUpdate) => {
    try {
      console.log('first', recToUpdate);
      recToUpdate.favorite = !recToUpdate.favorite;
      console.log('second', recToUpdate)
      let url = `${SERVER}/artists/${recToUpdate._id}`;
      await axios.put(url, recToUpdate);
      this.getBands();
    } catch (error) {
      console.error('error');
    }
  };

  findBandToFav = (bandToFav) => {
    let favIdArr = []
    this.state.recs.filter((band) => {
      if(band.search === bandToFav) {
        favIdArr.push(band)
      }
    });
    favIdArr.forEach(rec => this.updateBand(rec))
  };

  //SEARCH GET
  //when the user searches, the server will call the api's for data, then the server will put data in mongodb in schema form, then the server will send that data to the user. 
  searchBand = async (searchedBand) => {
    let url = `${SERVER}/artist?searchQuery=${searchedBand}`;
    let bands = await axios.get(url);
    this.setState((state) => {
      return {
        bandCard: [...state.bandCard, searchedBand],
        recs: [...state.recs, ...bands.data]
      }
    });
    console.log(url);
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

    return (
      <>
        <SearchForm
          handleFormQuery={this.handleFormQuery}
          searchBand={this.searchBand}
          recs={this.state.recs}
        />
        <MusicCard
          recs={this.state.recs}
          bandCard={this.state.bandCard}
          deleteBand={this.deleteBand}
          updateBand={this.updateBand}
          findBandToDelID={this.findBandToDelID}
          findBandToFav={this.findBandToFav}
        />
      </>
    );
  }
}

export default MusicRecs;
