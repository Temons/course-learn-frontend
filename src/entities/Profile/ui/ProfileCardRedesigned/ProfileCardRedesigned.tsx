import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileCardProps } from '../ProfileCard/ProfileCard';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile');

  return (
    <HStack max justify={'center'}>
      <Text
        variant={'error'}
        title={t('errorTitle')}
        text={t('errorBody')}
        align={'center'}
      />
    </HStack>
  );
};

export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card padding={'24'} max>
      <VStack gap={'32'}>
        <HStack max justify={'center'}>
          <Skeleton border={'100%'} width={128} height={128}></Skeleton>
        </HStack>
        <HStack gap={'32'} max>
          <VStack gap={'16'} max>
            <Skeleton width={'100%'} height={'38px'}></Skeleton>
            <Skeleton width={'100%'} height={'38px'}></Skeleton>
            <Skeleton width={'100%'} height={'38px'}></Skeleton>
            <Skeleton width={'100%'} height={'38px'}></Skeleton>
          </VStack>
          <VStack gap={'16'} max>
            <Skeleton width={'100%'} height={'38px'}></Skeleton>
            <Skeleton width={'100%'} height={'38px'}></Skeleton>
            <Skeleton width={'100%'} height={'38px'}></Skeleton>
            <Skeleton width={'100%'} height={'38px'}></Skeleton>
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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

  return (
    <Card padding={'24'} border={'partial'} max className={className}>
      <VStack gap={'32'}>
        {data?.avatar && (
          <HStack max justify={'center'}>
            <Avatar size={128} src={data?.avatar} />
          </HStack>
        )}
        <HStack gap={'24'} max>
          <VStack gap={'16'} max>
            <Input
              value={data?.first}
              label={t('yourName')}
              onChange={onChangeFirstname}
              readonly={readonly}
              data-testid={'ProfileCard.firstname'}
            />

            <Input
              value={data?.lastname}
              label={t('yourSurname')}
              onChange={onChangeLastname}
              readonly={readonly}
              data-testid={'ProfileCard.lastname'}
            />

            <Input
              value={data?.age}
              type="number"
              label={t('yourAge')}
              onChange={onChangeAge}
              readonly={readonly}
            />

            <Input
              value={data?.city}
              label={t('yourCity')}
              onChange={onChangeCity}
              readonly={readonly}
            />
          </VStack>
          <VStack gap={'16'} max>
            <Input
              value={data?.username}
              label={t('userName')}
              onChange={onChangeUsername}
              readonly={readonly}
            />

            <Input
              value={data?.avatar}
              label={t('yourAvatar')}
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
        </HStack>
      </VStack>
    </Card>
  );
});
