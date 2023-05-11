describe('LocatorsPractice', () => {
    beforeEach(() => {
      // Runs once before each test case, like `beforeMethod` in TestNG
      cy.clearCookies();
      cy.visit('/login');
    });
  
    it('Check different locators', () => {
      // CSS
      cy.get("input[name='username']").type('Cydeo');
      cy.get(':nth-child(1) > .large-6 > input').clear();
  
      cy.get("input").each((item, index, list) => {
        // assert list is 2
        expect(list).to.have.length(2);
  
        // assert item has 'type' attribute
        expect(item).to.have.attr('type');
      });

    //locate by attribute
      cy.get('button[type="submit"]');
      //class
      cy.get('.btn.btn-primary');
      //id
      cy.get('#wooden_spoon')
      //if I want to text: no xpath in cypress
      cy.get('button').should('contain', 'Login');

      

    });

    it('Check finding elements by travel through DOM',()=>{
      //travel to find the login btn: locate username box go to
      //parent form -then find button
      cy.get('input[name="username"]').parents('form').find('button').should('contain','Login').click();
    });

    it.only('Check Assertions', () => {
      //Cypress itself bundles assertions provided by Chai, Sinon and jQueru lib.
      //Should Assertions: does assertion on the object itself
      cy.get('#wooden_spoon')
      .should('contain', 'Login')
      .and('have.class', 'btn btn-primary');
      //expect Assertion:
      cy.get('#wooden_spoon').then((btn) => {
        expect(btn.to.have.text('Login'))
        expect(btn.to.have.class('btn btn-primary'))
        
      })
        
      
    })
    
  });