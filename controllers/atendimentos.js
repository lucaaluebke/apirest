const Atendimento = require('../models/atendimentos');


module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.getAtendimentos(res);
    });

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Atendimento.getAtendimento(id, res);
    });


    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;
        Atendimento.updateAtendimentos(id, valores, res);

    });   
    
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.insert(atendimento, res);
    });

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Atendimento.deleteAtendimento(id, res);
    });
}