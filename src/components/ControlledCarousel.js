import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class ControlledCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  //Récupère l'id blockchain de l'image actuelle affichée sur la page
  getIdAdDisplayed(activeIndex) {
    // prévoir si la blockchain est vide (aucune pub n'est enregistrée sur la blockchain)
    //return document.querySelector(".carousel-inner")
      //.childNodes[activeIndex].getAttribute("id");
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({ activeIndex: selectedIndex });
    this.props.updateAdIdDisplayed(this.getIdAdDisplayed(selectedIndex));
    //this.setState({ activeSlide: selectedIndex })
    //this.state.multicounter.methods.increment(selectedIndex).send({ from: '0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73' })
  };
  componentDidUpdate(prevProps, prevState) {
    const video = document.getElementById("active-video");
    if (video && video.play) { 
      video.play();
      video.onended = () => {
        const activeIndex = this.state.activeIndex;
        const itemsLength = this.props.adsToDisplay.length;
        const nextIndex = activeIndex < itemsLength - 1 ? activeIndex + 1 : 0;
        this.setState({
          activeIndex: nextIndex,
        });
        this.props.updateAdIdDisplayed(
          this.getIdAdDisplayed(this.state.activeIndex)
        );
      };
    }

    if (
      this.props.adsToDisplay !== prevProps.adsToDisplay &&
      !prevProps.adsToDisplay
    ) {
      this.props.updateAdIdDisplayed(
        this.getIdAdDisplayed(this.state.activeIndex)
      );
    }
  }
  componentDidMount() {}
  // prévoir un catch error si jamais la blockchain est éteinte
  render() {
    //  const listItem = this.state.activeIndex.map((item) => {
    //    return (
    //      <div key={item.id}>
    //        <span>{item.name}</span>{" "}
    //        <button onClick={this.delete.bind(this, item)}>Delete</button>
    //      </div>
    //    );
    //  });
    //Optimiser le render (shouldComponentDidmount() ? car le render est appelé au moins 2 fois)
    const activeIndex = this.state.activeIndex;
    const handleSelect = this.handleSelect;
    //const itemsToDisplay = this.itemsToDisplay
    //console.log("render", this.props.adsToDisplay)
    //console.log("render1", this.ImageSrc)
    //console.log("render2", this.props.adsToDisplay)
    //remettre this.adsToDisplay
    const itemsToDisplay = this.props.adsToDisplay;
    //const { player } = this.player.play(this.state.item.src);
    const ImageSrc =
      itemsToDisplay &&
      itemsToDisplay
        // .filter((item) => {
        //   return this.props.videosToHide.indexOf(item.address) == -1; 
        // })
        .map((item, itemIndex) => {
          //console.log("active index", activeIndex);
          return (
            <Carousel.Item key={item.address} id={item.address}>
              {/* {<img className="d-block w-100" src={item.src} alt="Carousel" />} */}
              <video
                alt="Carousel"
                className="video-container video-container-overlay"
                src={item.src}
                id={
                  itemIndex === activeIndex
                    ? "active-video"
                    : "video-" + itemIndex
                }
              />
            </Carousel.Item>
          );
        });
    return itemsToDisplay ? (
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={null}
      >
        {ImageSrc}
      </Carousel>
    ) : (
      <h2>En attente</h2>
    );
  }
}
