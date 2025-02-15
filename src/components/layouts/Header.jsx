import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchIcon } from '@heroicons/react/outline';

const Header = () => {
    const isAuthenticated = !!Cookies.get('token');
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/v1/logout");
            toast.success(response.data.message);
            Cookies.remove('token');
            navigate('/');
        } catch (error) {
            toast.error("Failed to logout. Please try again.");
        }
    };

    return (
        <nav className="bg-gray-800 p-3 shadow-md shadow-gray-500/50 fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="text-white text-2xl font-bold" to={"/"}>
                    Advanced Retail Management System
                </Link>
                {isAuthenticated ? (
                    <div className="flex items-center space-x-4">
                        {/* Search Bar */}
                        <form className="hidden sm:flex items-center">
                            <div className="relative">
                                <input
                                    className="px-4 py-2 pl-10 pr-12 rounded-l-md border-none focus:ring-2 focus:ring-gray-600"
                                    type="search"
                                    placeholder="Search"
                                />
                                <div className="absolute top-0 left-0 flex items-center h-full pl-3">
                                    <SearchIcon className="h-6 w-6 text-gray-400" />
                                </div>
                                <button
                                    className="px-4 py-2 bg-gray-700 text-white rounded-r-md hover:bg-gray-800"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </div>
                        </form>

                        {/* Profile Dropdown */}
                        <div className="relative">
                            <button
                                className="focus:outline-none"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <img
                                    src={'/images/image.png'}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full cursor-pointer"
                                />
                            </button>
                            {dropdownOpen && (
                                <div
                                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-gray-700"
                                    onMouseLeave={() => setDropdownOpen(false)} // Close when mouse leaves
                                >
                                    <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-400" to="/dashboard" onClick={() => setDropdownOpen(false)}>
                                    Dashboard
                                    </Link>
                                    <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-400" to="/myprofile" onClick={() => setDropdownOpen(false)}>
                                        Profile
                                    </Link>
                                    <button
                                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 hover:text-red-800"
                                        onClick={() => {
                                            handleLogout();
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <Link className="bg-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-900 hover:text-gray-100" to={"/login"}>
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Header;
