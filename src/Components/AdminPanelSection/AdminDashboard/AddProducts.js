import React, { useState, useEffect } from 'react';
import { 
  X, 
  ImageIcon, 
  Package, 
  Sparkles, 
  FolderIcon, 
  ChevronDown,
  DollarSign,
  Link as LinkIcon,  // Note: We're already using LinkIcon instead of Link
  FileText,
  Upload,
  Eye,
  Gift
} from 'lucide-react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    thumbnailImage: null,
    productImages: [], // Add this for multiple images
    productInfo: '',
    price: '',
    tutorialLink: '',
    productFile: null,
    resourceType: 'file', // Add this for resource type
    productLink: '', // Add this for product link
    category: '',
    priceType: 'free' // Add this for price type
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState([]); // Add this for preview

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        thumbnailImage: file
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        productFile: file
      }));
    }
  };

  // Add this function for handling multiple images
  const handleMultipleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    if (files.length > 0) {
      // Check if adding new files would exceed the 5 image limit
      if (formData.productImages.length + files.length > 5) {
        alert('You can only upload up to 5 images');
        return;
      }

      const newFiles = files.map(file => ({
        file,
        url: URL.createObjectURL(file)
      }));

      setFormData(prev => ({
        ...prev,
        productImages: [...prev.productImages, ...files]
      }));

      setAdditionalImagePreviews(prev => [...prev, ...newFiles]);
    }
  };

  // Add this function to remove individual images
  const removeMultipleImage = (index) => {
    // Revoke the URL object
    URL.revokeObjectURL(additionalImagePreviews[index].url);

    setFormData(prev => ({
      ...prev,
      productImages: prev.productImages.filter((_, i) => i !== index)
    }));

    setAdditionalImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  // Add cleanup effect
  useEffect(() => {
    return () => {
      // Cleanup function to revoke all object URLs
      additionalImagePreviews.forEach(preview => {
        if (preview.url) {
          URL.revokeObjectURL(preview.url);
        }
      });
    };
  }, [additionalImagePreviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const removeImage = () => {
    setImagePreview(null);
    setFormData(prev => ({
      ...prev,
      thumbnailImage: null
    }));
  };

  const removeFile = () => {
    setFormData(prev => ({
      ...prev,
      productFile: null
    }));
  };

  const removeLink = () => {
    setFormData(prev => ({
      ...prev,
      productLink: ''
    }));
  };

  const multipleImagesUploadSection = (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
        <ImageIcon className="w-4 h-4" />
        Additional Product Images
      </label>
      <div className={`group border-2 border-dashed rounded-xl transition-all duration-300 
        ${additionalImagePreviews.length > 0 
          ? 'border-blue-200 bg-blue-50/50' 
          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/30'}`}
      >
        <input
          type="file"
          id="productImages"
          accept="image/*"
          multiple
          onChange={handleMultipleImageChange}
          className="hidden"
        />
        <label
          htmlFor="productImages"
          className="cursor-pointer block p-6"
        >
          <div className="flex flex-col items-center py-4">
            <div className="mb-3 p-3 bg-blue-100 rounded-full">
              <ImageIcon className="w-8 h-8 text-blue-500" />
            </div>
            <span className="text-gray-700 font-medium">Add more product images</span>
            <span className="text-sm text-gray-500 mt-1">Up to 5 images</span>
          </div>
        </label>
      </div>

      {/* Preview Grid */}
      {additionalImagePreviews.length > 0 && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {additionalImagePreviews.map((preview, index) => (
            <div key={index} className="relative group aspect-square">
              <img
                src={preview.url}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => removeMultipleImage(index)}
                  className="p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200 shadow-lg"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                {(preview.file.size / (1024 * 1024)).toFixed(2)} MB
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const categories = [
    { id: 'javascript', name: 'JavaScript', icon: '⚡' },
    { id: 'wordpress', name: 'WordPress', icon: '🎨' },
    { id: 'php', name: 'PHP', icon: '🔧' },
    { id: 'mobile', name: 'Mobile', icon: '📱' },
    { id: 'html', name: 'HTML5', icon: '🌐' },
    { id: 'plugins', name: 'Plugins', icon: '🔌' }
  ];

 
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Enhanced Header Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white/20 backdrop-blur-lg rounded-xl">
              <Package className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Create New Product</h1>
              <p className="text-white/80 mt-2 text-lg">
                Craft an amazing product experience for your customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Form Section */}
        <div className="flex-grow lg:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Basic Information
                </h2>
              </div>

              {/* Product Name Input */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter product name"
                  required
                />
              </div>

              {/* Category Dropdown Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FolderIcon className="w-5 h-5 text-gray-600" />
                  Choose Category
                </label>
                <div className="relative">
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                      appearance-none transition-all duration-200"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.icon} {category.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Enhanced Description Input */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Description
                </label>
                <textarea
                  name="productInfo"
                  value={formData.productInfo}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Describe your product in detail..."
                  required
                />
              </div>

              {/* Enhanced Image Upload Section */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Product Images
                </label>
                <div className="space-y-4">
                  {/* Main Thumbnail */}
                  <div className={`border-2 border-dashed rounded-xl transition-all duration-300 
                    ${imagePreview ? 'border-blue-200 bg-blue-50/50' : 'border-gray-200'}`}
                  >
                    <input
                      type="file"
                      id="thumbnailImage"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="thumbnailImage"
                      className="cursor-pointer block p-6"
                    >
                      {imagePreview ? (
                        <div className="relative group">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="mx-auto max-h-48 object-contain rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <p className="text-white">Click to change image</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center py-8">
                          <div className="mb-3 p-4 bg-blue-100 rounded-full">
                            <ImageIcon className="w-8 h-8 text-blue-500" />
                          </div>
                          <p className="text-gray-700 font-medium">Drop your main image here</p>
                          <p className="text-sm text-gray-500 mt-1">or click to browse</p>
                        </div>
                      )}
                    </label>
                  </div>

                  {/* Additional Images Section */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-3">
                      <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                        <ImageIcon className="w-4 h-4" />
                        Additional Images
                      </label>
                      <span className="text-xs text-gray-500">
                        {additionalImagePreviews.length}/5 images
                      </span>
                    </div>
                    
                    <div className={`group border-2 border-dashed rounded-xl transition-all duration-300 
                      ${additionalImagePreviews.length > 0 
                        ? 'border-blue-200 bg-blue-50/50' 
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/30'}`}
                    >
                      <input
                        type="file"
                        id="productImages"
                        accept="image/*"
                        multiple
                        onChange={handleMultipleImageChange}
                        className="hidden"
                        disabled={additionalImagePreviews.length >= 5}
                      />
                      <label
                        htmlFor="productImages"
                        className={`cursor-pointer block p-4 ${additionalImagePreviews.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <div className="flex flex-col items-center py-4">
                          <div className="mb-3 p-3 bg-blue-100 rounded-full">
                            <ImageIcon className="w-6 h-6 text-blue-500" />
                          </div>
                          <span className="text-gray-700 font-medium">Add more product images</span>
                          <span className="text-sm text-gray-500 mt-1">Up to 5 images</span>
                        </div>
                      </label>
                    </div>

                    {/* Preview Grid */}
                    {additionalImagePreviews.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {additionalImagePreviews.map((preview, index) => (
                          <div key={index} className="relative group aspect-square">
                            <img
                              src={preview.url}
                              alt={`Product ${index + 1}`}
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                              <button
                                type="button"
                                onClick={() => removeMultipleImage(index)}
                                className="p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200 shadow-lg"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                              {(preview.file.size / (1024 * 1024)).toFixed(2)} MB
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Additional Images Section */}

            {/* Pricing & Resources Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-green-100 rounded-xl">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Pricing & Resources
                </h2>
              </div>

              {/* Price Type Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Type
                </label>
                <div className="flex gap-2">
                  {['paid', 'free'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData(prev => ({
                        ...prev,
                        priceType: type,
                        ...(type === 'free' ? { price: 0 } : {})
                      }))}
                      className={`px-3 py-2 rounded-lg border transition-all duration-200 flex items-center gap-1.5
                        ${formData.priceType === type
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-200'
                        }`}
                    >
                      {type === 'paid' ? (
                        <DollarSign className={`w-4 h-4 ${formData.priceType === type ? 'text-green-500' : 'text-gray-400'}`} />
                      ) : (
                        <Gift className={`w-4 h-4 ${formData.priceType === type ? 'text-green-500' : 'text-gray-400'}`} />
                      )}
                      <span className="font-medium capitalize text-sm">{type}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Input - Only shown when paid is selected */}
              {formData.priceType === 'paid' && (
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price (in ₹)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-gray-500 font-medium">₹</span>
                    </div>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="1999"
                      required
                      min="0"
                    />
                  </div>
                </div>
              )}

              {/* Tutorial Link Input */
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tutorial Link
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="productLink"
                    value={formData.productLink}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder=""
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <LinkIcon className="w-6 h-6 text-gray-400" />
                    <span className="text-gray-500 font-medium">Link</span>
                  </div>
                </div>
              </div>}

              {/* Resource Type Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Resource Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['file', 'link'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData(prev => ({
                        ...prev,
                        resourceType: type,
                        ...(type === 'file' ? { productLink: '' } : { productFile: null })
                      }))}
                      className={`p-4 rounded-xl border-2 transition-all duration-300
                        ${formData.resourceType === type
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-200'
                        }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        {type === 'file' ? (
                          <FileText className={`w-6 h-6 ${formData.resourceType === type ? 'text-purple-500' : 'text-gray-400'}`} />
                        ) : (
                          <LinkIcon className={`w-6 h-6 ${formData.resourceType === type ? 'text-purple-500' : 'text-gray-400'}`} />
                        )}
                        <span className="font-medium capitalize">{type}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Resource Input */}
              {formData.resourceType === 'file' ? (
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Product File
                  </label>
                  <div 
                    className={`border-2 border-dashed rounded-xl transition-all duration-300 
                      ${formData.productFile 
                        ? 'border-blue-200 bg-blue-50/50' 
                        : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50/20'
                      }`}
                  >
                    <input
                      type="file"
                      id="productFile"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".zip,.rar,.pdf"
                    />
                    {formData.productFile ? (
                      <div className="p-4">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-blue-100">
                          <div className="flex items-center">
                            <div className="p-2 bg-blue-50 rounded-lg mr-3">
                              <FileText className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                              <span className="text-gray-700 font-medium block">
                                {formData.productFile.name}
                              </span>
                              <span className="text-gray-400 text-sm">
                                {(formData.productFile.size / (1024 * 1024)).toFixed(2)} MB
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="p-2 hover:bg-red-50 rounded-full transition-colors group"
                            title="Remove file"
                          >
                            <X className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <label htmlFor="productFile" className="cursor-pointer block p-6">
                        <div className="flex flex-col items-center">
                          <div className="mb-3 p-4 bg-blue-100 rounded-full">
                            <Upload className="w-8 h-8 text-blue-500" />
                          </div>
                          <span className="text-gray-700 font-medium">Drop your file here</span>
                          <span className="text-sm text-gray-500 mt-1">or click to browse</span>
                          <div className="mt-4 flex items-center gap-4">
                            {['ZIP', 'RAR', 'PDF'].map((format) => (
                              <span key={format} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                                {format}
                              </span>
                            ))}
                          </div>
                          <span className="text-xs text-gray-400 mt-2">Maximum file size: 100MB</span>
                        </div>
                      </label>
                    )}
                  </div>
                </div>
              ) : (
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Link
                  </label>
                  <div className="space-y-2">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <LinkIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="url"
                        name="productLink"
                        value={formData.productLink}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-10 py-3 border rounded-xl transition-all duration-200
                          ${formData.productLink 
                            ? 'bg-blue-50/50 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                            : 'bg-gray-50 border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                          }`}
                        placeholder="https://example.com/your-product"
                        required={formData.resourceType === 'link'}
                      />
                      {formData.productLink && (
                        <button
                          type="button"
                          onClick={removeLink}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center group"
                          title="Clear link"
                        >
                          <X className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Sparkles className="w-4 h-4" />
                      <span>Tip: Make sure your link is accessible and points to the final product</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium"
                >
                  Create Product
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Live Preview Section */}
        <div className="lg:w-1/3">
          <div className="sticky top-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Eye className="w-5 h-5 text-purple-500" />
                Live Preview
              </h2>
              
              {/* Images Section */}
              <div className="mb-6">
                {/* Main Thumbnail */}
                <div className="rounded-xl overflow-hidden border border-gray-200 mb-4">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Product preview"
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Additional Images - Horizontal Scroll */}
                {additionalImagePreviews.length > 0 && (
                  <div className="mt-2">
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {additionalImagePreviews.map((preview, index) => (
                        <div 
                          key={index} 
                          className="relative flex-none w-24 h-24 group"
                        >
                          <img
                            src={preview.url}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg border border-gray-200"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs px-2 py-1 bg-black/60 rounded-full">
                              {(preview.file.size / (1024 * 1024)).toFixed(1)} MB
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Product Details Preview */}
              <div className="space-y-4">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {formData.name || 'Product Name'}
                </h3>

                {/* Category */}
                {formData.category && (
                  <div className="flex items-center gap-2">
                    <FolderIcon className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {categories.find(cat => cat.id === formData.category)?.name || formData.category}
                    </span>
                  </div>
                )}

                {/* Price */}
                {formData.price && (
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="text-2xl font-bold text-green-600">
                      ₹{parseFloat(formData.price).toLocaleString('en-IN')}
                    </span>
                  </div>
                )}

                {/* Description */}
                {formData.productInfo && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Description</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {formData.productInfo}
                    </p>
                  </div>
                )}

                {/* Resources Preview */}
                {(formData.tutorialLink || formData.productFile || formData.productLink) && (
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Resources</h4>
                    <div className="space-y-2">
                      {formData.tutorialLink && (
                        <div className="flex items-center gap-2 text-sm">
                          <LinkIcon className="w-4 h-4 text-blue-500" />
                          <a href={formData.tutorialLink} target="_blank" rel="noopener noreferrer" 
                             className="text-blue-500 hover:underline truncate">
                            Tutorial Link
                          </a>
                        </div>
                      )}
                      {formData.productFile && (
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="w-4 h-4 text-purple-500" />
                          <span className="text-purple-500 truncate">
                            {formData.productFile.name}
                          </span>
                        </div>
                      )}
                      {formData.productLink && (
                        <div className="flex items-center gap-2 text-sm">
                          <LinkIcon className="w-4 h-4 text-gray-500" />
                          <a href={formData.productLink} target="_blank" rel="noopener noreferrer" 
                             className="text-gray-600 hover:underline truncate">
                            Product Link
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Preview Notice */}
                <div className="mt-6 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 text-center">
                    This is a preview of how your product will appear to customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;