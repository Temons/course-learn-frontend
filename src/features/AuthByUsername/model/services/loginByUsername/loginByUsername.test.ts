import axios from 'axios';
import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock('axios');

describe('loginByUsername test', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;
  //
  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // })

  // test('works correctly with correct data', async () => {
  //   const userValue = { username: '123', id: '1'  };
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
  //   const action = loginByUsername({ password: "123", username: "321" });
  //   const result = await action(dispatch, getState, undefined);
  //
  //   // @ts-ignore
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
  //   expect(dispatch).toHaveBeenCalledTimes(3)
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userValue)
  // })
  //
  // test('works correctly with error', async () => {
  //   const userValue = { username: '123', id: '1'  };
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ statue: 403 }));
  //   const action = loginByUsername({ password: "123", username: "321" });
  //   const result = await action(dispatch, getState, undefined);
  //
  //   // @ts-ignore
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toBe('username or password wrong :(')
  // })

  test('works correctly with correct data', async () => {
    const userValue = { userName: '123', id: '1'  };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await thunk.callThunk({ password: "123", username: "321" });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue)
  })

  test('works correctly with error', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ statue: 403 }));

    const result = await thunk.callThunk({ password: "123", username: "321" });


    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('username or password wrong :(')
  })
})