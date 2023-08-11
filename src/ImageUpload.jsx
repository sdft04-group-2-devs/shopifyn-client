import React from "react";
import { Image, Transformation } from "cloudinary-react";

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
  
    // import React, { useState } from 'react';
function ImageUpload() {
  const [img, setImg] = useState([]);
  const [url, setUrl] = useState('');
  const handleUpload = (e) => {
    let file = e.target.files[0];
    let form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'testCase');
    console.log("file:", form);
    setImg(form);
  }
  function uploadImg() {
    const cloudName = "dtg2cthkk"; 
    fetch(`https://api.cloudinary.com/v1_1/dtg2cthkk/image/upload`, {
      method: 'POST',
      body: img
    })
    .then(res => res.json())
    .then(data => {
      console.log("handleUpload -> data:", data);
      setUrl(data.secure_url);
      return data.url; 
    })
    .catch(error => {
      console.error("Error uploading image:", error);
    });
  }

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      <button onClick={uploadImg}>Upload</button>
      {url && <img src={url} alt="Uploaded" />}
    </div>
  )
}
// export default App;
//   }
//   return (
//     <div>
//       <h2>Cloudinary Upload Widget</h2>
//       <Image
//         cloudName="dtg2cthkk"
//         uploadPreset="vfl93iff"
//         onClick={handleUploadSuccess}
//         onError={handleUploadError}
//       >
//         <input type="file"  onChange={uploadIMG} />
        
//     </div>
//   );
// };
export default ImageUpload;