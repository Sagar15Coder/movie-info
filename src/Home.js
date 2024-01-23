import React from "react";
import Movies from "./Movies";
import Search from "./Search";

const Home = () => {

  return (
    
    <div className="app">
      <h1>MovieInfo</h1>
      <Search />
      <Movies />

    </div>
    
  )
}

export default Home