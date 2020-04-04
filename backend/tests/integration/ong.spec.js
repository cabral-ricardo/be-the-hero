const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/dataBase/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  //#region Create Ongs
  it("Should be able to create a new ong", async () => {
    const response = await request(app)
      .post("/ongs")
      .send(ong("APAD", "apad@gmail.com", "6669993331", "Goiânia", "GO"));

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });

  it("Should be not able to create a new ong - name empty", async () => {
    const response = await request(app)
      .post("/ongs")
      .send(ong("", "apad@gmail.com", "6669993331", "Goiânia", "GO"));

    var res = JSON.parse(response.text);
    expect(res.statusCode).toBe(400);
    expect(res.error).toBe("Bad Request");
    expect(res.message).toBe('"name" is not allowed to be empty');
  });

  it("Should be not able to create a new ong - email empty", async () => {
    const response = await request(app)
      .post("/ongs")
      .send(ong("APAD", "", "6669993331", "Goiânia", "GO"));

    var res = JSON.parse(response.text);
    expect(res.statusCode).toBe(400);
    expect(res.error).toBe("Bad Request");
    expect(res.message).toBe('"email" is not allowed to be empty');
  });

  it("Should be not able to create a new ong - whatsapp empty", async () => {
    const response = await request(app)
      .post("/ongs")
      .send(ong("APAD", "apad@gmail.com", "", "Goiânia", "GO"));

    var res = JSON.parse(response.text);
    expect(res.statusCode).toBe(400);
    expect(res.error).toBe("Bad Request");
    expect(res.message).toBe('"whatsapp" is not allowed to be empty');
  });

  it("Should be not able to create a new ong - city empty", async () => {
    const response = await request(app)
      .post("/ongs")
      .send(ong("APAD", "apad@gmail.com", "6669993331", "", "GO"));

    var res = JSON.parse(response.text);
    expect(res.statusCode).toBe(400);
    expect(res.error).toBe("Bad Request");
    expect(res.message).toBe('"city" is not allowed to be empty');
  });

  it("Should be not able to create a new ong - uf empty", async () => {
    const response = await request(app)
      .post("/ongs")
      .send(ong("APAD", "apad@gmail.com", "6669993331", "Goiania", ""));

    var res = JSON.parse(response.text);
    expect(res.statusCode).toBe(400);
    expect(res.error).toBe("Bad Request");
    expect(res.message).toBe('"uf" is not allowed to be empty');
  });

  function ong(name, email, whatsapp, city, uf) {
    return {
      name,
      email,
      whatsapp,
      city,
      uf,
    };
  }
  //#endregion
});
