import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  );
  // const linkElement = screen.getByText(/Stay curious./i);
  // screen.debug()
  // expect(linkElement).toBeInTheDocument();
});
