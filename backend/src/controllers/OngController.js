const connection = require("../dataBase/connection");
const generateUniqId = require("../utils/generateUniqId");

module.exports = {
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqId();

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  },
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  },
  async delete(req, res) {
    const { id } = req.params;

    await connection("ongs").where("id", id).delete();

    return res.status(204).send();
  }
};
