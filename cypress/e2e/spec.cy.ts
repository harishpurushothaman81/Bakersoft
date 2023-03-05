/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

import { UserInfo } from '../..../../fixtures/types'

const user: UserInfo = {
  name: faker.name.firstName(),
  lname: faker.name.lastName(),
  city: faker.address.cityName(),
  phone: faker.phone.number('############'),
  zipCode: faker.address.zipCode('#####'),
  username: faker.internet.userName(),
  state: faker.address.state(),
  street: faker.address.streetAddress(false),
  ssn: faker.phone.number('#####'),
  pass: faker.internet.password()
}

describe('Parabank user details ', () => {
  let fixtureData: any;
  it('Registers a new user', () => {
    // .. validating the user registration
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.contains('Register').click()

    cy.get('input[name="customer.firstName"]').type(user.name)
    cy.get('input[name="customer.lastName"]').type(user.lname)
    cy.get('input[name="customer.address.street"]').type(user.street)
    cy.get('input[name="customer.address.city"]').type(user.city)
    cy.get('input[name="customer.address.state"]').type(user.state)
    cy.get('input[name="customer.address.zipCode"]').type(user.zipCode)
    cy.get('input[name="customer.phoneNumber"]').type(user.phone)
    cy.get('input[name="customer.ssn"]').type(user.ssn)
    cy.get('input[name="customer.username"]').type(user.username)
    cy.get('input[name="customer.password"]').type(user.pass)
    cy.get('input[name="repeatedPassword"]').type(user.pass)

    cy.get('input[value="Register"]').click()

    cy.contains('Your account was created successfully. You are now logged in.')

    const createdUser = [{ username:user.username, password:user.pass, firstname:user.name, lastname:user.lname }];
    cy.writeFile('cypress/fixtures/createdUser.json', createdUser);
  })


  it ('Logs in as the newly created user', () => {
    // .. validating the user login , after creating new user
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.fixture('createdUser').then(function (data) {
      fixtureData = data;

      cy.get('input[name="username"]').type(fixtureData[0].username)
      cy.get('input[name="password"]').type(fixtureData[0].password)
      cy.get('input[value="Log In"]').click()
  
      let nameCheck = fixtureData[0].firstname + " " +fixtureData[0].lastname
      cy.url().should('eq', 'https://parabank.parasoft.com/parabank/overview.htm')
      cy.get('.smallText').contains(nameCheck)
      
    })

  })

})