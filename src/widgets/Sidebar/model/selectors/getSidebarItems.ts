import { createSelector } from "@reduxjs/toolkit";

import { SidebarItemType } from "../types/sidebar";

import { getUserAuthData } from "@/entities/User";
import AboutIcon from "@/shared/assets/icons/about.svg";
import ArticleIcon from "@/shared/assets/icons/article.svg";
import MainIcon from "@/shared/assets/icons/home.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import { RoutePath } from "@/shared/const/router";

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
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
    ];

    if (userData) {
      sidebarItemsList.push({
        path: RoutePath.profile + userData.id,
        Icon: ProfileIcon,
        text: 'profileLink',
        authOnly: true
      },
      {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'articlesLink',
        authOnly: true
      })
    }

    return sidebarItemsList;
  }
)
