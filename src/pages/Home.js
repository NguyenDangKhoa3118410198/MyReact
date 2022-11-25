import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>HomePage</h1>
      <div className="home">
        <p>Noi dung</p>
      </div>
    </div>
  );
}

export default Home;
