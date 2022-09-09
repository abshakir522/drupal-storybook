import parse from 'html-react-parser';
import React from 'react';
import { within, userEvent, fireEvent, screen, waitFor } from '@storybook/testing-library';

import { expect, jest } from '@storybook/jest';
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

const PopupOpen = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
PopupOpen.args = { ...data };

export default settings;
export { Popup, PopupOpen };
PopupOpen.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);
  // 👇 Simulate interactions with the component
    // setTimeout(async function(){
    //   fireEvent.click(screen.getByTestId('popup-info'));
    //   setTimeout(async function(){
    //     // 👇 Assert DOM structure
    //     await expect(
    //       screen.getByRole('dialog', {hidden: true})
    //     ).toBeInTheDocument();
    //     await waitFor(() => {
    //       userEvent.click(screen.getByText('×'));
    //     }, {timeout: 1000});
    //   }, 100);
    // }, 100);
    await waitFor(() => {
      // expect(
      //   screen.findByRole('dialog', {hidden: true})
      // ).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('popup-info'));
    }, {timeout: 5000, interval: 1000});

};