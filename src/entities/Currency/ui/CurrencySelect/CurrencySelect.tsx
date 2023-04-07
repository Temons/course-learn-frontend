import { Currency } from "../../model/types/currency";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CurrencySelectProps {
    className? : string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.USDT, content: Currency.USDT },
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <ListBox
      className={className}
      value={value}
      defaultValue={t('setCurrency')}
      items={options}
      onChange={onChangeHandler}
      readonly={readonly}
      direction='top'
      label={t('setCurrency')}
    />
  )
});
