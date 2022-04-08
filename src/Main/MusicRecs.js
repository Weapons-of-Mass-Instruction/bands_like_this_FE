import React from 'react';
import MusicCard from './MusicCard';
import SearchForm from './SearchForm';
import ErrorAlert from './ErrorAlert';
import axios from 'axios';
import '../CSSfiles/musicRecs.css';
import { withAuth0 } from "@auth0/auth0-react";


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
      bandCard: [],
      loading: false,
      favRecs: [],
      wasError: false
    };
  }

  setLoadingTrue = () => {
    this.setState({
      loading: true
    })
  }

  setLoadingFalse = () => {
    this.setState({
      loading: false
    })
  }


  //GET all data basic skeleton
  //GETs all data from the mongodb 
  getBands = async () => {
    if (this.props.auth0.isAuthenticated){
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      try {
        
        let url = `${SERVER}/artists`;
        let bands = await axios.get(url, {
          headers: {
            "Authorization": `Bearer ${jwt}`
          }
        });
        this.setState((state) => {
          return { recs: [...state.recs, ...bands.data] }
        });
      } catch (error) {
        this.setState({
          wasError: true,
        })
        console.error('error');
      }
    }
  };

  //DELETE

  deleteBand = async (id) => {
    try {
      let url = `${SERVER}/artists/${id}`;
      await axios.delete(url);
      let updatedBands = this.state.recs.filter(band => band._id !== id);
      this.setState({
        recs: updatedBands,
      });
    } catch (error) {
      this.setState({
        wasError: true,
      })
      console.error('error');
    }
  };

  findBandToDelID = (bandToDel) => {
    // filter through bandCard and remove bandToDel
    let localBandCard = this.state.bandCard
    let indexToPop = this.state.bandCard.indexOf(bandToDel);
    localBandCard.splice(indexToPop, 1) // removes the band from the card render state then sets the new arr to state to modify the render.
    this.setState({
      bandCard: localBandCard
    });
    let delIdArr = []
    this.state.recs.filter((band) => {
      if (band.search === bandToDel) {
        delIdArr.push(band._id);
      }
    });
    delIdArr.forEach(id => this.deleteBand(id))
  };

  //PUT
  updateBand = async (recToUpdate) => {
    try {
      console.log('first', recToUpdate);
      recToUpdate.favorite = !recToUpdate.favorite;
      console.log('second', recToUpdate)
      let url = `${SERVER}/artists/${recToUpdate._id}`;
      await axios.put(url, recToUpdate);
      this.getBands();
    } catch (error) {
      this.setState({
        wasError: true,
      })
      console.error('error');
    }
  };

  // findBandToFav = (bandToFav) => {
  //   let favIdArr = []
  //   this.state.recs.filter((band) => {
  //     if (band.search === bandToFav) {
  //       favIdArr.push(band)
  //     }
  //   });
  //   favIdArr.forEach(rec => this.updateBand(rec))
  // };

  //SEARCH GET
  //when the user searches, the server will call the api's for data, then the server will put data in mongodb in schema form, then the server will send that data to the user. 
  searchBand = async (searchedBand) => {
    try {
      this.setLoadingTrue();
      let url = `${SERVER}/artist?searchQuery=${searchedBand}`;

      let bands = await axios.get(url);
      this.setState((state) => {
        return {
          bandCard: [...state.bandCard, searchedBand],
          recs: [...state.recs, ...bands.data]
        }
      });
      this.setLoadingFalse();
    }
    catch (error) {
      this.setState({
        wasError: true,
      })
      this.setLoadingFalse();
      console.error(error);
    }
  };

  addToFavRecs = (bandsAdded) => {
    let newArr = []
    this.state.recs.filter((bandObj, idx) => {
      console.log(bandsAdded);
      console.log(bandsAdded[idx].search);
      console.log(bandObj.search);
      if(bandObj.search === bandsAdded[idx].search) {
        newArr.push(bandsAdded[idx]);
      }
    })
      this.setState((state) => {
        return {
        favRecs: [...state.favRecs, newArr]
        }
      })
    console.log(this.state.favRecs);
  };

  handleFormQuery = (formQuery) => {
    this.setState({
      currentSearchQuery: formQuery,
    });
  };

  componentDidMount = async () => {
    this.getBands();
  };

  onErrorClose = () => {
    this.setState({
      wasError: false,
    })
  }

  render() {

    return (
      <>
        <ErrorAlert
          onErrorClose={this.onErrorClose}
          wasError={this.state.wasError}
        />

        <>
          <SearchForm
            handleFormQuery={this.handleFormQuery}
            searchBand={this.searchBand}
            recs={this.state.recs}
            loadingState={this.state.loading}
          />
          
          <MusicCard
            recs={this.state.recs}
            bandCard={this.state.bandCard}
            deleteBand={this.deleteBand}
            updateBand={this.updateBand}
            findBandToDelID={this.findBandToDelID}
            findBandToFav={this.findBandToFav}
            addToFavRecs={this.addToFavRecs}
          />
        </>
      </>
    );
  }
}

export default withAuth0(MusicRecs);
