import React from 'react';
import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary";

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <BugButton />
      {t('mainPage')}
    </div>
  )
}

export default MainPage;