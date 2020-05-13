import React, { Component } from "react";
//stateless functional component
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar {props.totalCounters}
      </a>
    </nav>
  );
};
/*
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          {this.props.totalCounters}
        </a>
      </nav>
    );
  }
}
*/
export default NavBar;
