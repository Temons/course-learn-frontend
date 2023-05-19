let profileId = '';
describe('User goes to profile page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then(data => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('successful open page ', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
  });
  it('And edit profile', () => {
    const newName = 'newName';
    const newLastname = 'newLastname';
    cy.updateProfile(newName, newLastname);
    cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
    cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
  });
});
