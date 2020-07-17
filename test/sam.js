describe('My first test', function () {
    it('does not do much', function () {
       // window.visit("https://www.amazon.com/");
       // cy.contains('Today's Deals').click();
      // cy.get('').click();
     // window.xpath('(//input[@type="submit"])[1]').click();
      //cy.xpath()
      before(function(client, done) {
        client
          .url('http://google.com')
          .expect.element('body').to.be.present.before(1000);
        done();
      });
    })
    })