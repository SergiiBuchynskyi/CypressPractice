/// <reference types="cypress" />

describe('context: My First Tests', ()=>{
    before(()=>{
        //runs once before all TC in this describe block, like beforeClass in TestNG
    })

    beforeEach(()=>{
        //runs once before each TC, like beforeMethod in TestNG
        cy.clearCookies();
    })
    after(()=>{
           //runs once after all TC in this describe block, like afterClass in TestNG
    })
    
    afterEach(()=>{
        //similar to afterMethod in TestNG
    })

    it('Opening a web application', ()=>{
        cy.visit('/');
        cy.get(':nth-child(41) > a').click();

    })

    


})