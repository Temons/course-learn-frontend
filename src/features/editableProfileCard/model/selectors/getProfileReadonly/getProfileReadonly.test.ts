import { getProfileReadonly } from './getProfileReadonly';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileReadonly test', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test('should return error with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(false);
  });
});
