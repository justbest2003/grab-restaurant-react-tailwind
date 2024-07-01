import React from "react";

const Card = ({ id, img, title, type }) => {
  const handleDelete = async(id) => {
    try {
      const response = await fetch("http://localhost:3000/restaurants/" + id, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Restaurant deleted = " + id + " successfully!");
        window.location.reload();
      }
    } catch (error) {
      
    }
  }
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{type}</p>
        <div className="card-actions justify-end">
          <a href={`/edit/${id}`} className="btn btn-primary">Edit</a>
          <button className="btn btn-error" type="submit" onClick={()=> handleDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
