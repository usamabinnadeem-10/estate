import React, { useState, useEffect } from "react";
import MultiImageInput from "react-multiple-image-input";

function Images(props) {
  const [images, setImages] = useState({});
  const [okImages, setOkImages] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    let temp = [];
    let err = false;
    for (var prop in images) {
      err = true;
      var stringLength = images[prop].length - "data:image/png;base64,".length;
      var sizeInBytes = 4 * Math.ceil(stringLength / 3) * 0.5624896334383812;
      var sizeInKb = sizeInBytes / 1000;
      sizeInKb <= 2048 && (err = false);
      sizeInKb <= 2048 && temp.push(images[prop]);
    }
    setError(err);
    setOkImages(temp);
  }, [images]);

  useEffect(() => {
    props.setState("images", okImages);
  }, [okImages]);

  return (
    <div className="d-flex flex-column card p-2 col-12 align-items-center my-3">
      <p>Please ensure that images are lesser than 2048 kB in size</p>
      <MultiImageInput
        images={images}
        setImages={setImages}
        allowCrop={false}
        theme="light"
        max={10}
      />
      {error && (
        <p className="text-danger">Please limit the file size to 2048 kB</p>
      )}
    </div>
  );
}

export default Images;
