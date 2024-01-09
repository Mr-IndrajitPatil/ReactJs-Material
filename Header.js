import "./Header.css";

import { Routes, Link, to } from "react-router-dom";
export default function Header() {
  return (
    <div className="Maincontainer">
      <div className="title">
        <h2 id="heading"> My First Application</h2>
      </div>

      <div className="options">
        <Link to="/"> Home </Link>
        <Link to="/profile"> profile </Link>
        <Link to="/Products"> Product </Link>
        <Link to="/AddToCart"> Add To cart </Link>

        <Link to="/login"> Login </Link>
        <Link to="/counter"> Counter </Link>
      </div>
    </div>
  );
}
