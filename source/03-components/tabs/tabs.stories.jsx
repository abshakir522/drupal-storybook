import parse from 'html-react-parser';

import twigTemplate from './tabs.twig';
import data from './tabs.yml';
import './tabs.scss';
import './tabs.es6';

const settings = {
  title: 'Components/WACHS/Tabs'
};

const Tabs = args =>
  parse(
    twigTemplate({
      ...args,
      tab_id:'my-tab'
    })
  );
Tabs.args = { ...data };

const TabsSmall = args =>
  parse(
    twigTemplate({
      ...args,
      modifier_classes:'tab--sm',
    })
  );
  TabsSmall.args = { ...data };

const TabsWithBG = args =>
  parse(
    twigTemplate({
      ...args,
      modifier_classes:'tab--bg'
    })
  );
  TabsWithBG.args = { ...data };

export default settings;
export { Tabs, TabsWithBG, TabsSmall };
