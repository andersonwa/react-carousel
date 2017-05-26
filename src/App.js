import React, { Component } from 'react';
import './App.css';
var slideIndex = 1;
class App extends Component {
  componentDidMount() {
    this.showSlides(slideIndex);
  }

  plusSlides(n) {
    this.showSlides(slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(slideIndex = n);
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  render() {
    return (
      <div className="App">
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext" style={{ width: '100%' }}>1 / 3</div>
            <img src="http://lorempixel.com/400/200/" alt="lala" />
            <div className="text">Caption Text</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext" style={{ width: '100%' }}>1 / 3</div>
            <img src="http://lorempixel.com/400/200/" alt="lala" />
            <div className="text">Caption Text</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext" style={{ width: '100%' }}>1 / 3</div>
            <img src="http://lorempixel.com/400/200/" alt="lala" />
            <div className="text">Caption Text</div>
          </div>

          <a className="prev" onClick={this.plusSlides.bind(this, -1)}>&#10094;</a>
          <a className="next" onClick={this.plusSlides.bind(this, 1)}>&#10095;</a>
        </div>

        <div>
          <span className="dot" onClick={this.currentSlide.bind(this, 1)}></span>
          <span className="dot" onClick={this.currentSlide.bind(this, 2)}></span>
          <span className="dot" onClick={this.currentSlide.bind(this, 3)}></span>
        </div>
      </div>
    );
  }
}

export default App;
