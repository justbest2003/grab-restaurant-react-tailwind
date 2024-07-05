import React from "react";
import Swal from 'sweetalert2';

const Card = ({ id, img, title, type }) => {
  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'คุณแน่ใจที่จะลบหรือไม่?',
        text: "คุณจะไม่สามารถเปลี่ยนกลับสิ่งนี้ได้!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ยืนยันลบ!',
        cancelButtonText: 'ยกเลิก',
      });

      if (result.isConfirmed) {
        const response = await fetch("http://localhost:3000/restaurants/" + id, {
          method: "DELETE",
        });

        if (response.ok) {
          Swal.fire(
            'ลบเรียบร้อย!',
            'ร้านอาหารถูกลบแล้ว',
            'success'
          ).then(() => {
            window.location.reload();
          });
        } else {
          throw new Error('เกิดข้อผิดพลาดในการลบ!');
        }
      }
    } catch (error) {
      Swal.fire(
        'Error!',
        'Failed to delete the restaurant.',
        'error'
      );
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
          <button className="btn btn-error" type="submit" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;