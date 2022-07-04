import parse from 'html-react-parser';

import twigTemplate from './tooltips.twig';
import data from './tooltips.yml';
import './_tooltips.scss';
import './tooltips.es6';

const settings = {
  title: 'Components/WACHS/Tooltips'
};

const Tooltips = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Tooltips.args = { ...data };

export default settings;
export { Tooltips };
