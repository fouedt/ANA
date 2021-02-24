import React, { Component, useState } from "react";

import { Container } from "semantic-ui-react";
import ControlledCarousel from "./components/ControlledCarousel";

import AdForm from "./components/AdForm";
import { storage } from "./firebase/index";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adsToDisplay: null,
    };
  }
  componentDidMount() {
    //récupération de la clefs du RPI
    /*
    fetch('http://localhost')
      .then(response => response.json())
      .then(data => this.setState({ pubKey: data.pubKey , privKey:data.privKey }));
    */
    /*
    fetch('http://localhost')
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
    */

    // fetch storage firebase
  }
 
  render() {
    const {
      adsToDisplay
    } = this.state;

    return (
      <Container>
        <div className="container">
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />

          <h3>Ajouter une vidéo</h3>
          <AdForm
            createTabAd={this.createTabAd}
          />
        </div>
        
        <div className="container">
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
          <ControlledCarousel
            //videosToHide={this.state.videosToHide}
            //updateAdIdDisplayed={updateAdIdDisplayed}
            adsToDisplay={adsToDisplay}
          />
        </div>
      </Container>
    );
  }
}
export default App;
