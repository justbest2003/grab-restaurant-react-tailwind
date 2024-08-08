import React from "react";
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Search from "../Components/Search";
import Restaurant from "../Components/Restaurant";
import RestaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";

function Home() {
  const [restos, setRestos] = useState([]);
  const [FilteredRestos, setFilteredRestos] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await RestaurantService.getAllRestaurant();
        if (response.status === 200) {
          setRestos(response.data);
          setFilteredRestos(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Restaurant",
          text: error.response.data.message || error.message,
          icon: "error",
        });
      }
    };
    getRestaurants();

    // fetch("http://localhost:3000/restaurants")
    //   .then((res) => res.json())
    //   .then((response) => {
    //     setRestos(response);
    //     setFilteredRestos(response);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
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
