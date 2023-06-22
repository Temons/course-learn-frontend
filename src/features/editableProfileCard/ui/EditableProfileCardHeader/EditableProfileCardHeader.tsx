import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  ({ className }: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
      dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
      dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
      dispatch(updateProfileData());
    }, [dispatch]);

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <Card padding={'24'} border={'partial'} max>
            <HStack
              max
              justify={'between'}
              className={classNames('', {}, [className])}
            >
              <Text title={t('profile')} />
              {canEdit && (
                <>
                  {readonly ? (
                    <Button
                      onClick={onEdit}
                      data-testid={'EditableProfileCardHeader.EditButton'}
                    >
                      {t('edit')}
                    </Button>
                  ) : (
                    <HStack gap="8">
                      <Button
                        onClick={onCancelEdit}
                        data-testid={'EditableProfileCardHeader.CancelButton'}
                        color={'error'}
                      >
                        {t('cancel')}
                      </Button>
                      <Button
                        onClick={onSave}
                        data-testid={'EditableProfileCardHeader.SaveButton'}
                        color={'success'}
                      >
                        {t('save')}
                      </Button>
                    </HStack>
                  )}
                </>
              )}
            </HStack>
          </Card>
        }
        off={
          <HStack
            max
            justify={'between'}
            className={classNames('', {}, [className])}
          >
            <TextDeprecated title={t('profile')} />
            {canEdit && (
              <>
                {readonly ? (
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                    data-testid={'EditableProfileCardHeader.EditButton'}
                  >
                    {t('edit')}
                  </ButtonDeprecated>
                ) : (
                  <HStack gap="8">
                    <ButtonDeprecated
                      theme={ButtonTheme.OUTLINE_RED}
                      onClick={onCancelEdit}
                      data-testid={'EditableProfileCardHeader.CancelButton'}
                    >
                      {t('cancel')}
                    </ButtonDeprecated>
                    <ButtonDeprecated
                      theme={ButtonTheme.OUTLINE}
                      onClick={onSave}
                      data-testid={'EditableProfileCardHeader.SaveButton'}
                    >
                      {t('save')}
                    </ButtonDeprecated>
                  </HStack>
                )}
              </>
            )}
          </HStack>
        }
      />
    );
  },
);
