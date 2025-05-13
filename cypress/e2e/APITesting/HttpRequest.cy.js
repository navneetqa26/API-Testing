
describe("APIs Methods",()=>{

    it("Get Call",()=>{
        cy.request('GET',"https://jsonplaceholder.typicode.com/posts/1")
        .its("status")
        .should("equal",200);

    })
    })


    it('Login with valid credentials Post Request', () => {
      cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      form: true,
      body: {
        email: 'test101@gmail.com',
        password: 'Test@123'
      }
     }).then((res) => {
      expect(res.status).to.eq(200);
      cy.log(res.body);
    });
    })


   it('POST', () => {
    cy.request({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    body: {
      title: 'Hello',
      body: 'this is post call',
      userId: 1
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }).its('status')
    .should('equal', 201);
   });

   it("Put", () => {
    cy.request({
    method: 'PUT',
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    body: {
      title: 'Hello',
      body: 'this is put call',
      userId: 1,
      id: 1
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }).its('status')
    .should('equal', 200);
    }) 
    
      it("Delete",()=>{
        cy.request({
              method: 'DELETE',
               url: 'https://jsonplaceholder.typicode.com/posts/1',
          })
        .its("status")
        .should("equal",200);


    })


    