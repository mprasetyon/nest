import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { history } from "../helper/history";

import MainAdmin from "../components/Profile/MainAdmin";
import AdminHome from "../components/Profile/Admin/Home";
import AdminProperties from "../components/Profile/Admin/Properties";
import AdminAddProperty from "../components/Profile/Admin/AddProperty";
import AdminInvestment from "../components/Profile/Admin/Investment";
import AdminUsers from "../components/Profile/Admin/Users";

const Admin = () => {
  return (
    <Router history={history}>
      <Route>
        <MainAdmin>
          <Switch>
            <div style={{ flex: 1, padding: "10px" }}>
              <Route exact path="/admin" component={AdminHome} />

              <Route
                exact
                path="/admin/properties"
                component={AdminProperties}
              />
              <Route
                exact
                path="/admin/add-property"
                component={AdminAddProperty}
              />
              <Route
                path="/admin/edit-property/:id"
                component={AdminAddProperty}
              />

              <Route
                exact
                path="/admin/investment"
                component={AdminInvestment}
              />
              <Route exact path="/admin/users" component={AdminUsers} />
            </div>
          </Switch>
        </MainAdmin>
      </Route>
    </Router>
  );
};

export default Admin;
