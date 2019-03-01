describe('My first Test App', function(){
  it('Staffbase deleting funcs', function(){
    //visit the login-page
    cy.visit('https://alena-faszwxjpig.now.sh/')

    //find an input field for email-adress
    cy.get('.login.clickable').click()
    cy.get('.input-group.with-icon.email.email').find('input')
      .type('jevgeni+av@staffbase.com')
      .should('have.value', 'jevgeni+av@staffbase.com')

    //find an input element for password
    cy.get('.input-group.with-icon.password.password').find('input')
      .type('alenav')
      .should('have.value', 'alenav') //interesting how it works?

    //submit login data
    cy.get('.login-form').find('button.clickable').click()

    //finally reaching the trash page
    cy.visit('https://alena-faszwxjpig.now.sh/admin/trash')

    //checking out pagination

    //going to the last Page
    cy.get('.css-otejqx-ColLeft.eilfy095').find('.css-1oafo75-ArrowNext-ArrowBack-ArrowFirst-ArrowLast.eilfy093').click()
        cy.url()
            .should('include', '/10')

    //returning to the first page
    cy.get('.css-otejqx-ColLeft.eilfy095').find('.css-n5oh7j-ArrowNext-ArrowBack-ArrowFirst.eilfy092').click()
    cy.get('.css-3od7ng-PageForm.eilfy097').find('.css-s70er7-PageInput.eilfy098')
        .should('have.value','1')
    //proceed to a specific chosen page
    cy.get('.css-3od7ng-PageForm.eilfy097').find('.css-s70er7-PageInput.eilfy098').clear()
      .type('3')
      .should('have.value', '3')
      .blur()

    //selection possible
    cy.get('.css-15pejuu-HeaderContainer.erhdtgq4').find('input').check()
    //div displays the correct amount of checked elements
    cy.get('.css-wkb4tt-TableActionsContainer.erhdtgq6').contains('10 Einträge') //any way not to hard-code it?

    cy.get('.css-93qz4b-SortByButton.erhdtgq3').click()
      .wrap({order: 'asc'}).its('order').should('eq','asc')

    cy.get('time')
    //  .expect('time[30]').to.be.lessThan('time[0]')

    cy.window()
      .its('trashStore')
      .invoke('set', [])



    //going forward
    /*  for(var i=1; i<10; i++){
      cy.get('.css-hu5m16-ArrowNext.eilfy090').click()
      cy.url()
        .should('include', '/i') //won't really work..
      }
      */
    //var span = document.getElementByClassName('css-3od7ng-PageForm.eilfy097').getElements(span)//
    //var num_pages = parseInt(span,10)

  })
})
