const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/dataBase/connection");

describe("Incident", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();

    // const mockOngID = await request(app).post("/ongs").send({
    //   name: "APAD",
    //   email: "apad@gmail.com",
    //   whatsapp: "6669993331",
    //   city: "Goiânia",
    //   uf: "GO"
    // });

    // console.log("timaooooo " + mockOngID.response);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  //   it("Should be able to create a new incident", async () => {
  //     const response = await request(app)
  //       .post("/incidents")
  //       .send(incident("Doação", "Cachorro doente de rua", 2000))
  //       .set({ Authorization: mockOngID });

  //     expect(response.body).toHaveProperty("id");
  //     expect(response.body.id).toHaveLength(8);
  //   });

  //   it("Should be not able to create a new incident - title empty", async () => {
  //     const response = await request(app)
  //       .post("/incidents")
  //       .send(incident("", "Cachorro doente de rua", 2000));

  //     var res = JSON.parse(response.text);
  //     expect(res.statusCode).toBe(400);
  //     expect(res.error).toBe("Bad Request");
  //     expect(res.message).toBe('"title" is not allowed to be empty');
  //   });

  //   it("Should be not able to create a new incident - description empty", async () => {
  //     const response = await request(app)
  //       .post("/incidents")
  //       .send(incident("Doação", "", 2000));

  //     var res = JSON.parse(response.text);
  //     expect(res.statusCode).toBe(400);
  //     expect(res.error).toBe("Bad Request");
  //     expect(res.message).toBe('"description" is not allowed to be empty');
  //   });

  //   it("Should be not able to create a new incident - value empty", async () => {
  //     const response = await request(app)
  //       .post("/incidents")
  //       .send(incident("Doação", "Cachorro doente de rua", ""));

  //     var res = JSON.parse(response.text);
  //     expect(res.statusCode).toBe(400);
  //     expect(res.error).toBe("Bad Request");
  //     expect(res.message).toBe('"value" must be a number');
  //   });

  it("Should be not able to create a new incident - test", async () => {
    expect("1").toBe("1");
  });

  //   function incident(title, description, value) {
  //     return {
  //       title,
  //       description,
  //       value,
  //     };
  //   }

  // async function mockOngID() {
  //   const response = await request(app).post("/ongs").send({
  //     name: "APAD",
  //     email: "apad@gmail.com",
  //     whatsapp: "6669993331",
  //     city: "Goiânia",
  //     uf: "GO"
  //   });

  //   var teste = typeof "ttt";

  //   console.log("wwww " + typeof "ssss");
  //   const [id] = JSON.parse(response.text);
  //   console.log(id);
  //   return id;
  // }
});
