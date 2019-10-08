import Popup from '../lib/popup';

// class MyPopup extends Popup {
//   constructor() {
//     super();
//     this.lightboxImg = null;
//   }

//   getElements() {
//     this.lightboxImgSrc = this.btn.dataset.lightboxImg;
//     this.lightboxImg = this.popup.querySelector('.js-lightbox-img');
//   }

//   onOpen() {
//     this.getElements();
//     if (this.lightboxImg) {
//       this.lightboxImg.style.backgroundImage = `url(${this.lightboxImgSrc})`;
//     }
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
