import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Drawer } from "@/shared/ui/Drawer";
import { Input } from "@/shared/ui/Input";
import { Modal } from "@/shared/ui/Modal";
import { HStack, VStack } from "@/shared/ui/Stack";
import { StarRating } from "@/shared/ui/StarRating";
import { Text } from "@/shared/ui/Text";





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
    rate = 0
  } = props;

  const { t } = useTranslation('rating');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true)
    } else {
      onAccept?.(selectedStarsCount)
    }
  }, [hasFeedback, onAccept])

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount)
  }, [onAccept, starsCount])

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        placeholder={t('yourReview')}
        value={feedback}
        onChange={setFeedback}
      />
    </>
  )

  return (
    <Card max className={classNames('', {}, [className])}>
      <VStack align='center' gap='8'>
        <Text title={starsCount ? t('thanksForRate') : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>

      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap='32'>
            {modalContent}
            <HStack max gap='16' justify='end'>
              <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                {t('close')}
              </Button>
              <Button onClick={acceptHandle}>
                {t('send')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack gap='32'>
            {modalContent}
            <Button fullWidth onClick={acceptHandle} size={ButtonSize.L}>
              {t('send')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});
