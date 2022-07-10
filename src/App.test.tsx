import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './app/store';
import App from './App';

describe('App', () => {

  it('should render title', () => {
    renderApp();
    expect(screen.getByText(/rrts-starter/i)).toBeInTheDocument();
  });

});

function renderApp() {
  return render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}
