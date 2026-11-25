let consentCount = 0;

/**
 * Consent option: the paragraph before the CTA link becomes a checkbox label,
 * and the CTA stays disabled until the checkbox is ticked.
 * @param {Element} block The columns block element
 */
function decorateConsent(block) {
  block.querySelectorAll(':scope > div').forEach((row) => {
    const cells = [...row.children];
    const textCol = cells.find((c) => !c.classList.contains('columns-img-col')) || cells[cells.length - 1];
    if (!textCol) return;

    // CTA: last link in the text column that is not part of a list
    const links = [...textCol.querySelectorAll('a')].filter((a) => !a.closest('ul, ol'));
    const cta = links[links.length - 1];
    if (!cta) return;

    // make sure the CTA is a primary button even if the author did not bold it
    const ctaWrapper = cta.closest('p');
    if (ctaWrapper && ctaWrapper.textContent.trim() === cta.textContent.trim()) {
      ctaWrapper.classList.add('button-wrapper');
      const formatting = cta.closest('strong, em');
      if (formatting && ctaWrapper.contains(formatting)) formatting.replaceWith(cta);
    }
    if (!cta.classList.contains('button')) cta.classList.add('button');
    if (!['primary', 'secondary', 'accent'].some((c) => cta.classList.contains(c))) cta.classList.add('primary');

    // label: the plain paragraph immediately before the CTA's block-level container
    const ctaBlock = ctaWrapper || cta;
    let labelEl = ctaBlock.previousElementSibling;
    if (!labelEl || labelEl.tagName !== 'P' || labelEl.querySelector('a, picture')) labelEl = null;

    consentCount += 1;
    const id = `columns-consent-${consentCount}`;

    const field = document.createElement('div');
    field.className = 'columns-consent-field';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = id;
    const label = document.createElement('label');
    label.htmlFor = id;
    if (labelEl) {
      label.append(...labelEl.childNodes);
    } else {
      label.textContent = 'I understand';
    }
    field.append(input, label);

    if (labelEl) labelEl.replaceWith(field);
    else ctaBlock.before(field);

    const setEnabled = (enabled) => {
      if (enabled) {
        cta.removeAttribute('aria-disabled');
        cta.removeAttribute('tabindex');
      } else {
        cta.setAttribute('aria-disabled', 'true');
        cta.setAttribute('tabindex', '-1');
      }
    };

    cta.addEventListener('click', (e) => {
      if (cta.getAttribute('aria-disabled') === 'true') e.preventDefault();
    });
    input.addEventListener('change', () => setEnabled(input.checked));
    setEnabled(input.checked);
  });
}

export default function decorate(block) {
  const cols = [...(block.firstElementChild?.children || [])];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });

  if (block.classList.contains('consent')) decorateConsent(block);
}
