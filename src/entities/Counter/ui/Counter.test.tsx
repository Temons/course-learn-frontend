import { fireEvent, screen } from "@testing-library/react";

import { Counter } from "./Counter";

import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";
describe('Counter', () => {
  test('Test render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 11 } }
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })

  test('Test increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 11 } }
    });
    fireEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('12')
  })

  test('Test decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 111 } }
    });
    fireEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('110')
  })
})