import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onAccept,
    rate = 0,
  } = props;

  const { t } = useTranslation('rating');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount);
  }, [onAccept, starsCount]);

  const modalContent = (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            placeholder={t('yourReview')}
            value={feedback}
            onChange={setFeedback}
            data-testid={'RatingCard.Input'}
          />
        </>
      }
      off={
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            placeholder={t('yourReview')}
            value={feedback}
            onChange={setFeedback}
            data-testid={'RatingCard.Input'}
          />
        </>
      }
    />
  );

  const content = (
    <>
      <VStack align="center" gap="8">
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={<Text title={starsCount ? t('thanksForRate') : title} />}
          off={
            <TextDeprecated title={starsCount ? t('thanksForRate') : title} />
          }
        />
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>

      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <ToggleFeatures
              feature={'isAppRedesigned'}
              on={
                <HStack max gap="16" justify="end">
                  <Button
                    data-testid={'RatingCard.Close'}
                    onClick={cancelHandle}
                  >
                    {t('close')}
                  </Button>
                  <Button
                    data-testid={'RatingCard.Send'}
                    onClick={acceptHandle}
                  >
                    {t('send')}
                  </Button>
                </HStack>
              }
              off={
                <HStack max gap="16" justify="end">
                  <ButtonDeprecated
                    data-testid={'RatingCard.Close'}
                    onClick={cancelHandle}
                    theme={ButtonTheme.OUTLINE_RED}
                  >
                    {t('close')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    data-testid={'RatingCard.Send'}
                    onClick={acceptHandle}
                  >
                    {t('send')}
                  </ButtonDeprecated>
                </HStack>
              }
            />
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack gap="32">
            {modalContent}
            <ToggleFeatures
              feature={'isAppRedesigned'}
              on={
                <Button fullWidth onClick={acceptHandle} size={'l'}>
                  {t('send')}
                </Button>
              }
              off={
                <ButtonDeprecated
                  fullWidth
                  onClick={acceptHandle}
                  size={ButtonSize.L}
                >
                  {t('send')}
                </ButtonDeprecated>
              }
            />
          </VStack>
        </Drawer>
      </MobileView>
    </>
  );

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <Card max border={'partial'} padding={'24'}>
          {content}
        </Card>
      }
      off={
        <CardDeprecated
          max
          className={classNames('', {}, [className])}
          data-testid={'RatingCard'}
        >
          {content}
        </CardDeprecated>
      }
    />
  );
});
