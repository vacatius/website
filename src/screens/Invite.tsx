import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Invite.css";
import { ReactComponent as Logo } from "./../vacatius.svg";

interface ParamTypes {
  deepLink: string;
}

function Invite() {
  const { deepLink } = useParams<ParamTypes>();

  useEffect(() => {
    window.location.replace(decodeURIComponent(deepLink));
  }, [deepLink]);

  return (
    <div className={"container"}>
      <h1>Hello someone has invited you to join a trip .</h1>
      <Logo height={300} width={300} />
      <a href={decodeURIComponent(deepLink)} className={"joinButton"}>
        join trip
      </a>
    </div>
  );
}

export default Invite;
