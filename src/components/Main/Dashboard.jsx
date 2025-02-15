import React from "react";
import { FaChartLine, FaMoneyBillWave, FaShoppingCart, FaUser, FaFileInvoice, FaStore, FaDollarSign } from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    { label: "Total Purchase Due", value: "$307,144", icon: <FaMoneyBillWave />, color: "bg-purple-600" },
    { label: "Total Sales Due", value: "$4,385", icon: <FaDollarSign />, color: "bg-green-600" },
    { label: "Total Sale Amount", value: "$385,656.5", icon: <FaShoppingCart />, color: "bg-blue-600" },
    { label: "Total Expense Amount", value: "$40,000", icon: <FaChartLine />, color: "bg-red-600" },
  ];

  const analytics = [
    { label: "Customers", value: 100, color: "bg-orange-500" },
    { label: "Suppliers", value: 110, color: "bg-cyan-500" },
    { label: "Purchase Invoice", value: 150, icon: <FaFileInvoice />, color: "bg-blue-700" },
    { label: "Sales Invoice", value: 170, icon: <FaStore />, color: "bg-green-600" },
  ];

  const recentProducts = [
    { name: "Lenovo 3rd Generation", price: "$12,500" },
    { name: "Bold V3.2", price: "$1,600" },
    { name: "Nike Jordan", price: "$2,000" },
    { name: "Apple Series 5 Watch", price: "$800" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold">Hi, John Smilga! Here's what's happening today.</h1>

      <div className="grid grid-cols-4 gap-6 mt-6">
        {stats.map((stat, index) => (
          <div key={index} className={`p-6 rounded-lg ${stat.color} flex items-center gap-4`}>
            <div className="text-4xl">{stat.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{stat.label}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-6 mt-6">
        {analytics.map((item, index) => (
          <div key={index} className={`p-6 rounded-lg ${item.color} flex items-center gap-4`}>
            <div className="text-4xl">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gray-700 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Recent Products</h3>
        <ul>
          {recentProducts.map((product, index) => (
            <li key={index} className="border-b py-2 flex justify-between">
              <span>{product.name}</span>
              <span className="text-green-400">{product.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
