import parse from 'html-react-parser';

import twigTemplate from './stepper.twig';
import data from './stepper.yml';
import './stepper.css';
import './material';
import './stepper';
import './_stepper.scss';

const settings = {
  title: 'Components/WACHS/Stepper'
};

const Stepper = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Stepper.args = { ...data };

export default settings;
export { Stepper };

import './stepper.es6';