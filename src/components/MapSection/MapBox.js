import React from "react";

const MapBox = () => {
  return (
    <div className="map-box">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed/v1/place?q=20791+3+Oaks+Pkwy+Unit+594+Estero,+FL+33929&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        style={{ border: 0 }}
        aria-hidden={false}
        tabIndex={0}

      ></iframe>
    </div>
  );
};

export default MapBox;
