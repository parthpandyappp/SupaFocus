import React from "react";
import { userState } from "../states";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { IoIosFlash } from "react-icons/io";

const Nav = () => {
  const { authUser, isLoggedIn } = useRecoilValue(userState);
  const navigate = useNavigate();
  const setLoginStatus = useSetRecoilState(userState);
  const handleLogout = () => {
    setLoginStatus({ authUser, isLoggedIn: false });
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="flex flex-col gap-2  w-5/6 md:w-3/6 mx-auto">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold flex gap-1 items-center">
          <IoIosFlash />
          SupaFocus
        </h1>

        <div>
          {!isLoggedIn ? (
            <a
              href="http://localhost:3001/auth"
              className="bg-gray-100/20 px-3 font-light rounded text-xs py-2"
            >
              Login
            </a>
          ) : (
            <div className="flex gap-2 items-center">
              <p className="text-xs flex gap-1 hidden md:block">
                Welcome, {authUser?.firstName}{" "}
                <span className="animate-bounce">👋</span>
              </p>
              <img
                src={authUser.pic}
                className="border border-2 w-8 rounded border border-main p-0.5 shadow"
                alt=""
                referrerPolicy="no-referrer"
              />
              <button
                className="bg-gray-100/20 px-2 rounded text-xs py-0.5"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <hr className="divide-y-4 divide-gray-400 md:divide-y-8 text-gray-400" />
    </nav>
  );
};

export { Nav };
