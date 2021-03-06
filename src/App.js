import React, { useEffect } from "react";

import Layout from "./components/layout";
import Header from "./components/common/header";
import HeroSection from "./components/homepage/HeroSection";
import Introducing from "./components/homepage/Introducing";
import Features from "./components/homepage/Features";
import Craft from "./components/homepage/Craft";
import DesignDevelopment from "./components/homepage/DesignDevelopment";
import GetStartedBanner from "./components/homepage/GetStartedBanner";
import Footer from "./components/homepage/Footer";
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Login from "./components/login/login";
import FirstLogin from "./components/login/FirstLogin";
import Indicators from "./components/ants/Indicators";
import Backtest from "./components/ants/Backtest";
import Chat from "./components/ants/Chat";
import IndicatorDetail from "./components/ants/IndicatorDetail";
import Payment from "./components/ants/Payment";
import Community from "./components/ants/Community";
import ChatPage from "./components/ants/ChatPage/ChatPage";
import News from "./components/ants/News";
import { connect } from 'react-redux';

function App(props) {

  useEffect(() => {
    initializeUserInfo(props);
  });

  function initializeUserInfo(props) {

    var user_id = localStorage.getItem('userid');
    
    if (!user_id) {
      props.dispatch({ type: 'logout' });
    }
    else {
      var user_name = localStorage.getItem('username');
      props.dispatch({ type: 'login', payload: { loginstate: true, userid: user_id, username: user_name } });
    }

  };

  return (
    <div className="App">
      <Switch>

        <Layout>
          <Header />

          <Route exact path="/">
            <HeroSection />
            <Introducing />
            <Features />
            <Craft />
            <DesignDevelopment />
            <GetStartedBanner />
          </Route>

          <Route exact path="/Login">
            <Login />
          </Route>

          <Route exact path="/FirstLogin">
            <FirstLogin/>
          </Route>

          <Route exact path="/Indicators">
            <Indicators />
          </Route>

          <Route exact path="/Backtest">
            <Backtest />
          </Route>

          <Route exact path="/Community">
            <Community />
          </Route>

          <Route exact path="/Community/:boardid">
            <Community />
          </Route>

          <Route exact path="/Chat">
            <Chat />
          </Route>

          <Route exact path="/IndicatorDetail">
            <IndicatorDetail />
          </Route>

          <Route exact path="/Payment">
            <Payment />
          </Route>

          <Route exact path="/ChatPage">
            <ChatPage />
          </Route>


          <Route exact path="/News">
            <News />
          </Route>

          <Footer />
        </Layout>
      </Switch>
    </div>
  );
}

function userStateToProps(state) {

  return {
    userinfo: state.reducer
  }
}

export default connect(userStateToProps)(App);
