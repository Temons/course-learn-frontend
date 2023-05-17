import { selectByTestId } from "../../helpers/selectByTestId";

describe('Routing', () => {
  describe('User NOT authorized', () => {
    it('Redirect to main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('Redirect to profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('Redirect to not found page', () => {
      cy.visit('/profilerslkajsbcac');
      cy.get(selectByTestId('NotFoundPage')).should('exist')
    })
  })

  describe('User authorized', () => {
    beforeEach(() => {
      cy.login()
    })

    it('Redirect to profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist')
    })

    it('Open articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist')
    })
  })
})
