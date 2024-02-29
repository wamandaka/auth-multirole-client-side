import React, { Dispatch } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.auth);

  const logout = () => {
    dispatch(Logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="flex h-screen flex-col justify-between bg-white dark:border-gray-700 dark:bg-gray-900 md:w-64 mt-16 fixed">
      <div className="px-4 ">
        <ul className="mt-6 space-y-1">
          <p className="px-1 text-xs font-semibold text-gray-200 uppercase">
            General
          </p>
          <li>
            <NavLink
              to="/dashboard"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/product"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Products
            </NavLink>
          </li>

          {user && user.role === "admin" && (
            <div>
              <p className="px-1 text-xs font-semibold text-gray-200 uppercase">
                Admin
              </p>
              <li>
                <NavLink
                  to="/users"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Users
                </NavLink>
              </li>
            </div>
          )}

          <p className="px-1 text-xs font-semibold text-gray-200 uppercase">
            Setting
          </p>
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm font-medium"> Account </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Details
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Security
                  </a>
                </li>

                <li>
                  <form action="#">
                    <button
                      onClick={logout}
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="fixed inset-x-0 bottom-0 border-t border-gray-100 w-64 text-base-300">
        <a
          href="/dashboard"
          className="flex items-center gap-2 bg-white p-3 hover:bg-gray-50 "
        >
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="w-10 h-10 rounded-full object-cover "
          />

          <div>
            <p className="text-xs flex flex-col">
              <strong className="text-xl">{user?.name}</strong>

              <span>{user?.email}</span>
              <span>{user?.role}</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
