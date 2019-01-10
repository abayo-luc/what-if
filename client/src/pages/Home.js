import React, { Component } from "react";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import RecentArticles from "../components/RecentArticles";
import EventSingle from "../components/EventSingle";
import Services from "../components/Services";
import About from "../components/About";
import Banner from "../components/Banner";
import Header from "../components/Header";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <About />
        <Services />
        <EventSingle />
        <RecentArticles />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}
