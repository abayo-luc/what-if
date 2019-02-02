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
//redux things
import axios from "axios";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isLoading: true
    };
  }
  componentDidMount = () => {
    axios
      .get("/api/events")
      .then(res => {
        const {
          data: { events }
        } = res;
        console.log(events);
        this.setState({
          events: [...events]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <About />
        <Services />
        <section className="experience py-5" id="experience">
          <div className="container py-3">
            <h3 className="heading">Events</h3>
            {this.state.events.map((event, index) => {
              return (
                <div key={index}>
                  <EventSingle id={index + 1} event={event} />
                </div>
              );
            })}
          </div>
        </section>
        <RecentArticles />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
