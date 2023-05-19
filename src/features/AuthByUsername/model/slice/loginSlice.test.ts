import { LoginSchema } from '../types/LoginSchema';

import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '12344' };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('124')),
    ).toEqual({ username: '124' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '124r23fr2' };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('qwe')),
    ).toEqual({ password: 'qwe' });
  });
});
