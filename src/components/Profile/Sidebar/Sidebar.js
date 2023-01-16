import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              width: "20%",
              background: "#f0f0f0",
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/admin">Home</Link>
              </li>
              <li>
                <Link to="/admin/properties">Properties</Link>
              </li>
              <li>
                <Link to="/admin/investment">Investment</Link>
              </li>
              <li>
                <Link to="/admin/users">Users</Link>
              </li>
            </ul>
          </div>
        </div>
      </Router>
    );
  }
}
