const customeExpress = require("./config/customExpress");
const conect = require("./infra/conection");
const Tables = require("./infra/tables");

conect.connect((erro) => {
  if (erro) console.log(erro);
  else {
    const app = customeExpress();
    Tables.init(conect);
    app.listen(3001, () => console.log("ta rodando"));
  }
});
