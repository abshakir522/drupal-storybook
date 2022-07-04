import parse from 'html-react-parser';

import twigTemplate from './popup.twig';
import data from './popup.yml';
import './popup.es6';
import './popup.demo';

const settings = {
  title: 'Components/WACHS/Pop up'
};

const Popup = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Popup.args = { ...data };

export default settings;
export { Popup };
