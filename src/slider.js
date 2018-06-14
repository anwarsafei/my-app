import React, { Component } from 'react';
import Slide from './slide'
import './slider.css'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 500,
      height: 1000,
      images: ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg', 'img-5.jpg', 'img-6.jpg', 'img-7.jpg']
    }
  }

  render() {
    return (
      <div className="vc" ref="iScroll"style={{ height: window.innerHeight , overflow: "auto" }}>
      <h2>Product Catalog</h2>
      <ul>
          {this.displayItems()}
      </ul>
      {this.state.loadingState? <p className="loading"> loading More Items..</p>: ""}
  </div>
    )
  }

  renderSlides() {
    const images = this.state.images;
    return (
      <div className="slider-items">
        {
          images.map((image, index) => {
            return (
              <Slide image={image} width={this.state.width} height={this.state.height} key={index} />
            )
          })
        }
      </div>
    )
  }

  displayItems() {
    var images = [];
    for (var k = 0; k <= this.state.images.length; k++) {
        images.push(<li key={k}>{this.renderSlides()} </li>);
    }
    return images;
  }

  componentDidMount() {
    this.refs.iScroll.addEventListener("scroll", () => 
    {
      if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight) 
      {
        this.loadMoreItems();
      }
    });
  }

  loadMoreItems() {
    this.setState({ loadingState: true });
    // you may call ajax instead of setTimeout
    let [first, ...rest] = this.state.images;
    let images =  [...rest, first];
    setTimeout(() => {
        this.setState({ items: this.setState({images: images}), loadingState: false });
    }, 1000);
  }
}