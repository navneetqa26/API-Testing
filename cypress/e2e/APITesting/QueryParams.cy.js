
describe("API Testing",()=>{


    const queryparam={page:2

    }
    it("Passing Query Parameter",()=>{


        cy.request({
                         method: 'GET',
                         url: 'https://reqres.in/api/users',
                         qs: queryparam                         

        }).then((response)=>{
           expect(response.status).to.eq(200);
           expect(response.status).equal(200);
           expect(response.body.page).equal(2);
           expect(response.body.data).has.length(6);
        //    To find any specific field of the data
        //    expect(response.body.data(0)).have.property('id',7);
        //    expect(response.body.data(0)).has.property('first_name','Michael');

        })
    })


    





})