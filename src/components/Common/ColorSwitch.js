import React from "react";

class ColorSwitch extends React.Component {
  state = {
    darkMenu: false,
  };

  onSideMenuHandler = () => {
    this.setState(
      (state) => ({ darkMenu: !state.darkMenu }),
      () => this.props.onClick(this.state.darkMenu)
    );
  };

  render() {
    return (
      <div className="side-menu-switch" title="Click to change sidebar color">
        <label className="switch">
          <input
            type="checkbox"
            className="light"
            onClick={this.onSideMenuHandler}
          />
          <span className="slider round"></span>
        </label>
      </div>
    );
  }
}
export default ColorSwitch;
