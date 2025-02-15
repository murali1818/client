import React from "react";
import { Link,useLocation  } from "react-router-dom";
import { FaMoneyBill, FaChartLine, FaUsers, FaFire, FaChartBar, FaBoxOpen, FaUserCircle, FaTachometerAlt } from "react-icons/fa";

const Sidebar = () => {
    const location = useLocation();
  
    const navItems = [
        { name: "Dashboard", link: "/dashboard", icon: <FaTachometerAlt /> },
        { name: "Billing", link: "/billing", icon: <FaMoneyBill /> },
        { name: "Products", link: "/products", icon: <FaBoxOpen /> },
        { name: "Customers", link: "/customers", icon: <FaUserCircle /> },
        { name: "Wholesalers", link: "/wholesalers", icon: <FaUsers /> },
        { name: "Price Analysis", link: "/price-analysis", icon: <FaChartLine /> },
        { name: "Trending Products", link: "/trending-products", icon: <FaFire /> },
        { name: "Forecasting", link: "/forecasting", icon: <FaChartBar /> },
       
      ];

  return (
    <div className="h-screen w-64 bg-gray-700 text-white flex flex-col p-3 shadow-lg shadow-gray-500/50 fixed">
      
      <ul className="space-y-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              className={`flex items-center gap-4 py-3 px-5 rounded-md transition duration-300 ${location.pathname === item.link ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-m font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
