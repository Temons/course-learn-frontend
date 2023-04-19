import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { Text, TextTheme } from "@/shared/ui/Text/Text";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import {
  getProfileIsLoading
} from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import {
  getProfileValidateErrors
} from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { ProfileCard } from "@/entities/Profile";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import {
  EditableProfileCardHeader
} from "../EditableProfileCardHeader/EditableProfileCardHeader";
import { VStack } from "@/shared/ui/Stack";
import { ValidateProfileError } from "../../model/consts/consts";

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  profile: profileReducer
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR] : t('errorServer'),
    [ValidateProfileError.INCORRECT_COUNTRY] : t('errorIncorrectCountry'),
    [ValidateProfileError.INCORRECT_USER_DATA] : t('errorIncorrectUserData'),
    [ValidateProfileError.INCORRECT_CITY]: t('errorIncorrectCityValue'),
    [ValidateProfileError.INCORRECT_AGE] : t('errorIncorrectAge'),
    [ValidateProfileError.NO_DATA] : t(''),
  }

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }));
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value) }));
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch])


  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack
        gap={'8'}
        max
        className={classNames('', {}, [className])}
      >
        <EditableProfileCardHeader />
        {validateErrors?.length && validateErrors.map(err => (
          <Text
            theme={TextTheme.ERROR}
            key={err}
            text={validateErrorTranslates[err]}
            data-testid='EditableProfileCard.Error'
          />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});
