import { useTranslation } from 'react-i18next';


import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

import { Button } from '@/shared/ui/deprecated/Button';

export const Counter = () => {
  const { t } = useTranslation();
  const counterValue = useCounterValue();
  const { decrement, add, increment } = useCounterActions();
  const handleInc = () => {
    increment();
  };
  const handleDec = () => {
    decrement();
  };

  const handleAdd = () => {
    add(4);
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={handleInc} data-testid="increment-btn">
        {t('increment')}
      </Button>
      <Button onClick={handleAdd} data-testid="increment-btn-with-payload">
        {t('increment') + '4'}
      </Button>
      <Button onClick={handleDec} data-testid="decrement-btn">
        {t('decrement')}
      </Button>
    </div>
  );
};
