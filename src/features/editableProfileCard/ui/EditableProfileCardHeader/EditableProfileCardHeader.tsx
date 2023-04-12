import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { profileActions } from "../../model/slice/profileSlice";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { HStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(({ className }: EditableProfileCardHeaderProps) => {
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack
      max
      justify={'between'}
      className={classNames('', {}, [className])}
    >
      <Text title={t('profile')} />
      {
        canEdit &&  (
          <>
            {
              readonly ?
                <Button
                  theme={ButtonTheme.OUTLINE}
                  onClick={onEdit}
                  data-testid={'EditableProfileCardHeader.EditButton'}
                >
                  {t('edit')}
                </Button> :
                <HStack gap="8">
                  <Button
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={onCancelEdit}
                    data-testid={'EditableProfileCardHeader.CancelButton'}
                  >
                    {t('cancel')}
                  </Button>
                  <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSave}
                    data-testid={'EditableProfileCardHeader.SaveButton'}
                  >
                    {t('save')}
                  </Button>
                </HStack>
            }
          </>
        )
      }
    </HStack>
  );
});
