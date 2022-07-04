import parse from 'html-react-parser';
import twigTemplate from './notification.twig';
import data from './notification.yml';
import './notification.es6';

const settings = {
  title: 'Components/WACHS/Notification'
};

const Notification = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Notification.args = { ...data };

const NotificationSuccess = args =>
  parse(
    twigTemplate({
      ...args,
      color: 'success',
      actions: [
        {
        'url': "/node/1",
        'text': "Secondary",
        'modifier_classes': 'button--secondary button-zy--small',
        'is_icon': false,
        'is_button_tag': false
        }
      ]
    })
  );
NotificationSuccess.args = { ...data };

const NotificationWarning = args =>
  parse(
    twigTemplate({
      ...args,
      color: 'warning',
      actions: [
        {
        'url': "/node/1",
        'text': "Secondary",
        'modifier_classes': 'button--secondary button-zy--small',
        'is_icon': false,
        'is_button_tag': false
        },
        {
        'url': "/node/1",
        'text': "Secondary",
        // 'color': 'warning',
        'modifier_classes': 'button--secondary button-zy--small',
        'is_icon': false,
        'is_button_tag': false
        }
      ]
    })
  );
NotificationWarning.args = { ...data };

const NotificationDanger = args =>
  parse(
    twigTemplate({
      ...args,
      color: 'danger',
      actions: [
        {
        'url': "/node/1",
        'text': "Secondary",
        'modifier_classes': 'button--secondary button-zy--small',
        'is_icon': false,
        'is_button_tag': false
        },
        {
        'url': "/node/1",
        'text': "Secondary",
        // 'color': 'warning',
        'modifier_classes': 'button--secondary button-zy--small',
        'is_icon': false,
        'is_button_tag': false
        }
      ]
    })
  );
NotificationDanger.args = { ...data };

export default settings;
export { Notification, NotificationSuccess, NotificationWarning, NotificationDanger };
