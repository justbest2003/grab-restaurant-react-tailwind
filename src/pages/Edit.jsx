import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import RestaurantService from "../services/restaurant.service";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    imageUrl: "",
  });

  useEffect(() => {
    RestaurantService.getRestaurantById(id).then((response) => {
      if(response.status === 200){
        setRestaurant(response.data)
      }
    })
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await RestaurantService.editRestaurant(id, restaurant);
        if (response.status === 200) {
            Swal.fire({
                title: "Restaurant Updated",
                text: response.data.message,
                icon: "success", 
            });
            navigate("/"); 
        }
    } catch (error) {
        Swal.fire({
            title: "Restaurant Update Failed",
            text: error?.response?.data?.message || error.message,
            icon: "error",
        });
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
              name="name"
              id="name"
              value={restaurant.name}
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
              value={restaurant.type}
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
              name="imageUrl"
              id="imageUrl"
              value={restaurant.imageUrl}
              onChange={handleChange}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
