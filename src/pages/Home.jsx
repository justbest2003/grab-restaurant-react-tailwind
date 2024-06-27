import React from "react";
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Search from "../Components/Search";
import Restaurant from "../Components/Restaurant";
import Navbar from "../Components/Narbar";

function Home() {
  const [restos, setRestos] = useState([]);
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
      .then((res) => res.json())
      .then((response) => {
        setRestos(response);
        setFilteredRestaurants(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="container flex flex-col items-center p-4 mx-auto space-y-6">
        <Navbar />
        <Header />
        <Search
          restos={restos}
          setFilteredRestaurants={setFilteredRestaurants}
        />
        <Restaurant restos={FilteredRestaurants} />
      </div>
    </>
  );
}

export default Home;
