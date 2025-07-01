import React from "react";
import Navigation from "../../components/Navigation/Navigation";

class Dashboard extends React.Component {
  state = {
    sideMenu: true,
  };

  _onSideMenu = (active) => {
    this.setState({ sideMenu: active });
  };

  render() {
    return (
      <div className="page-wrapper">
        <Navigation onClick={this._onSideMenu} />
        <div className={`main-content ${this.state.sideMenu ? "hide-sidemenu" : ""}`}>
          <div className="main-content-header">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
