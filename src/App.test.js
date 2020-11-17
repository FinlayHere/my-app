import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('单元测试', () => {
  it('测试用例', () => {
    const foo = true
    expect(foo).toBeTruthy() // 期望 foo 变量的值为 true
  })
})