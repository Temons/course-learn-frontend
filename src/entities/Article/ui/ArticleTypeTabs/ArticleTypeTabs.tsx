import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useMemo } from "react";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "entities/Article";
import { useTranslation } from "react-i18next";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation('articles');

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('allArticles')
    },
    {
      value: ArticleType.IT,
      content: t('it')
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('economics')
    },
    {
      value: ArticleType.SCIENCE,
      content: t('science')
    },
  ], [t]);

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType)
  }, [onChangeType])
  
  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
      className={classNames('', {}, [className])}
    />
  );
});
