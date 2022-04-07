import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import '../CSSfiles/login.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button className="flexbox-item flexbox-item-4" onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;