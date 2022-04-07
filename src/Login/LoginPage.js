import React from 'react';
import LoginButton from './LoginButton';
import '/Users/ellasvete/codefellows/301/projects/bands_like_this_FE/src/CSSfiles/login.css';



class LoginPage extends React.Component {
  render() {
    return (
      <>
        <div className="flexbox-container">
        <h1 className="flexbox-item flexbox-item-1">Bands Like This</h1>
        <LoginButton />
        </div>
      </>
    );
  }
}

export default LoginPage;
