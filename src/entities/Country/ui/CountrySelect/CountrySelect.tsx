import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../../model/consts/countryConsts';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Portugal, content: Country.Portugal },
];

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    const props = {
      className: className,
      value: value,
      defaultValue: t('setCountry'),
      items: options,
      onChange: onChangeHandler,
      readonly: readonly,
      direction: 'top left' as const,
      label: t('setCountry'),
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
