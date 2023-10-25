import React from "react";
import "./Style.css";
class Popup extends React.Component {
  render() {
    return (
      <div className="Popup">
        <div className="Popup-Inner">
          <h1 className="Close" onClick={this.props.onClick}>
            X
          </h1>
          <br />
          <br />
          <center>
            <span className="Tick">&#10003;</span>
          </center>
          <h2 className="Text2">
            Hello Visitor, You Have <br /> Successfully Signed Up!
          </h2>
        </div>
      </div>
    );
  }
}
export default Popup;
