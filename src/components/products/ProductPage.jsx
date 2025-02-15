import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFilePdf, FaFileExcel, FaPrint, FaRedo, FaPlus, FaUpload, FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const products = [
    { id: 1, name: 'Lenovo 3rd Generation', sku: 'PT001', category: 'Laptop', brand: 'Lenovo', price: '$12500.00', qty: 100, creator: 'Arroon', image: '/images/laptop.png' },
    { id: 2, name: 'Bold V3.2', sku: 'PT002', category: 'Electronics', brand: 'Bolt', price: '$1600.00', qty: 140, creator: 'Kenneth', image: '/images/headphones.png' },
    { id: 3, name: 'Nike Jordan', sku: 'PT003', category: 'Shoe', brand: 'Nike', price: '$6000.00', qty: 780, creator: 'Gooch', image: '/images/shoe.png' },
    { id: 4, name: 'Apple Series 5 Watch', sku: 'PT004', category: 'Electronics', brand: 'Apple', price: '$25000.00', qty: 450, creator: 'Nathan', image: '/images/watch.png' },
    { id: 5, name: 'Amazon Echo Dot', sku: 'PT005', category: 'Speaker', brand: 'Amazon', price: '$1600.00', qty: 477, creator: 'Alice', image: '/images/speaker.png' },
    { id: 1, name: 'Lenovo 3rd Generation', sku: 'PT001', category: 'Laptop', brand: 'Lenovo', price: '$12500.00', qty: 100, creator: 'Arroon', image: '/images/laptop.png' },
    { id: 2, name: 'Bold V3.2', sku: 'PT002', category: 'Electronics', brand: 'Bolt', price: '$1600.00', qty: 140, creator: 'Kenneth', image: '/images/headphones.png' },
    { id: 3, name: 'Nike Jordan', sku: 'PT003', category: 'Shoe', brand: 'Nike', price: '$6000.00', qty: 780, creator: 'Gooch', image: '/images/shoe.png' },
    { id: 4, name: 'Apple Series 5 Watch', sku: 'PT004', category: 'Electronics', brand: 'Apple', price: '$25000.00', qty: 450, creator: 'Nathan', image: '/images/watch.png' },
    { id: 5, name: 'Amazon Echo Dot', sku: 'PT005', category: 'Speaker', brand: 'Amazon', price: '$1600.00', qty: 477, creator: 'Alice', image: '/images/speaker.png' },
];

const ProductPage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-800 text-white p-6  shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Product List</h2>
                
                <div className="flex gap-2">
                    
                    <button className="bg-gray-900 p-2 rounded"><FaPrint /></button>
                    
                    <button onClick={() => navigate('/add-product')} className="bg-green-500 px-4 py-2 rounded-md flex items-center gap-2">
                        <FaPlus /> Add New Product
                    </button>
                    <button className="bg-blue-600 px-4 py-2 rounded-md flex items-center gap-2">
                        <FaUpload /> Import Product
                    </button>
                </div>
            </div>
            
            <input type="text" placeholder="Search" className="w-full p-2 rounded mb-4 text-black" />
            
            <table className="w-full border border-gray-700 rounded-lg">
                <thead>
                    <tr className="bg-gray-900 text-left">
                        <th className="p-3">Product</th>
                        <th className="p-3">SKU</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Brand</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Qty</th>
                        <th className="p-3">Created by</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id} className="border-b border-gray-700">
                            <td className="p-3 flex items-center gap-2"><img src={product.image} alt={product.name} className="w-10 h-10" /> {product.name}</td>
                            <td className="p-3">{product.sku}</td>
                            <td className="p-3">{product.category}</td>
                            <td className="p-3">{product.brand}</td>
                            <td className="p-3">{product.price}</td>
                            <td className="p-3">{product.qty}</td>
                            <td className="p-3">{product.creator}</td>
                            <td className="p-3 flex gap-2">
                                <button className="bg-gray-600 p-2 rounded-md"><FaEye /></button>
                                <button className="bg-blue-500 p-2 rounded-md"><FaEdit /></button>
                                <button className="bg-red-500 p-2 rounded-md"><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductPage;
