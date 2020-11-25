import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('unit test', () => {
  it('hello world', () => {
    const foo = true
    expect(foo).toBeTruthy() // 期望 foo 变量的值为 true
  })
})