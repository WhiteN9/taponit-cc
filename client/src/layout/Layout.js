import React from "react";
import Main from "./Main";
import "./Layout.css";

/**
 * Layout and Routes of the application
 *
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 side-bar">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default Layout;
