import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Add = () => {
  const [resto, setRestos] = useState({
    title: "",
    type: "",
    img: "",
  });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setRestos({ ...resto, [name]: value });
  };


  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        body: JSON.stringify(resto),
      });
      if(response.ok){
        alert("Restaurant added successfully!")
        setRestos({
          title: "",
          type: "",
          img: "",
        });
      }
    } catch (error) {
      console.log(error)
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
          <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
            ADD
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Add;
