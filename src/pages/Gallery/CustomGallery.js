import React from "react";
import { Breadcrumb, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../Footer/Footer";

import galleryImg1 from "../../assets/img/gallery/1.jpg";
import galleryImg2 from "../../assets/img/gallery/2.jpg";
import galleryImg3 from "../../assets/img/gallery/3.jpg";
import galleryImg4 from "../../assets/img/gallery/4.jpg";
import galleryImg5 from "../../assets/img/gallery/5.jpg";
import galleryImg6 from "../../assets/img/gallery/6.jpg";
import galleryImg7 from "../../assets/img/gallery/7.jpg";
import galleryImg8 from "../../assets/img/gallery/8.jpg";
import galleryImg9 from "../../assets/img/gallery/9.jpg";

class CustomGallery extends React.Component {
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
              <h1>Gallery</h1>
              <Link to="/dashboard" className="breadcrumb-item">
                Dashboard
              </Link>
              <Breadcrumb.Item active>Gallery</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {/* End Breadcrumb */}

          {/* Gallery area */}
          <Row>
            <Col lg={12}>
              <div className="card-columns mb-3">
                <div className="item mb-3">
                  <Image src={galleryImg1} alt="Logo" />
                </div>

                <div className="item mb-3">
                  <Image src={galleryImg2} alt="Logo" />
                </div>

                <div className="item mb-3">
                  <Image src={galleryImg3} alt="Logo" />
                </div>

                <div className="item mb-3">
                  <Image src={galleryImg4} alt="Logo" />
                </div>

                <div className="item mb-3">
                  <Image src={galleryImg5} alt="Logo" />
                </div>

                <div className="item mb-3">
                  <Image src={galleryImg6} alt="Logo" />
                </div>

                <div className="item mb-3">
                  <Image src={galleryImg7} alt="Logo" />
                </div>

                <div className="item mb-3">
                  <Image src={galleryImg8} alt="Logo" />
                </div>

                <div className="item mb-3">
                  <Image src={galleryImg9} alt="Logo" />
                </div>
              </div>
            </Col>
          </Row>
          {/* End Gallery area */}

          {/* Footer  */}
          <div className="flex-grow-1"></div>
          <Footer />
          {/* End Footer  */}
        </div>
      </div>
    );
  }
}

export default CustomGallery;
