import React, { useState } from 'react';
import { Trash2, Plus, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const AddCategory = () => {
  const [categories, setCategories] = useState([
    { id: 'javascript', name: 'JavaScript', icon: '⚡' },
    { id: 'wordpress', name: 'WordPress', icon: '🎨' },
    { id: 'php', name: 'PHP', icon: '🔧' },
    { id: 'mobile', name: 'Mobile', icon: '📱' },
    { id: 'html', name: 'HTML5', icon: '🌐' },
    { id: 'plugins', name: 'Plugins', icon: '🔌' }
  ]);

  const [newCategory, setNewCategory] = useState({
    id: '',
    name: '',
    icon: ''
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory(prev => ({
      ...prev,
      [name]: value,
      id: name === 'name' ? value.toLowerCase().replace(/\s+/g, '-') : prev.id
    }));
    setError('');
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    
    // Validation
    if (!newCategory.name.trim() || !newCategory.icon.trim()) {
      setError('Please fill in all fields');
      return;
    }

    // Check for duplicate category
    if (categories.some(cat => cat.id === newCategory.id)) {
      setError('This category already exists');
      return;
    }

    // Add new category
    setCategories(prev => [...prev, newCategory]);
    
    // Reset form
    setNewCategory({ id: '', name: '', icon: '' });
    
    // Show success toast
    toast.success('Category added successfully!');
  };

  const handleDeleteCategory = (categoryId) => {
    setCategories(prev => prev.filter(cat => cat.id !== categoryId));
    toast.success('Category removed successfully!');
  };

  return (
    <div className="p-6">
      <div className=" rounded-2xl p-8 text-white shadow-lg mb-8">
        <h1 className="text-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">Category Management</h1>
        <p className="text-white/80 mt-2">Add and manage your product categories</p>
      </div>

      {/* Add Category Form */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Add New Category</h2>
        <form onSubmit={handleAddCategory} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Category Name
              </label>
              <input
                type="text"
                name="name"
                value={newCategory.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter category name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Category Icon (emoji)
              </label>
              <input
                type="text"
                name="icon"
                value={newCategory.icon}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter emoji icon (e.g., 📱)"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-500 dark:text-red-400 text-sm">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
            Add Category
          </button>
        </form>
      </div>

      {/* Categories List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Existing Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <span className="font-medium dark:text-white">{category.name}</span>
              </div>
              <button
                onClick={() => handleDeleteCategory(category.id)}
                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/50 rounded-full transition-colors"
                title="Delete category"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCategory;