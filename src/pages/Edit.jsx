import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/restaurants/" + id, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resto),
      });
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'สำเร็จ!',
          text: 'แก้ไขข้อมูลร้านอาหารเรียบร้อย!'
        }).then(() => {
          navigate('/'); // นำทางกลับไปยังหน้าแรก
        });
      } else {
        throw new Error('Failed to update restaurant');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: error.message
      });
    }
  };

  return (
    <div className="container flex flex-col items-center p-4 mx-auto space-y-6">
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
            >
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;