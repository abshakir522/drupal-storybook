import Twig from 'twig';
import { addDecorator } from '@storybook/react';
import { useEffect } from '@storybook/client-api';
import once from '@drupal/once';
import twigDrupal from 'twig-drupal-filters';
import twigAttributes from 'add-attributes-twig-extension';
import keysort from '../lib/keysort';
import uniqueId from '../lib/uniqueId';

import '../dist/css/styles.css';
import './_drupal';
import sprite from '../dist/images/sprite.artifact.svg';
global.once = once;
import jquery from 'jquery';
global.$ = jquery;
global.jQuery = jquery;

function setupTwig(twig) {
  twig.cache();
  twigDrupal(twig);
  twigAttributes(twig);
  keysort(twig);
  uniqueId(twig);
  return twig;
}

setupTwig(Twig);

addDecorator(storyFn => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return storyFn();
});

export const parameters = {
  layout: 'fullscreen',
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Global',
        ['Color Palette', '*'],
        'Layouts',
        'Components',
        'Templates',
        'Pages',
      ],
      includeName: true,
    },
  },
};

fetch(sprite)
    .then(r => r.text())
    .then(text => {
        let el = document.querySelector('.svg-sprite');
        el.innerHTML = text + el.innerHTML;
    })
    .catch(console.error.bind(console));