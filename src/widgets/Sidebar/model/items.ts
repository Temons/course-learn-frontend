import React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'mainLink'
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'aboutLink'
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'profileLink',
    authOnly: true
  },
  {
    path: RoutePath.articles,
    Icon: ArticleIcon,
    text: 'articlesLink',
    authOnly: true
  }
];
