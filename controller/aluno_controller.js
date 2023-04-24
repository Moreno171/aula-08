/***************************************************************
 * Objetivo: Implementa a regra de negocio entre o app e a model
 * Data: 24/04/2023
 * Autor: Moreno
 * Versão: 1.0
 **************************************************************/

//Função para receber os dados do app e enviar para a Model para inserir um novo item
const inserirtAluno = function (dadosAluno) {


}

//Função para receber os dados do app e enviar para a Model para atualizar um item existente
const atualizarAluno = function (dadosAluno) {


}

//Função para excluir um aluno filtrado pelo id, que será encaminhado para a Model
const deletetarAluno = function (id) {


}
//Função para retornar todos os itens da tabela recebidos da Model
const selecionarTodosAluno = async function () {
    //import do arquivo de acesso ao BD
    let alunoDAO = require('../model/DAO/alunoDAO.js');

    //Solicita ao DAO todos os alunos do BD
    let dadosAluno = await alunoDAO.selectAllAluno();
    
    //Criar um objeto do tipo JSON
    let dadosJson = {};

    //Valida se o BD teve registro
    if (dadosAluno) {
        //Adiciona o array de alunos e um JSON para retornar ao app 
        dadosJson.alunos = dadosAluno;
        return dadosAluno
    } else
        return false;

}

//Função para buscar um item filtrando pelo id, que será encaminhado para a model
const buscarIdAluno = function (id) {


}

module.exports = {
    selecionarTodosAluno 
}