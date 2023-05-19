let currentArticleId = '';

describe('User visit article page', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then(article => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it('Article show correctly', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('Article.Header').should('have.text', 'Testing Article');
  });

  it('RecommendationList show correctly', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it('Leave comment successful', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });

  it('Set rating successful', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(3, 'feedback text');
    cy.get('[data-selected=true]').should('have.length', 3);
  });
});
