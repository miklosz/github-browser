import React from 'react';
import { Router, Route, MemoryRouter  } from 'react-router-dom'
import { render, screen, waitFor, waitForElementToBeRemoved  } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { createMemoryHistory } from 'history'

import UserView from '../components/user/UserView'
import testData from './testData.json'
import { Provider } from 'react-redux';
import { store } from '../app/store';

 test('Renders single user page', async () => {
    const route = '/user/miklosz'
    const history = createMemoryHistory()
    history.push(route)
    render(
    <Router history={history}>
      <Provider store={store}>
          <UserView />
      </Provider>
    </Router>
    );

  // check the URL
  expect(history.location.pathname).toBe(route);
  
  // check initial content (loading)
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.queryByText(/loading/i),)

  //   // check if data is loaded
  //   await waitFor(() => {
  //     expect(screen.getByText('miklosz')).toBeInTheDocument()
  //   })
  //   const userLogin = await screen.findByText('miklosz')
});