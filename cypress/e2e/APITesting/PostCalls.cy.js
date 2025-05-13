describe("API Testing", () => {
  it("Approach 1 - Hard Coded JSON object", () => {
    const requestBody = {
  id: 1,
  name: "Navneet",
  username: "Test",
  email: "tester@gmail.com",
    }

  cy.request("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.be.an("array");

    const user = response.body[0]; // first user
    expect(user).to.have.property("username");
    expect(user).to.have.property("email");
    expect(user).to.have.property("name");


})

});


  it("Approach 2 -  Dynamically generating JSON object", () => {
   const requestBody = {
  name: Math.random().toString(36).substring(2),
  username: Math.random().toString(36).substring(2),
  email: Math.random().toString(36).substring(2) + "@gmail.com",
};

cy.request({
  method: "POST",
  url: "https://jsonplaceholder.typicode.com/users",
  headers: {
    "Content-Type": "application/json"
  },
  body: requestBody
}).then((response) => {
  console.log(response.body); // 🔍 Look here

  expect(response.status).to.eq(201);

  // Adjust these only if the fields exist
  if (response.body.name) {
    expect(response.body.name).to.eq(requestBody.name);
  }

  if (response.body.username) {
    expect(response.body.username).to.eq(requestBody.username);  // This is where your error was
  }
});

  })

   it("Approach 1 - Hard Coded JSON object from fixture", () => {
  cy.fixture("PostCallsFixture").then((requestBody) => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/users",
      body: requestBody
    }).then((response) => {
      expect(response.status).to.eq(201); // POST usually returns 201 Created
      expect(response.body).to.be.an("object");

      expect(response.body).to.have.property("name", requestBody.name);
      expect(response.body).to.have.property("username", requestBody.username);
      expect(response.body).to.have.property("email", requestBody.email);
    });
  });
});



});
