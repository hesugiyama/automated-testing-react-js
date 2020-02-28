import React from 'react';
import {render, fireEvent, waitForElementToBeRemoved} from '@testing-library/react';

import RepoListHooks from './index.js';

test('Should be able to render first item', () => {
  const {container} = render(
    <RepoListHooks />
  );

  const el = container.querySelector('#NodeJS');
  expect(!!el).toBeTruthy();
});


test('Should be able to add new repositories', () => {
  const {container} = render(
    <RepoListHooks />
  );

  const input = container.querySelector('#new-repo-input');
  const form = container.querySelector('#new-repo-form');
  fireEvent.change(input, {target: {value: 'ReactJS'}});
  fireEvent.submit(form);
  expect(!!container.querySelector('#ReactJS')).toBeTruthy();
  expect(input.value).toBe('');
  console.log("input value: ", input.value);
});

test('Should be able to remove a repository', () => {
  const {container} = render(
    <RepoListHooks />
  );

  const input = container.querySelector('#new-repo-input');
  const form = container.querySelector('#new-repo-form');

  fireEvent.change(input, {target: {value: 'ReactJS'}});
  fireEvent.submit(form);

  const button = container.querySelector('#ReactJS-remove-button');
  waitForElementToBeRemoved(() => container.querySelector('#ReactJS'));
  fireEvent.click(button);
});