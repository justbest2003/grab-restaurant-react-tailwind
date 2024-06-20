import React from "react";

const Restaurant = () => {
  const resto = {
    img: "",
    title: "",
    type: "",
  };
  return (
    <div className="">
      <Card img={resto.img} title={resto.title} type={resto.type} />
    </div>
  );
};

export default Restaurant;
