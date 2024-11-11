import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  // Detect scroll position for sticky navbar
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/course">Course</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto px-4 fixed top-0 right-0 left-0 ${
        isSticky ? "bg-gray-100 shadow-md" : ""
      } dark:bg-slate-800 transition-all`}
    >
      <div className="navbar">
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                className="w-6 h-6"
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
            </button>
            <ul className="dropdown-content bg-white rounded-box shadow-lg mt-3 w-52 p-2 z-10">
              {navItems}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold">
            bookSTORE
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        {/* End section with search and login */}
        <div className="navbar-end space-x-3">
          <div className="hidden md:flex items-center">
            <input
              type="text"
              className="input input-bordered"
              placeholder="Search"
            />
          </div>
          <button
            className="btn bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </button>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
