import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      {/* Nav Start */}
      <div className="navbar-start">
        {/* Dropdown Manu */}
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
          {/* Manue */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/all_books"}>
                All Books
              </NavLink>
            </li>
            <li>
              <NavLink to={"/add_books"}>
                Add Books
              </NavLink>
            </li>
            <li>
              <NavLink to={"/borrowed_books"}>
                Borrow Books
              </NavLink>
            </li>
          </ul>
        </div>
        <p
          className="text-lg 
         flex items-center font-bold italic w-fit mx-auto mb-2"
        >
          <span className="text-3xl">Libra Assist</span>
        </p>
      </div>

      {/* Nav Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/all_books"}>
              All Books
            </NavLink>
          </li>
          <li>
            <NavLink to={"/add_books"}>
              Add Books
            </NavLink>
          </li>
          <li>
            <NavLink to={"/borrowed_books"}>
              Borrow Books
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Nav End */}
      <div className="navbar-end flex gap-1">
        <a className="btn">Log in</a>
        <a className="btn">Register</a>
      </div>
    </div>
  );
};

export default Nav;
