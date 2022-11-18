

const express = require('express');   //importando o express

const server = express();
server.use(express.json());

// 'aulas' responsavel pelo conteudo abordado conforme instrumento que o professor irá utilizar para as notas

const aulas = ['Professora:Email/gabi@gmail.com - Instrumento/Saxofone ', ]
const notas =['nota1', 'nota2', 'nota3', 'nota4', 'nota5', ]


// criando o get de retorno de informação

// metodo que ira retorna apenas 1 categoria de aulas 


server.get('/notas/:index', (req, res) => {
    const { index } = req.params;

    return res.json(notas[index]);

});


// retornando todos os alunos cadastrados

server.get('/alunos', (rec, res) => {
    return res.json(alunos);

});



server.get('/aulas', (rec, res) => {
    return res.json(aulas);

});

// exibindo todas as notas da aula 


server.get('/notas', (rec, res) => {
    return res.json(notas);

});



// req do tipo POST para adicionar uma nova aula no sistema

server.post('/aulas', (req, res) => {
    const { name } = req.body;
    aulas.push(name);

    return res.json(aulas);


});


//metodo de adicionar uma nova nota 

server.post('/notas', (req, res) => {
    const { name } = req.body;
    notas.push(name);

    return res.json(notas);


});




// atualizando uma categoria de aula

server.put('/aulas/:index', (req, res) => {

    const{ index } = req.params;
    const { name } = req.body;

    aulas[index] = name;
    return res.json(aulas);

});

//deletar uma categoria de aula

server.delete('/aulas/:index', (req, res) =>{
const { index } = req.params;

aulas.splice(index, 1);
return res.json({message: "Aula deletada com sucesso"});

});


server.delete('/alunos/:index', (req, res) =>{
    const { index } = req.params;
    
    aulas.splice(index, 1);
    return res.json({message: "Aluno deletado com sucesso"});
    
    });





server.listen(3000);