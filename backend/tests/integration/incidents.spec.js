const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/dataBase/connection");

describe("Incident", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("Should be able to create a new incident", async () => {
    const mockOng = await ong();
    const ongID = mockOng.body.id;

    const response = await request(app)
      .post("/incidents")
      .send(incident("Doação", "Cachorro doente de rua", 2000))
      .set({ Authorization: ongID });

    expect(response.body).toHaveProperty("id");
    expect(response.status).toBe(200);
  });

  it("Should be not able to create a new incident - title empty", async () => {
    const response = await request(app)
      .post("/incidents")
      .send(incident("", "Cachorro doente de rua", 2000));

    var res = JSON.parse(response.text);
    expect(res.statusCode).toBe(400);
    expect(res.error).toBe("Bad Request");
    expect(res.message).toBe('"title" is not allowed to be empty');
  });

  it("Should be not able to create a new incident - description empty", async () => {
    const response = await request(app)
      .post("/incidents")
      .send(incident("Doação", "", 2000));

    var res = JSON.parse(response.text);
    expect(res.statusCode).toBe(400);
    expect(res.error).toBe("Bad Request");
    expect(res.message).toBe('"description" is not allowed to be empty');
  });

  it("Should be not able to create a new incident - value empty", async () => {
    const response = await request(app)
      .post("/incidents")
      .send(incident("Doação", "Cachorro doente de rua", ""));

    var res = JSON.parse(response.text);
    expect(res.statusCode).toBe(400);
    expect(res.error).toBe("Bad Request");
    expect(res.message).toBe('"value" must be a number');
  });

  function incident(title, description, value) {
    return {
      title,
      description,
      value,
    };
  }

  async function ong() {
    return await request(app).post("/ongs").send({
      name: "APAD",
      email: "apad@gmail.com",
      whatsapp: "6669993331",
      city: "Goiânia",
      uf: "GO",
    });
  }
});
