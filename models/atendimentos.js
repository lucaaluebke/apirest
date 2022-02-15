const moment = require("moment");
const conect = require("../infra/conection");

class Atendimento {
  insert(atendimento, res) {
    const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS");
    const data = moment(atendimento.data, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:MM:SS"
    );
    const atendimentoDatado = { ...atendimento, dataCriacao, data };

    const sql = "INSERT INTO Atendimentos SET ?";

    conect.query(sql, atendimentoDatado, (error, response) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(201).json(atendimento);
      }
    });
  }

  getAtendimentos(res) {
    const sql = "SELECT * FROM Atendimentos";

    conect.query(sql, (erro, response) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(response);
      }
    });
  }

  getAtendimento(id, res) {
    const sql = "SELECT * FROM Atendimentos WHERE id=?";

    conect.query(sql, id, (erro, response) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(response);
      }
    });
  }

  updateAtendimentos(id, valores, res) {
    if (valores.data) {
      valores.data = moment(valores.data, "DD/MM/YYYY").format(
        "YYYY-MM-DD HH:MM:SS"
      );
    }

    const sql = "UPDATE Atendimentos SET ? WHERE id=?";

    conect.query(sql, [valores, id], (erro, response) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(response);
      }
    });
  }

  deleteAtendimento(id, res) {
    const sql = "DELETE * FROM Atendimentos WHERE id=?";

    conect.query(sql, id, (erro, response) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(response);
      }
    });
  }
}

module.exports = new Atendimento();
