describe('My First Test Suite', function () {

    it('My FirstTest case', function () {
        cy.visit("https://www.houseoffraser.co.uk/")
        cy.wait(4000)
        cy.get('.hidden-xs.hidden-sm.col-md-2.bsheaderIcons').click({ force: true })

        cy.get('[href="/men/top-picks"] > .shopCTA').click().then(() => {
            cy.get('[li-productid="54846722"] > .s-productthumbbox > .row > .TextSizeWrap > .s-productthumbtext > .s-producttext-top-wrapper > a > .nameWrapTitle > .productdescriptionname').click()
            cy.get('[data-text="Large"] > #ancLink > span').click()
            cy.get('#aAddToBag').click()
        })
        cy.get('#liHome > a > span').click()
            .then(() => {
                cy.get('[href="/men/top-picks"] > .shopCTA').click()
                cy.get('[li-productid="53814402"] > .s-productthumbbox > .row > .TextSizeWrap > .s-productthumbtext > .s-producttext-top-wrapper > a > .nameWrapTitle > .productdescriptionname').click()
                cy.get('[data-text="Large"] > #ancLink > span').click()
                cy.get('#aAddToBag').click()
            })
        cy.get('#liHome > a > span').click()
        .then(() => {
            cy.get('.bagIcon').click()
            cy.get(':nth-child(1) > .prdQuantity > .row > .s-basket-plus-button').click()
            cy.get(':nth-child(2) > .productdesc > .prodDescContainer > .s-basket-remove-button > .prodelete > .deleteItemText').click()
            .then(() => {cy.get('#divContinueSecurely > .ContinueOn').click() })
        })

    })

})