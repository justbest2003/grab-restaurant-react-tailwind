import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const addForm = () => {
  const [food, setFood] = useState({
    title: "",
    type: "",
    img: "https://cms.dmpcdn.com/food/2024/01/19/60acdbd0-b6ae-11ee-be74-a3cdac836376_webp_original.webp",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const restos = {
      title: food.title,
      type: food.type,
      img: food.img,
    };
    fetch("http://localhost:5000/restaurants", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(restos),
    })
      .then((res) => {
        alert("Add Sucessfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">TITLE</span>
          </label>
          <input
            type="text"
            placeholder="ชื่ออาหาร"
            className="input input-bordered"
            required
            name="title"
            id="title"
            value={food.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">TYPE</span>
          </label>
          <input
            type="text"
            placeholder="หมวดหมู่"
            className="input input-bordered"
            required
            name="type"
            id="type"
            value={food.type}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">IMAGE</span>
          </label>
          <input
            type="text"
            placeholder="รูปอาหาร"
            className="input input-bordered"
            required
            name="img"
            id="img"
            value={food.img}
            onChange={handleChange}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default addForm;
