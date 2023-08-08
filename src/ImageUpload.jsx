import React from "react";
import { Image, Transformation } from "cloudinary-react";

const ImageUpload = () => {
  const handleUploadSuccess = (result) => {
    console.log("Upload successful:", result);
    // You can handle the successful upload here, e.g., update the UI or store the uploaded URL.
    alert("Upload successful!");
  };

  const handleUploadError = (error) => {
    console.error("Upload error:", error);
    // You can handle the upload error here, e.g., display an error message to the user.
    alert("Error uploading the file. Please try again.");
  };

  return (
    <div>
      <h2>Cloudinary Upload Widget</h2>
      <Image
        cloudName="dtg2cthkk"
        uploadPreset="vfl93iff"
        onClick={handleUploadSuccess}
        onError={handleUploadError}
      >
        <Transformation width="300" height="200" crop="fill" />
      </Image>
    </div>
  );
};

export default ImageUpload;
