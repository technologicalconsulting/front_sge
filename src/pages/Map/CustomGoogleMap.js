import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../Footer/Footer";

class CustomGoogleMap extends React.Component {
  state = {
    sideMenu: true,
  };

  // Toggle side bar menu
  _onSideMenu = (active) => {
    this.setState({ sideMenu: active });
  };
  render() {
    return (
      <div className="page-wrapper">
        {/* Navigation */}
        <Navigation onClick={this._onSideMenu} />
        {/* End Navigation */}

        <div
          className={`main-content d-flex flex-column ${
            this.state.sideMenu ? "hide-sidemenu" : ""
          }`}
        >
          {/* Breadcrumb */}
          <div className="main-content-header">
            <Breadcrumb>
              <h1>Google Map</h1>
              <Link to="/dashboard" className="breadcrumb-item">
                Dashboard
              </Link>
              <Breadcrumb.Item active>Google Map</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {/* End Breadcrumb */}

          {/* GoogleMap area */}
          <Row>
            <Col lg={12}>
              <div className="map_content">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.575573988695!2d-116.90624048449843!3d33.92632153180213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db43ef7448b533%3A0xf4957aa224917e96!2sMountain%20View%20Ave%2C%20Banning%2C%20CA%2092220%2C%20USA!5e0!3m2!1sen!2sbd!4v1664784198783!5m2!1sen!2sbd"
                  style={{ width: "100%", border: "0", height: "700px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="This is a Google Map"
                ></iframe>
              </div>
            </Col>
          </Row>
          {/* End GoogleMap area */}

          {/* Footer  */}
          <div className="flex-grow-1"></div>
          <Footer />
          {/* End Footer  */}
        </div>
      </div>
    );
  }
}

export default CustomGoogleMap;
