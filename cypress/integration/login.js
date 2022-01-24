/// <reference types="cypress" />

describe('Route Check', () => 
{
	
it('Should check route', () => 
{
	
	
	cy.visit('https://mor.dev-sheba.xyz/');
	
});
	
	it('Should check if login field visible', () =>
		
{
	cy.get('#normal_login_email').should('be.visible');
	cy.get('#normal_login_password').should('be.visible');
	cy.get('.login-form-button').should('be.visible');
});	
	
	it('Should login', () => 
{	
	cy.get('#normal_login_email').type('zim847@gmail.com');
	cy.get('#normal_login_password').type('123456');
	cy.get('.login-form-button').click();

		
});
	
	it('Should check if all the fields are available', () => {
		
		cy.get('[key="user_id"] > .ant-table-header-column > div > .ant-table-column-title').should('be.visible');
		cy.get('[key="created_at"] > .ant-table-header-column > div > .ant-table-column-title').should('be.visible');
		cy.get('[key="user_name"] > .ant-table-header-column > div > .ant-table-column-title').should('be.visible');
		cy.get('[key="company_name"] > .ant-table-header-column > div > .ant-table-column-title').should('be.visible');
		cy.get('[key="mobile"] > .ant-table-header-column > div > .ant-table-column-title').should('be.visible')
		cy.get('[key="company_name"] > .ant-table-header-column > div > .ant-table-column-title').should('be.visible');
		cy.get('.ant-table-column-has-actions > .ant-table-header-column > div > .ant-table-column-title').should('be.visible');
		cy.get('.ant-table-row-cell-last > .ant-table-header-column > div > .ant-table-column-title').should('be.visible');
	
	});


		
});
