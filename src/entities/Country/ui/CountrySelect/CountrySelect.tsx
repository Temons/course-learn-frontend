import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Country } from "../../model/types/country";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CountrySelectProps {
  className? : string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Portugal, content: Country.Portugal },
]

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange])

  return (
    <ListBox
      className={className}
      value={value}
      defaultValue={t('setCountry')}
      items={options}
      onChange={onChangeHandler}
      readonly={readonly}
      direction='top left'
      label={t('setCountry')}
    />
  )
});
