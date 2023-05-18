import { Article } from "../../../src/entities/Article";

const defaultArticle = {
  "title": "Testing Article",
  "subtitle": "Что нового в JS за 2022 год?",
  "img": "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  "views": 1022,
  "userId": "1",
  "createdAt": "26.02.2022",
  "type": [
    "IT"
  ],
  "blocks": []
}
export const createArticle = (article?: Article) => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'lascasfasfdasfa' },
    body: article ?? defaultArticle,
  }).then(res => res.body)
}

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'lascasfasfdasfa' },
  })
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
