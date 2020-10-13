import React from 'react';
import { render, screen } from '@testing-library/react';
import UserView from '../components/user/UserView'
import testData from './testData.json'
import { Provider } from 'react-redux';
import { store } from '../app/store';

test('Renders ', () => {
  const { getByText } = render(
    <Provider store={store}>
      <UserView user={testData[0]} />
    </Provider>
  );

  expect(getByText('mojombo')).toBeInTheDocument();
});