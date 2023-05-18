export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname)
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
}

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'lascasfasfdasfa' },
    body: {
      id: "4",
      first: 'test',
      lastname: 'user',
      age: 31,
      currency: "EUR",
      country: "Ukraine",
      city: "Corroios",
      username: "testuser",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2n1pP-KKfgW_ch97BmG6zdal9pCzXKtdSg&usqp=CAU"
    },
  })
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
