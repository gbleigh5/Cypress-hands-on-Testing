describe('My First Test Suite', function() 
{

it('My SecondTest case',function() {
    cy.visit("https://www.houseoffraser.co.uk/")
    cy.wait(4000)
    // cy.get('[data-section="myAccount"] > a').click()
    // cy.get('#email').type('')
//cy.get ('#hidden-xs').should('be.visible')
cy.get('.hidden-xs.hidden-sm.col-md-2.bsheaderIcons').click({force:true})
.then(() => {
    cy.contains('Sign In').click({force:true})
}).then(() => {
    cy.get(':nth-child(1) > .label').type ('olapeju.leigh@gmail.com')
    cy.get(':nth-child(2) > .label').type('Ujepalo0706')
    cy.get('#LoginButton.dnnPrimaryAction.LoginSubmit').click()
    cy.title().should('include', 'My Account')
})


})

})
