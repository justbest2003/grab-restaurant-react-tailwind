import React from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Restaurant from "./Components/Restaurant"; 
import "./App.css";

function App() {
  return (
    <>
      <div className="container flex flex-col items-center p-4 mx-auto space-y-6">
        <Header />
        <Search />
        <Restaurant />
      </div>
    </>
  );
}

export default App;
