import React from "react";
import Swal from "sweetalert2";
import { useAuthContext } from "../context/AuthContext";
import RestaurantService from "../services/restaurant.service";

const Card = ({ id, imageUrl, name, type }) => {
  const { user } = useAuthContext();

  const handleDelete = async (e) => {
    e.preventDefault();

    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this restaurant? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        const response = await RestaurantService.deleteRestaurant(id);
        if (response.status === 200) {
          Swal.fire({
            title: "Restaurant Deleted",
            text: response.data.message,
            icon: "success",
          }).then(() => {
            window.location.reload();
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Restaurant Deletion Failed",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{type}</p>

        {user &&
          (user.roles.includes("ROLES_MODERATOR") ||
            user.roles.includes("ROLES_ADMIN")) && (
            <div className="card-actions justify-end">
              {user.roles.includes("ROLES_ADMIN") && (
                <button
                  className="btn btn-error"
                  type="submit"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              )}
              <a href={`/edit/${id}`} className="btn btn-primary">
                Edit
              </a>
            </div>
          )}
      </div>
    </div>
  );
};

export default Card;
