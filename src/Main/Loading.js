import React from "react";
import '../CSSfiles/loading.css'

class Loading extends React.Component {
  render() {
    return (
      <img
        className="loading-spinner"
        src="./loadingVinyl.svg"
        alt="a loading icon"
      />
    );
  }
}

export default Loading;