import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('correct work with only first param', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('correct work with only first param', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
