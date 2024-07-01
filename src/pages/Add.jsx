import React from "react";
import Navbar from "../Components/Narbar";
import Form from "../Components/Form";


function Add() {
  return (
    <>
      <div className="container flex flex-col items-center p-4 mx-auto space-y-6">
        <Navbar />
        <Form/>
      </div>
    </>
  );
}

export default Add;
