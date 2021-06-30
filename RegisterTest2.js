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
})
//.then(
    cy.get('.newCustomer > .innerBorder > .loginContainer > .NewCustWrap > .ImgButWrap > .dnnPrimaryAction').click()
cy.wait(2000)

cy.get('#Registration_Title').select('Ms').should('have.value', 'Ms')
cy.get('select')
cy.get('#Registration_FirstName').type('Sylvester')
cy.get ('#Registration_LastName').type('Stanley')
cy.get('#Registration_DateOfBirthDay').select('4').should('have.value', '4')
cy.get('#Registration_DateOfBirthMonth').select('March').should('have.value', '3')
cy.get('#Registration_DateOfBirthYear').select('2020').should('have.value', '2020')
cy.get('#Registration_EmailAddress').type ('slystan@gmail.com')
cy.get('#txtPassword').type('slystan@7')
cy.get('#Registration_ConfirmPassword').type('Ujepalo0606')

cy.get('#rbLoyaltyNo.JoinLoyalty.dnnFormRequired').check().should('be.checked')
cy.get('#Registration_IsSubscriber').check()
cy.get('#RegistrationSubmit').click()



})

})