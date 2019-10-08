import Slider from './Slider';
import classNames from './classNames';

class MySlider {
  constructor(slider) {
    this.sliderClass = slider;
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
        items: 3,
        loop: true,
        nav: false,
        mouseDrag: true,
        center: true,
      },
    });
  }

  _initSliders() {
    this.sliders = [];

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
