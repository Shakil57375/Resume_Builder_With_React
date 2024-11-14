import React, { useState } from "react";

function ImageUpload({ onImageUpload }) {
  const [image, setImage] = useState(null);

  // Handle file selection and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      onImageUpload(imageUrl); // Pass image URL to parent component
    }
  };

  // Reset image
  const handleRemoveImage = () => {
    setImage(null);
    onImageUpload(null); // Clear image in parent component as well
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Upload Profile Picture</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="border border-gray-300 p-2 rounded w-full"
      />

      {image && (
        <div className="relative">
          <img src={image} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
          <button
            onClick={handleRemoveImage}
            className="mt-2 text-blue-500 underline"
          >
            Remove Image
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
