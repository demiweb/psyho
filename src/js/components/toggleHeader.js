import { throttle } from 'throttle-debounce';

class Header {
  constructor(header) {
    this.header = header;
    this.transparent = header.classList.contains('header--transp');
  }

  _scroll() {
    if (!this.transparent) return;
    if (window.pageYOffset > 100) {
      this.header.classList.remove('header--transp');
    } else {
      this.header.classList.add('header--transp');
    }
  }

  _addListeners() {
    this.onScroll = throttle(66, this._scroll.bind(this));
    window.addEventListener('scroll', this.onScroll);
  }

  init() {
    this._addListeners();
  }
}

export default function toggleHeader() {
  const header = document.querySelector('.js-header');

  if (!header) return;

  const h = new Header(header);
  h.init();
}
