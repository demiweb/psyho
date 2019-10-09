import { debounce } from 'throttle-debounce';
import Ellipsity from '../lib/truncate';

export default function truncateText() {
  const blocks = [...document.querySelectorAll('.js-truncate-text')];

  if (!blocks.length) return;

  blocks.forEach((el) => {
    const block = el;
    const text = block.innerText;
    const showBtn = block.parentNode.querySelector('.js-truncate-show');
    block.innerHTML = `<p>${text}</p>`;

    const ellipsity = new Ellipsity({
      container: block,
      showBtn,
    });
    ellipsity.init();

    function truncate() {
      block.innerHTML = `<p>${text}</p>`;
      ellipsity.init();
    }

    const truncateDebounced = debounce(300, truncate);
    window.addEventListener('resize', truncateDebounced);
  });
}
