import "./Nav.css";
import { useState } from "react";
export default function Nav({ IsLogedIn, logout }) {
  function changeTo() {
    logout(false);
  }
  return (
    <div className="Maincontainer">
      <div className="title">
        <h2 id="heading"> My First Application</h2>
      </div>

      <div className="options">
        <a href="#"> Home </a>
        <a href="#"> about </a>
        <a href="#"> profile </a>
        <a href="#"> carrier </a>
        {IsLogedIn ? <button onClick={changeTo}> Logout</button> : null}
      </div>
    </div>
  );
}
