import React from "react";
import { useAuthContext } from "../context/AuthContext";

const UserProfile = () => {
  const { user } = useAuthContext();
  const maskingString = (str, start, end) => {
    if (
      !str ||
      start < 0 ||
      start > str.length ||
      end < 0 ||
      end > str.length ||
      start > end
    ) {
      return str;
    }
    const maskedStr =
      str.substring(0, start) + "*".repeat(20) + str.substring(end);
    return maskedStr;
  };
  return (
    <div className="container flex flex-col items-center p-8 mx-auto space-y-6">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="User"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">UserProfile!</h2>
          <p>Use ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user?.roles.map((role) => role).join(", ")}</p>
          <p>
            Token:{" "}
            {maskingString(user.accessToken, 3, user.accessToken.length - 3)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
