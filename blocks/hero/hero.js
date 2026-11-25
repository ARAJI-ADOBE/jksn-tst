/**
 * Split option: image beside the text instead of behind it.
 * Collects the first picture from any row/cell as the media, and everything
 * else (heading, paragraphs, lists, links) as the text content.
 * @param {Element} block The hero block element
 */
function decorateSplit(block) {
  const picture = block.querySelector('picture');

  const content = document.createElement('div');
  content.className = 'hero-content';

  [...block.children].forEach((row) => {
    [...row.children].forEach((cell) => {
      [...cell.childNodes].forEach((node) => {
        if (picture && node.contains && node.contains(picture)) {
          // picture may be wrapped in a <p>; drop the wrapper, keep other siblings
          if (node !== picture) {
            picture.remove();
            if (node.textContent.trim() || node.querySelector('img, a')) content.append(node);
          }
          return;
        }
        if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) return;
        content.append(node);
      });
    });
  });

  const inner = document.createElement('div');
  inner.className = 'hero-inner';
  inner.append(content);

  if (picture) {
    const media = document.createElement('div');
    media.className = 'hero-media';
    media.append(picture);
    inner.append(media);
  } else {
    block.classList.add('hero-no-media');
  }

  block.replaceChildren(inner);
}

export default function decorate(block) {
  if (block.classList.contains('split')) decorateSplit(block);
}
