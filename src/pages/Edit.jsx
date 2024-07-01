import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Add = () => {
  const { id } = useParams();
  const [resto, setRestos] = useState({
    title: "",
    type: "",
    img: "https://cms.dmpcdn.com/food/2024/01/19/60acdbd0-b6ae-11ee-be74-a3cdac836376_webp_original.webp",
  });

  useEffect(() => {
    fetch("http://localhost:3000/restaurants/" + id)
      .then((res) => res.json())
      .then((response) => {
        setRestos(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestos({ ...resto, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants/" + id, {
        method: "PUT",
        body: JSON.stringify(resto),
      });
      if (response.ok) {
        alert("Restaurant updated successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container flex flex-col items-center p-4 mx-auto space-y-6">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
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
              value={resto.title}
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
              value={resto.type}
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
              value={resto.img}
              onChange={handleChange}
            />
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmit}
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
