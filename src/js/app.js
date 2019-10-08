import 'core-js/features/symbol';
import 'core-js/features/array/from';
import 'core-js/features/promise';
import 'intersection-observer';
import './lib/polyfill';

import sayHello from './lib/sayHello';
import setHTMLClassNames from './components/setHTMLClassNames';
import setLazy from './components/setLazy';
import mySlider from './components/sliders/setSliders';
import setPopups from './components/setPopups';
import setGallery from './components/setGallery';
import setTextareaHeight from './components/setTextareaHeight';
import toggleHeader from './components/toggleHeader';

document.addEventListener('DOMContentLoaded', () => {
  sayHello();
  setHTMLClassNames();
  setLazy();

  setGallery();
  mySlider.init();
  setPopups();
  setTextareaHeight();
  toggleHeader();
});
