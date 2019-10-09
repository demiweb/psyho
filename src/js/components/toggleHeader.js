import { throttle } from 'throttle-debounce';

const IS_TRANSPARENT = 'header--transp';

class Header {
  constructor(header) {
    this.header = header;
    this.transparent = header.classList.contains(IS_TRANSPARENT);
  }

  toggleBgColor() {
    if (!this.transparent) return;

    if (window.pageYOffset > 100) {
      this.header.classList.remove(IS_TRANSPARENT);
    } else {
      this.header.classList.add(IS_TRANSPARENT);
    }
  }

  _scroll() {
    this.toggleBgColor();
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
