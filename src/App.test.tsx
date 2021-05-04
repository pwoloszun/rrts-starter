import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './app/store';

function renderApp() {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

test('renders learn react link', () => {
  renderApp();
  expect(screen.getByText(/rrts-starter/i)).toBeInTheDocument();
});
