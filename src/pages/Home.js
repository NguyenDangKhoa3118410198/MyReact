import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>HomePage</h1>
      <div className="home">
        <Link to="/login">
          <button>Log out</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
