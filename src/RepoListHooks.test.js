import React from 'react';
import {render, fireEvent, wait} from '@testing-library/react';

import RepoListHooks from './RepoListHooks.js';

test('Should be able to add new repositories', ()=> {
  const { getByTestId } = render(
    <RepoListHooks />
  );

  const input = getByTestId('new-repo-input');
  const form = getByTestId('new-repo-form');
  
  fireEvent.change(input, { target: { value: 'ReactJS' } });
  fireEvent.submit(form);

  expect(!!getByTestId('ReactJS')).toBeTruthy(); 
});


// test('Should be able to remove a repository', async ()=> {
//   const { getByTestId, queryByText } = render(
//     <RepoListHooks />
//   );

//   const input = getByTestId('new-repo-input');
//   const form = getByTestId('new-repo-form');
  
//   fireEvent.change(input, { target: { value: 'ReactJS' } });
//   fireEvent.submit(form);

//   const button = getByTestId('remove-button');

//   fireEvent.click(button);

//   await wait(() => {
//     expect(queryByText('ReactJS')).not.toBeInTheDocument()
//   })

// });