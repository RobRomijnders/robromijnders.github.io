import Publications from "./publications/Publications";
import Footer from "../components/footer/Footer";
import Greeting from "./greeting/Greeting";
import Header from "../components/header/Header";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import React, { Component } from "react";
import Talks from "./talks/Talks";
import Top from "./topbutton/Top";
import WorkExperience from "./workExperience/WorkExperience";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Publications />
        <WorkExperience />
        <Projects />
        <Talks />
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
