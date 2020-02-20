import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import RepoListHooks from './RepoListHooks.js';

test('Should be able to add new repositories', ()=> {
  const { container, getByTestId } = render(
    <RepoListHooks />
  );

  const input = getByTestId('new-repo-input');
  const form = getByTestId('new-repo-form');

  
  fireEvent.change(input, { target: { value: 'ReactJS' } });
  fireEvent.submit(form);

  console.log(container.innerHTML);
});