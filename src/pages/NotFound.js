import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
import Navigation from "../components/Navigation/Navigation";

class NotFound extends React.Component {
  state = { sideMenu: true };

  _onSideMenu = (active) => {
    this.setState({ sideMenu: active });
  };

  render() {
    return (
      <div className="page-wrapper">
        <Navigation onClick={this._onSideMenu} />
        <div className={`main-content ${this.state.sideMenu ? "hide-sidemenu" : ""}`}>
          <div className="error-content">
            <div className="d-table">
              <div className="d-tablecell">
                <Icon.Frown className="icon" />
                <h1>404</h1>
                <h4>Page not found</h4>
                <p>The page you are looking for might not exist!</p>
                <Link to="/dashboard/" className="back-link">
                  Back to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
