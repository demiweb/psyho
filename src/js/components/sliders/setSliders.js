import Slider from './Slider';
import classNames from './classNames';

class MySlider {
  constructor(slider) {
    this.sliderClass = slider;
    this.sliders = [];
  }

  _getOptions() {
    this.getOptions = ({
      container, prevButton, nextButton, onInit,
    }) => ({
      cert: {
        container,
        prevButton,
        nextButton,
        onInit,
        items: 1,
        loop: false,
        nav: false,
        mouseDrag: true,
        responsive: {
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
        },
      },
    });
  }

  _initSliders() {
    this.containers.forEach((container) => {
      if (container.classList.contains(classNames.plugin.container)) return;

      const slider = new Slider(container, this.getOptions);
      slider.init();
      this.sliders.push(slider);
    });
  }


  init() {
    this.containers = [...document.querySelectorAll(this.sliderClass)];
    if (!this.containers.length) return;

    this._getOptions();
    this._initSliders();
  }
}

const mySlider = new MySlider('.js-slider');

export default mySlider;
