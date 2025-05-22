describe("API Testing",()=>{

    let authtoken=null;

    before("Creating Access Token",()=>{
        cy.request({
            method: 'POST',
            url: 'https//',
            headers: {'content-type': 'application/json'},
            body: {
                   clientName: 'ABC',
                   clientemail: Math.random().toString(5).substring(2)+"@gmail.com"
            }
        }).then((response)=>{
            authtoken = response.body.accessToken;


        });
    })

   
    
     it("Create Order",()=>{
        cy.request({
            method: 'POST',
            url: 'https//orders',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer '+authtoken,    

            },
            //We specify body only if we using POST method

            body: {
                   "bookID": 1,
                   "customername": "Mickael"
            }
        }).then((response)=>{
            expect(response.status).equal(201);
            expect(response.body.created).equal(true);
            

        });
    })
     it("Submit Order",()=>{
        cy.request({
            method: 'GET',
            url: 'https//orders',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer '+authtoken,    
                                },

            cookies:{
                    'cookiename': 'mycookies'
            }

             }).then((response)=>{
            expect(response.status).equal(200);
            expect(response.body).has.length(1);

            

        });
    })
})