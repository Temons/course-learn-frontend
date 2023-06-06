export { saveJsonSettings } from './model/services/saveJsonSettings';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { userReducer, userActions } from './model/slice/userSlice';
export type { User, UserSchema } from './model/types/user';
export {
  isUserAdmin,
  getUserRoles,
  isUserManager,
} from './model/selectors/roleSelectors';
export { UserRole } from './model/consts/userConsts';
export { useJsonSettings } from './model/selectors/jsonSettings';
export { initAuthData } from './model/services/initAuthData';
