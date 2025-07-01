import React from "react";

class MapContainer extends React.Component {
  render() {
    return (
      <div className="card mb-4">
        <div className="card-body">
          <div className="card-header">
            <h5 className="card-title">Map</h5>
          </div>
          <div className="map-content">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.575573988695!2d-116.90624048449843!3d33.92632153180213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db43ef7448b533%3A0xf4957aa224917e96!2sMountain%20View%20Ave%2C%20Banning%2C%20CA%2092220%2C%20USA!5e0!3m2!1sen!2sbd!4v1664784198783!5m2!1sen!2sbd"
              style={{ width: "100%", border: "0", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="This is a Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default MapContainer;
