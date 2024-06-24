import React, { useState, useEffect } from "react";
import Card from "./Card";

const Restaurant = () => {
  const [restos, setRestos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then((response) => {
        setRestos(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {restos &&
        restos.map((resto) => (
          <Card
            key={resto.id}
            img={resto.img}
            title={resto.title}
            type={resto.type}
          />
        ))}
    </div>
  );
};

export default Restaurant;
