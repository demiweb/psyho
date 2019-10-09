import Popup from '../lib/popup';
import mySlider from './sliders/setSliders';

// class MyPopup extends Popup {
//   constructor() {
//     super();
//     this.lightboxImg = null;
//   }

//   getElements() {
//     this.lightboxImgSrc = this.btn.dataset.lightboxImg;
//     this.lightboxImg = this.popup.querySelector('.js-lightbox-img');
//     this.btnWrap = this.btn.parentNode;

//     if (this.btnWrap.classList.contains('js-slider')) {
//       mySlider.sliders.forEach((slider) => {
//         if (slider.container === this.btnWrap) {
//           this.lgThumbs = slider.slides;
//         }
//       });
//     }
//   }

//   createLgSlider() {
//     if (this.lgThumbs && this.lgThumbs.length > 0) {
//       this.lgSliderWrap = document.createElement('div');
//       this.lgSlider = document.createElement('div');
//       this.lgSliderWrap.className = 'slider__wrap slider--lightbox__wrap';
//       this.lgSlider.className = 'slider slider--lightbox js-slider';
//       this.lgSlider.setAttribute('data-slider', 'lightbox');


//       this.lgThumbs.forEach((thumb) => {
//         const src = thumb.dataset.lightboxImg;
//         const lgSlide = document.createElement('div');
//         lgSlide.className = 'slide';
//         lgSlide.style.backgroundImage = `url(${src})`;

//         this.lgSlider.appendChild(lgSlide);
//       });

//       this.lgSliderWrap.appendChild(this.lgSlider);
//       this.lightboxImg.appendChild(this.lgSliderWrap);


//       mySlider.init();

//       // console.log(mySlider);
//     }
//   }

//   onOpen() {
//     this.getElements();

//     this.createLgSlider();

//     // console.log(this.lgThumbs);

//     // if (this.lightboxImg) {
//     //   this.lightboxImg.style.backgroundImage = `url(${this.lightboxImgSrc})`;
//     // }
//   }

//   onClose() {
//     this.getElements();
//     if (this.lightboxImg) {
//       this.lightboxImg.style.backgroundImage = '';
//     }
//   }

//   init() {
//     super.init();
//   }
// }

export default function setPopups() {
  const myPopup = new Popup();
  myPopup.init();
}
