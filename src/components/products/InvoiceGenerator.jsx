import React, { useState, useEffect } from 'react';
import { FaTrash, FaPlus, FaPrint, FaCheckCircle } from 'react-icons/fa';

const InvoiceGenerator = () => {
    const [products, setProducts] = useState([{ name: '', quantity: 1, price: 0 }]);

    const addProduct = () => {
        setProducts([...products, { name: '', quantity: 1, price: 0 }]);
    };

    const removeProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
    };

    const updateProduct = (index, field, value) => {
        const updatedProducts = [...products];
        updatedProducts[index][field] = value;
        setProducts(updatedProducts);
    };

    const calculateTotal = () => {
        return products.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2);
    };

    const handleSubmit = () => {
        alert('Invoice submitted successfully!');
    };

    const handlePrint = () => {
        alert('Invoice printed successfully!');
    };

    return (
        <div className="p-6 md:p-10 lg:p-16 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🧾 Invoice Generator</h2>

                {/* Product List */}
                {products.map((product, index) => (
                    <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between">
                        <div className="flex flex-col md:flex-row w-full md:space-x-4">
                            {/* Product Name */}
                            <div className="flex-1">
                                <label className="text-gray-600 text-sm">Product Name</label>
                                <input
                                    type="text"
                                    value={product.name}
                                    onChange={(e) => updateProduct(index, 'name', e.target.value)}
                                    className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter product name"
                                />
                            </div>

                            {/* Quantity */}
                            <div className="flex-1">
                                <label className="text-gray-600 text-sm">Quantity</label>
                                <input
                                    type="number"
                                    value={product.quantity}
                                    onChange={(e) => updateProduct(index, 'quantity', parseInt(e.target.value))}
                                    className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Price */}
                            <div className="flex-1">
                                <label className="text-gray-600 text-sm">Price</label>
                                <input
                                    type="number"
                                    value={product.price}
                                    onChange={(e) => updateProduct(index, 'price', parseFloat(e.target.value))}
                                    className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Total */}
                            <div className="flex-1 text-center">
                                <label className="text-gray-600 text-sm">Total</label>
                                <p className="mt-2 text-lg font-semibold text-gray-800">${(product.quantity * product.price).toFixed(2)}</p>
                            </div>
                        </div>

                        {/* Remove Button */}
                        <button onClick={() => removeProduct(index)} className="mt-4 md:mt-0 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                            <FaTrash />
                        </button>
                    </div>
                ))}

                {/* Add Product Button */}
                <div className="text-center mt-6">
                    <button onClick={addProduct} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                        <FaPlus className="inline-block mr-2" /> Add Product
                    </button>
                </div>

                {/* Summary Section */}
                <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800">Total Price: <span className="text-green-600">${calculateTotal()}</span></h3>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
                    <button onClick={handleSubmit} className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 mb-2 md:mb-0">
                        <FaCheckCircle className="inline-block mr-2" /> Submit Invoice
                    </button>
                    <button onClick={handlePrint} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                        <FaPrint className="inline-block mr-2" /> Print Invoice
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvoiceGenerator;
