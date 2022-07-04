import parse from 'html-react-parser';

import twigTemplate from './breadcrumb.twig';
import data from './breadcrumb.yml';

const settings = {
  title: 'Components/wachs/Breadcrumb',
};

const Breadcrumb = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Breadcrumb.args = { ...data };

const BreadcrumbIcon = args => (
  parse(twigTemplate({
    ...args,
  }))
);
BreadcrumbIcon.args = { ...data, link_icon: true };

export default settings;
export { Breadcrumb, BreadcrumbIcon };
