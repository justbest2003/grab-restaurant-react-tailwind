import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const menus = {
    ROLES_ADMIN: [
      { name: "HOME", link: "/" },
      { name: "ADD", link: "/add" },
    ],
    ROLES_MODERATOR: [
      { name: "HOME", link: "/" },
      { name: "ADD", link: "/add" },
    ],
    ROLES_USER: [{ name: "HOME", link: "/" }],
    
  };

  const roleAbbreviations = {
    ROLES_ADMIN: "ADMIN",
    ROLES_MODERATOR: "MOD",
    ROLES_USER: "USER",
  };

  return (
    <div className="navbar bg-base-100 rounded-lg shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {user &&
              menus[user.roles[0]].map((menuItem) => (
                <li key={menuItem.name}>
                  <a href={menuItem.link}>{menuItem.name}</a>
                </li>
              ))}

            {/* <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/add">Add</a>
            </li> */}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl">
          Grab Restaurant
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {user &&
            menus[user.roles[0]].map((menuItem) => (
              <li key={menuItem.name}>
                <a href={menuItem.link}>{menuItem.name}</a>
              </li>
            ))}

          {/* <li>
            <a href="/">HOME</a>
          </li> */}
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        {user && (
          <div className="text-center">
            Welcome : <span className="font-medium">{user.username}</span>
            <div className="space-x-1 font-normal ">
              {user.roles.map((role, index) => (
                <span
                  key={index}
                  className="badge badge-primary badge-outline text-xs"
                >
                  {roleAbbreviations[role]}
                </span>
              ))}
            </div>
          </div>
        )}

        {user ? (
          <UserProfile />
        ) : (
          <div className="space-x-2">
            <LoginButton />
            <RegisterButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
