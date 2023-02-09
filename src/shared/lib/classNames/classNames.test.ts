import { classNames } from "./classNames";

describe('classNames', () => {
  test('correct work with only first param', () => {
    expect(classNames('classNames')).toBe('classNames')
  })

  test('correct work with add params', () => {
    const expected = 'classNames addCls1 addCls2'
    expect(
      classNames('classNames', {}, ['addCls1', 'addCls2'])
    ).toBe(expected)
  })

  test('correct work with mods', () => {
    const expected = 'classNames addCls1 addCls2 hovered scrollable'
    expect(
      classNames('classNames', { hovered:true, scrollable: true }, ['addCls1', 'addCls2'])
    ).toBe(expected)
  })

  test('correct work with one mode false', () => {
    const expected = 'classNames addCls1 addCls2 scrollable'
    expect(
      classNames('classNames', { hovered:false, scrollable: true }, ['addCls1', 'addCls2'])
    ).toBe(expected)
  })

  test('correct work with one mode undefined', () => {
    const expected = 'classNames addCls1 addCls2 hovered'
    expect(
      classNames('classNames', { hovered:true, scrollable: undefined }, ['addCls1', 'addCls2'])
    ).toBe(expected)
  })
})