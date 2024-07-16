//U99350821
import React, { useState } from 'react';

const UploadButton = () => {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    alert('Image is being uploaded...');

    setTimeout(() => {
      setIsUploading(false);
      alert('Image uploaded successfully!');
    }, 3000); // Simulate a 3-second upload process
  };

  return (
    <div className="upload-button">
      <button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload Image'}
      </button>
    </div>
  );
};

export default UploadButton;
