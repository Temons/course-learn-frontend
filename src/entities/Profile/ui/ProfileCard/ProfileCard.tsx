import { Profile } from '../../model/types/profile';
import {
  ProfileCardDeprecated,
  ProfileCardDeprecatedError,
  ProfileCardDeprecatedLoader,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import {
  ProfileCardRedesigned,
  ProfileCardRedesignedError,
  ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ToggleFeatures } from '@/shared/lib/features';

export interface ProfileCardProps {
  className?: string;
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
  const { isLoading, error } = props;

  if (isLoading) {
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedLoader />}
      />
    );
  }

  if (error) {
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={<ProfileCardRedesignedError />}
        off={<ProfileCardDeprecatedError />}
      />
    );
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={<ProfileCardRedesigned {...props} />}
      off={<ProfileCardDeprecated {...props} />}
    />
  );
};
