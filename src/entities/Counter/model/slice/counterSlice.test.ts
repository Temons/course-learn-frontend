import { CounterActions, CounterReducer } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe('counterSlice.test', () => {
  test('should decrement', () => {
    const state: CounterSchema = { value: 10 }
    expect(CounterReducer(state, CounterActions.decrement()))
      .toEqual({ value: 9 })
  })

  test('should increment', () => {
    const state: CounterSchema = { value: 10 }
    expect(CounterReducer(state, CounterActions.increment()))
      .toEqual({ value: 11 })
  })

  test('should work with empty state', () => {
    expect(CounterReducer(undefined, CounterActions.increment()))
      .toEqual({ value: 1 })
  })
})