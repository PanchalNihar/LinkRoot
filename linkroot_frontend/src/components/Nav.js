import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Nav() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const navigate = useNavigate();
  const { onLogout } = useContext(AuthContext);

  const handleLogout = async () => {
    await onLogout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-md w-full h-16 flex items-center fixed top-0 z-50">
      <div className="w-full flex justify-between items-center px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          {/* Changed Link to a regular anchor tag */}
          <a href="/" className="flex title-font font-medium items-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
              LinkRoot
            </span>
          </a>
        </div>

        {/* Navigation Links */}
        {isDashboard ? (
          <div className="flex gap-6 items-center">
            <Link
              to="/dashboard"
              className="text-gray-900 text-lg font-semibold hover:text-teal-500 transition duration-300"
            >
              Dashboard
            </Link>
            <button
              className="btn btn-outline btn-sm px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-lg transition duration-300 flex items-center"
              onClick={handleLogout}
            >
              Logout
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Link
              to="/"
              className="text-gray-900 text-lg font-medium hover:text-teal-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/register"
              className="text-gray-900 text-lg font-medium hover:text-teal-500 transition duration-300"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
