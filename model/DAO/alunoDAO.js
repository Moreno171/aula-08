/****************************************************************
 * Objetivo: Realizara a integração do Aluno com o Banco de Dados
 * Data: 14/04/2023
 * Autor: Moreno
 * Versão: 1.0
 ****************************************************************/

//Inserir um novo Registro no Banco de Dados
const insertAluno = function (dadosAluno) {


}

//Atualizar um novo Registro no Banco de Dados
const updateAluno = function (dadosAluno) {


}

//Excluir um Registro no Banco de Dados
const deleteAluno = function (id) {


}
//Retorna todos os Registro no Banco de Dados
const selectAllAluno = async function () {
    //Impot da biblioteca do prisma client (responsavel por manipular dados no BD)
    let { PrismaClient } = require('@prisma/client')

    //Instancia da classe do PrimaClient
    let prisma = new PrismaClient();

    //Variavel com o scriptSQL para executar no BD
    let sql = 'select * from tbl_aluno'

    //Executa no BD o scriptSQL
    //$queryRawUnsafe() é utilizado quando o scriptSQL esta em uma variavel
    //$queryRaw() é utilizado quando o script direto no metodo (Ex: $queryRaw('select *from tbl_aluno'))
    let rsAluno = await prisma.$queryRawUnsafe(sql)
    
    //Valida se o BD retornou algum registro 
    if (rsAluno.length > 0)
        return rsAluno;
    else
        return false;
};

//Retorna um Registro filtrado pelo ID do Banco de Dados
const selectByIdAluno = function (id) {


}

module.exports = {
    selectAllAluno
}