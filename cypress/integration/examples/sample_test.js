describe('My first test', function () {
it(' does room booking functionality', function () {
  //cy.viewport(900, 900)
    cy.visit("https://aws-qa.mgmresorts.com/en.html")
    cy.title().should('be.equal','Resorts, Casinos, & Shows Worldwide - MGM Resorts').log('Application is launched successfully')
    cy.xpath('//button[contains(text(),"Close")]').click().log('Closed temporary closure alert')
    cy.xpath('//a[@id="nav-book"]/..').click();
    //cy.wait(4000);
    cy.xpath('//a[@id="nav-book-dd-1"]').click().log('Navigated to Resorts Page')
    cy.xpath('//h2[contains(text(),"The Mirage")]').scrollIntoView().should('be.visible').click({force:true})
    .log('clicked on mirage property');
   // cy.xpath('(//a[@class="dateWrapper width-1-7 available"])[2]').click();
    //cy.xpath('(//a[@class="dateWrapper width-1-7 available"])[3]').click();
    const todaysDate =Cypress.moment().format('MM/DD/YYYY')
    const nextDate = Cypress.moment().add(1, 'days').format('MM/DD/YYYY')
    cy.xpath('//*[@data-date="' + nextDate + '"]').click() //.
    cy.log('arrival date is selected as '+nextDate+'')
    const checkoutdate = Cypress.moment().add(2, 'days').format('MM/DD/YYYY') //.
    cy.xpath('//*[@data-date="' + checkoutdate + '"]').click()
   cy.log('checkout date is selected as '+checkoutdate+'')
    //cy.xpath('//*[@data-date="' + nextDate + '"]').click()
    //cy.xpath('//h3[normalize-space()="Resort Two Queen"]/../../following-sibling::div//div[2]//button').click()
    cy.xpath('(//span[contains(text(),"Click this button to book this room for")]/..)[2]',{timeout:3000}).click({force:true})
    cy.get('#guest-info-cont-first-name').type('Fname')
    cy.get('#guest-info-cont-last-name').type('Lname')
    cy.get('#guest-info-cont-phone').type('9887766543')
    cy.get('#guest-info-login-email-address').type('Fname@gmail.com')
    cy.get('#bill-name-on-card').type('Fname')
    cy.get('#bill-card-num').type('5555555555554444')
    cy.get('#bill-card-exp-month').select('10')
    cy.get('#bill-card-exp-year').select('2022')
    cy.get('#bill-card-cvv').type('123')
    cy.get('#bill-country').select('India')
    cy.get('#bill-address1').type('address1')
    cy.get('#bill-city').type('Bangalore')
    cy.get('#bill-zip').type('560033')
    cy.get('#bill-state').type('Karnataka')
    cy.get('#terms').click({force: true})
  //cy.xpath('//label[@id="terms-label"]').should('be.visible').click()
//cy.xpath('//p[contains(text(),"I agree to the Terms and Conditions below for this reservation, the ")]').click()
cy.xpath('//button[contains(text(),"Make Payment & Book")]').click()

})
})


