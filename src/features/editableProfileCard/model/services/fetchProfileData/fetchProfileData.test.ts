import { fetchProfileData } from './fetchProfileData';

import { Currency } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const data = {
  username: 'Username',
  age: 42,
  city: 'Lisbon',
  lastname: 'lastname',
  first: 'first',
  currency: Currency.EUR,
};

describe('fetchProfileData test', () => {
  test('works correctly with correct data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('works correctly with error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ statue: 403 }));

    const result = await thunk.callThunk('1');
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
