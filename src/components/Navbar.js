import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Reoder from "@mui/icons-material/Reorder";

function Navbar() {
  const [statusLinks, setStatusLinks] = useState(false);
  const toggleNavbar = () => {
    setStatusLinks(!statusLinks);

    window.addEventListener("resize", function () {
      //khi window reponsible lon hon 600px thi se hien logo 'KOSSPZ'
      if (window.matchMedia("(min-width: 600px)").matches) {
        setStatusLinks(false);
      }
    });
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={statusLinks ? "open" : "close"}>
        <h1>KOSSPZ</h1>

        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about">About</Link>
          <Link to="/contact"> Contact</Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about">About</Link>
        <Link to="/contact"> Contact</Link>
        <button onClick={toggleNavbar}>
          <Reoder />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
