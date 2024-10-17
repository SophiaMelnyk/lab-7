import React, { useState } from "react";

function Image() {
  const [addedImage, setAddedImage] = useState(null);
  const [imageSize, setImageSize] = useState(600);

  const addImage = () => {
    if (!addedImage) {
      setAddedImage(
        <div>
          <img
            src="/image/lviv.jpg"
            alt="Львів"
            width={imageSize}
            style={{ display: "block", margin: "20px 0" }}
          />
          <p>
            <a
              href="https://visitlviv.net/wp-content/uploads/2023/11/lviv-313.webp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Гіперпосилання на дане фото
            </a>
          </p>
          <p>
            Детальніше про місто можна дізнатись на{" "}
            <a href="https://lviv.travel" target="_blank" rel="noopener noreferrer">
              офіційному сайті Львова
            </a>
            .
          </p>
        </div>
      );
    }
  };

  const removeImage = () => {
    setAddedImage(null);
  };

  const increaseImage = () => {
    setImageSize((prevSize) => prevSize + 50);
  };

  const decreaseImage = () => {
    setImageSize((prevSize) => (prevSize > 50 ? prevSize - 50 : prevSize));
  };

  return (
    <div>
      {addedImage}
      <button onClick={addImage}>Додати зображення</button>
      <button onClick={removeImage}>Видалити зображення</button>
      <button onClick={increaseImage}>Збільшити зображення</button>
      <button onClick={decreaseImage}>Зменшити зображення</button>
    </div>
  );
}

export default Image;