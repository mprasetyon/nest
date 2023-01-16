import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "../layout/Layout";
import { history } from "../helper/history";

import Home from "./Home";
// import About from "./About/TcPage";
import TermsAndConditions from "./About/TermsAndConditions";
import PrivacyPolicy from "./About/PrivacyPolicy";
import OurTeam from "./About/OurTeam";
import Risk from "./About/Risk";
import Investment from "./Investment";
import InvestmentDetail from "./../components/Investment/InvestmentDetail";

import Dashboard from "./Dashboard";
import FAQ from "./Faq";
import Login from "./Login";
import SignUp from "../components/SignUp/SignUp";
import SignUp2 from "../components/SignUp/SignUp2";
import ContactUs from "../components/ContactUs/contactus";
import Aboutus from "../components/About/Aboutus";
import Portofolio from "../components/Dashboard/Portofolio";
import Assets from "../components/Dashboard/Assets";
import Dividen from "../components/Dashboard/Dividen";
import Transaction from "../components/Dashboard/Transaction";
import TransactionDetail from "../components/Dashboard/TransactionDetail";
import Deposit from "../components/Dashboard/Deposit";
import Withdraw from "../components/Dashboard/Withdraw";

// import Admin from "./Admin";

import MainAdmin from "../components/Profile/MainAdmin";
import AdminHome from "../components/Profile/Admin/Home";
import AdminProperties from "../components/Profile/Admin/Properties";
import AdminAddProperty from "../components/Profile/Admin/AddProperty";
import AdminInvestment from "../components/Profile/Admin/Investment";
import AdminUsers from "../components/Profile/Admin/Users";
import AdminUsersDetail from "../components/Profile/Admin/UsersDetail";

import EditProfile from "../components/Profile/EditProfile";
// import Profile from "../components/Profile/Profile";
// import UpdateProfile from "../components/Profile/UpdateProfile";

//NO Match
import NoMatch from "../layout/NoMatch";

export default function index() {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path={["/nestapp", "/", "/home"]} component={Home} />
          <Route exact path="/investment" component={Investment} />
          <Route path="/detailinvestment/:id" component={InvestmentDetail} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/deposit" component={Deposit} />
          <Route exact path="/portofolio" component={Portofolio} />
          <Route exact path="/assets" component={Assets} />
          <Route exact path="/dividen" component={Dividen} />
          <Route exact path="/transaction" component={Transaction} />
          <Route path="/detailtransaction/:id" component={TransactionDetail} />
          <Route exact path="/withdraw" component={Withdraw} />
          <Route
            exact
            path="/about/TermsAndConditions"
            component={TermsAndConditions}
          />
          <Route exact path="/about/PrivacyPolicy" component={PrivacyPolicy} />
          <Route exact path="/about/OurTeam" component={OurTeam} />
          <Route exact path="/about/Risk" component={Risk} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signup-2" component={SignUp2} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/aboutus" component={Aboutus} />


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
                <Route exact path="/admin/user-detail/:id" component={AdminUsersDetail} />
              </div>
            </Switch>
          </MainAdmin>

          <Route exact path="/editprofile" component={EditProfile} />

          <Route path="/*">
            <NoMatch />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
