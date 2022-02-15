const { off } = require("./conection");

class Tables {
  init(conect) {
    this.conect = conect;

    this.createAtendimentos();
  }

  createAtendimentos() {
    const sql = `
        CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL
        AUTO_INCREMENT, 
        cliente varchar(50) NOT NULL, 
        pet varchar(50),
        servico varchar(20) NOT NULL, 
        data datetime NOT NULL, 
        dataCriacao datetime NOT NULL, 
        status varchar(20) NOT NULL,
        observacoes text, 
        PRIMARY KEY(id))`;
    this.conect.query(sql, (erro) => {
      if (erro) return console.log("ERRO:", erro);
      else return console.log("success");
    });
  }
}

module.exports = new Tables();
