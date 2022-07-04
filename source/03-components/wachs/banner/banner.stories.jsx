import parse from 'html-react-parser';

import twigTemplate from './banner.twig';
import data from './banner.yml';

const settings = {
  title: 'Components/wachs/Banner'
};

const Banner = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Banner.args = { ...data };

const BannerWarning = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
BannerWarning.args = { ...data, type: 'warning' };

const BannerError = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
  BannerError.args = { ...data, type: 'error' };
export default settings;
export { Banner, BannerWarning, BannerError };
