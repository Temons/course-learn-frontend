import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from './ProfileCard.module.scss';
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";
import { HStack, VStack } from "shared/ui/Stack";

interface ProfileCardProps {
    className? : string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack
        max
        justify={'center'}
        className={classNames(cls.profileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </HStack>
    )
  }

  if (error) {
    return (
      <HStack
        max
        justify={'center'}
        className={classNames(cls.profileCard, {}, [className, cls.error])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('errorTitle')}
          text={t('errorBody')}
          align={TextAlign.CENTER}
        />
      </HStack>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  return (
    <VStack gap={'8'} max className={classNames(cls.profileCard, mods, [className])}>
      {data?.avatar &&
      <HStack max justify={'center'}>
        <Avatar src={data?.avatar} />
      </HStack>
      }

      <Input
        value={data?.first}
        placeholder={t('yourName')}
        onChange={onChangeFirstname}
        readonly={readonly}
      />

      <Input
        value={data?.lastname}
        placeholder={t('yourSurname')}
        onChange={onChangeLastname}
        readonly={readonly}
      />

      <Input
        value={data?.age}
        type="number"
        placeholder={t('yourAge')}
        onChange={onChangeAge}
        readonly={readonly}
      />

      <Input
        value={data?.city}
        placeholder={t('yourCity')}
        onChange={onChangeCity}
        readonly={readonly}
      />

      <Input
        value={data?.username}
        placeholder={t('userName')}
        onChange={onChangeUsername}
        readonly={readonly}
      />

      <Input
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
};
