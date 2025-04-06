import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-white shadow-md border-b border-gray-200 z-50">


      <div className="flex items-center justify-between text-sm py-4 px-5">
        <img
          onClick={() => navigate("/")}
          className="w-44 cursor-pointer"
          src={assets.logo}
          alt=""
        />
        <ul className="md:flex items-start gap-5 font-medium hidden">
          <NavLink to="/">
            <li className="py-1" onClick={() => scrollTo(0, 0)}>HOME</li>
          </NavLink>
          <NavLink to="/what-we-do">
            <li className="py-1" onClick={() => scrollTo(0, 0)}>WHAT WE DO</li>
          </NavLink>
          <NavLink to="/about">
            <li className="py-1" onClick={() => scrollTo(0, 0)}>WHAT WE ARE</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1" onClick={() => scrollTo(0, 0)}>CONTACT US</li>
          </NavLink>
          <NavLink to="/galary">
            <li className="py-1" onClick={() => scrollTo(0, 0)}>GALLERY</li>
          </NavLink>
        </ul>

        <div className="flex items-center gap-4">
          {token && userData ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img className="w-8 rounded-full" src={userData.image} alt="" />
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4">
                  <p
                    onClick={() => navigate("/my-profile")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/my-appointments")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Bookings
                  </p>
                  <p onClick={logout} className="hover:text-black cursor-pointer">
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
            >
              Login/SignUp
            </button>
          )}
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 md:hidden"
            src={assets.menu_icon}
            alt=""
          />

          {/* Mobile Menu */}
          <div
            className={`md:hidden ${
              showMenu ? "fixed w-full" : "h-0 w-0"
            } right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
          >
            <div className="flex items-center justify-between px-5 py-6">
              <img src={assets.logo} className="w-36" alt="" />
              <img
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                className="w-7"
                alt=""
              />
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
              <NavLink onClick={() => setShowMenu(false)} to="/">
                <p className="px-4 py-2 rounded-full inline-block">HOME</p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/doctors">
                <p className="px-4 py-2 rounded-full inline-block">
                  ALL SESSIONS
                </p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/about">
                <p className="px-4 py-2 rounded-full inline-block">ABOUT</p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/contact">
                <p className="px-4 py-2 rounded-full inline-block">CONTACT</p>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
