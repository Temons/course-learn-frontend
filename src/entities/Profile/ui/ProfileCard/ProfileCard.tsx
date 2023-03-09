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
      <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('errorTitle')}
          text={t('errorBody')}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  return (
    <div className={classNames(cls.profileCard, mods, [className])}>
      <div className={cls.data}>

        {data?.avatar &&
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        }

        <Input
          value={data?.first}
          placeholder={t('yourName')}
          className={cls.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />

        <Input
          value={data?.lastname}
          placeholder={t('yourSurname')}
          className={cls.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />

        <Input
          value={data?.age}
          type="number"
          placeholder={t('yourAge')}
          className={cls.input}
          onChange={onChangeAge}
          readonly={readonly}
        />

        <Input
          value={data?.city}
          placeholder={t('yourCity')}
          className={cls.input}
          onChange={onChangeCity}
          readonly={readonly}
        />

        <Input
          value={data?.username}
          placeholder={t('userName')}
          className={cls.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />

        <Input
          value={data?.avatar}
          placeholder={t('yourAvatar')}
          className={cls.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />

        <CurrencySelect
          value={data?.currency}
          readonly={readonly}
          className={cls.input}
          onChange={onChangeCurrency}
        />

        <CountrySelect
          value={data?.country}
          readonly={readonly}
          className={cls.input}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
};
