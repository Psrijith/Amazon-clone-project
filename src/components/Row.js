import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Row.css";

function Row({ query, h1Content }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=HI7t4yPrfM1o2_jvwYoPJYOctcitH6Jm0LfZ9dydx-A`
        );
        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAPI();
  }, [query]);

  return (
    <div className="row">
      <div className="head">
        <h1>{h1Content}</h1>
      </div>
      <div className="scrollable-row">
        {data.length > 0 ? (
          data.map((photo) => (
            <img
              key={photo.id}
              src={photo.urls.small}
              alt={photo.alt_description}
              className="row_image"
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Row;
