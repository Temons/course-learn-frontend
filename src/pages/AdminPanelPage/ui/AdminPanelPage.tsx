import React from 'react';
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const AdminPanelPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('adminPanelPage')}
    </Page>
  )
}

export default AdminPanelPage;
