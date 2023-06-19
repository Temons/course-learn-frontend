import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileCardProps } from '../ProfileCard/ProfileCard';

import cls from './ProfileCardDeprecated.module.scss';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import {
  Text as TextDeprecated,
  TextAlign,
  TextTheme,
} from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile');

  return (
    <HStack
      max
      justify={'center'}
      className={classNames(cls.profileCard, {}, [cls.error])}
    >
      <TextDeprecated
        theme={TextTheme.ERROR}
        title={t('errorTitle')}
        text={t('errorBody')}
        align={TextAlign.CENTER}
      />
    </HStack>
  );
};

export const ProfileCardDeprecatedLoader = () => {
  return (
    <HStack
      max
      justify={'center'}
      className={classNames(cls.profileCard, {}, [cls.loading])}
    >
      <Loader />
    </HStack>
  );
};

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const {
    className,
    data,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
  } = props;

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap={'8'}
      max
      className={classNames(cls.profileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack max justify={'center'}>
          <AvatarDeprecated src={data?.avatar} />
        </HStack>
      )}

      <InputDeprecated
        value={data?.first}
        placeholder={t('yourName')}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid={'ProfileCard.firstname'}
      />

      <InputDeprecated
        value={data?.lastname}
        placeholder={t('yourSurname')}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid={'ProfileCard.lastname'}
      />

      <InputDeprecated
        value={data?.age}
        type="number"
        placeholder={t('yourAge')}
        onChange={onChangeAge}
        readonly={readonly}
      />

      <InputDeprecated
        value={data?.city}
        placeholder={t('yourCity')}
        onChange={onChangeCity}
        readonly={readonly}
      />

      <InputDeprecated
        value={data?.username}
        placeholder={t('userName')}
        onChange={onChangeUsername}
        readonly={readonly}
      />

      <InputDeprecated
        value={data?.avatar}
        placeholder={t('yourAvatar')}
        onChange={onChangeAvatar}
        readonly={readonly}
      />

      <CurrencySelect
        value={data?.currency}
        readonly={readonly}
        onChange={onChangeCurrency}
      />

      <CountrySelect
        value={data?.country}
        readonly={readonly}
        onChange={onChangeCountry}
      />
    </VStack>
  );
});
