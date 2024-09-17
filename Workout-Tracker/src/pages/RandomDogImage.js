// src/RandomDogImage.js
import React, { useState, useEffect } from "react";

const RandomDogImage = () => {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch a random dog image
  const fetchDogImage = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    } finally {
      setLoading(false);
    }
  };
  // Fetch image on component mount
  useEffect(() => {
    fetchDogImage();
  }, []);
  return (
    <div>
      <h1>Random Dog Image</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img
            src={dogImage}
            alt="Random Dog"
            style={{ width: "300px", height: "300px" }}
          />
          <br />
          <button onClick={fetchDogImage}>Fetch Another</button>
        </div>
      )}
    </div>
  );
};
export default RandomDogImage;
