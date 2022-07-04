import parse from 'html-react-parser';

import twigTemplate from './button-zy.twig';
import data from './button-zy.yml';

const settings = {
  title: 'Components/WACHS/Button Zy'
};

const Primary = args =>
  parse(
    twigTemplate({
      ...args,
      modifier_classes: 'button--primary',
    })
  );
Primary.args = { ...data };

const Secondary = args =>
  parse(
    twigTemplate({
      ...args,
      modifier_classes: 'button--secondary',
    })
  );
Secondary.args = { ...data };

const Tertiary = args =>
  parse(
    twigTemplate({
      ...args,
      modifier_classes: 'button--tertiary',
    })
  );
Tertiary.args = { ...data };

const Small = args =>
  parse(
    twigTemplate({
      ...args,
      modifier_classes: 'button--primary button-zy--small',
    })
  );
Small.args = { ...data };

const ButtonWithIcon = args =>
  parse(
    twigTemplate({
      ...args,
      modifier_classes: 'button--primary',
    })
  );
ButtonWithIcon.args = { ...data, is_icon: true, text: 'Text' };

const ButtonWithIconRight = args =>
  parse(
    twigTemplate({
      ...args,
      modifier_classes: 'button--secondary',
    })
  );
ButtonWithIconRight.args = { ...data, is_icon: true, text: 'Text', icon_position: 'right' };

const ButtonWithIconRightAndLeft = args =>
  parse(
    twigTemplate({
      ...args,
      modifier_classes: 'button--secondary',
    })
  );
ButtonWithIconRightAndLeft.args = { ...data, is_icon: true, text: 'Text', icon_position: 'both' };

const ButtonWithIconOnly = args =>
  parse(
    twigTemplate({
      ...args,
      modifier_classes: 'button--primary',
    })
  );
ButtonWithIconOnly.args = { ...data, is_icon: true, text: 'Text', icon_only: true };

const SmallButtonWithIcon = args =>
  parse(
    twigTemplate({
      ...args,
      modifier_classes: 'button--primary button-zy--small',
    })
  );
SmallButtonWithIcon.args = { ...data, is_icon: true, text: 'Text' };

const Pills = args =>
  parse(
    twigTemplate({
      ...args,
      modifier_classes: 'button--primary',
    })
  );
Pills.args = { ...data, is_pill: true, text: 'Default' };

const PillsWithIcon = args =>
  parse(
    twigTemplate({
      ...args,
      modifier_classes: 'button--secondary',
    })
  );
PillsWithIcon.args = { ...data, is_pill: true, is_icon: true, icon_name: 'close', text: 'Available' };

export default settings;
export { Primary, Secondary, Tertiary, Small, ButtonWithIcon, ButtonWithIconRight, ButtonWithIconRightAndLeft, ButtonWithIconOnly, SmallButtonWithIcon, Pills, PillsWithIcon };
