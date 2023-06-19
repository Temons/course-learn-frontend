import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/consts/currencyConsts';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.USDT, content: Currency.USDT },
];

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    const props = {
      className: className,
      value: value,
      defaultValue: t('setCurrency'),
      items: options,
      onChange: onChangeHandler,
      readonly: readonly,
      direction: 'top left' as const,
      label: t('setCurrency'),
    };

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={<ListBox {...props} />}
        off={<ListBoxDeprecated {...props} />}
      />
    );
  },
);
