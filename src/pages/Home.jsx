import React from "react";
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Search from "../Components/Search";
import Restaurant from "../Components/Restaurant";

function Home() {
  const [restos, setRestos] = useState([]);
  const [FilteredRestos, setFilteredRestos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then((response) => {
        setRestos(response);
        setFilteredRestos(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="container flex flex-col items-center p-4 mx-auto space-y-6">
        <Header />
        <Search restos={restos} setFilteredRestos={setFilteredRestos} />
        <Restaurant restos={FilteredRestos} />
      </div>
    </>
  );
}

export default Home;
