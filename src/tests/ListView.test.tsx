import React from 'react';
import { render, screen } from '@testing-library/react';
import ListView from '../components/list/ListView'
import testData from './testData.json'
import { Provider } from 'react-redux';
import { store } from '../app/store';

test('Renders ', () => {
  const { getByText } = render(
    <Provider store={store}>
      <ListView users={testData} />
    </Provider>
  );
  expect(getByText('Github users browser')).toBeInTheDocument();
});