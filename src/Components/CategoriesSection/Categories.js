import React from 'react';

const Categories = () => {
  const categories = [
    'Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports'
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Product Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{category}</h2>
            <p className="text-gray-600">Browse our {category.toLowerCase()} collection</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;