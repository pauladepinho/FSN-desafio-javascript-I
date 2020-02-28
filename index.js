// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


function adicionarAluno (nome){
  /*
  Essa função irá receber uma *string* que é nome do aluno a ser criado. 
  E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
  A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.
  */

  alunosDaEscola.push ({nome: nome, notas: [], cursos: [], faltas: 0});

  if (alunosDaEscola [alunosDaEscola.length - 1].nome == nome) {
    console.log (`Aluno(a) ${nome} adicionado(a) com sucesso.`);
  }
}

function listarAlunos (){
  /*
  Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
  Vale dizer que As informações deverão ser exibidas em um formato amigável.
  */

  alunosDaEscola.forEach ( (aluno) => console.log (aluno) );
}

function buscarAluno (nome){
  /*
  Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno.
  Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar.
  E deverá devolver um aluno em seu retorno.
  */
  
  let alunoProcurado = alunosDaEscola.filter ((elemento) => {
    return elemento.nome == nome;
  });

  if (alunoProcurado.length > 0) {
    console.log (`O nome ${nome} foi encontrado.`);

  } else {
    console.log (`O nome ${nome} NÃO foi encontrado.`);
  }

  return alunoProcurado;
}

function matricularAluno (aluno, curso){
  /*
  Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
  Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
  Lembre-se de exibir o feedback para o usuário.
  */

  let alunoParaMatricular = buscarAluno (aluno);

  if (alunoParaMatricular.length > 0) {
    let index = alunosDaEscola.indexOf (alunoParaMatricular);

    alunosDaEscola [index] = alunoParaMatricular [0].cursos.push ({nomeDoCurso: curso, dataMatricula: new Date});
    console.log (`${aluno} matriculado com sucesso no curso ${curso}.`);

  } else {
    console.log (`Não foi possível matricular ${aluno} no curso ${curso}, porque ${aluno} não está cadastrado no sistema.`);
  }
}

function aplicarFalta (aluno){
  /*
  Ao receber um aluno devidamente cadastrado em nossa lista. 
  Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. 
  Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
  */

  let alunoFaltoso = buscarAluno (aluno);

  if (alunoFaltoso.length > 0 && alunoFaltoso [0].cursos.length > 0) {
    let index = alunosDaEscola.indexOf (alunoFaltoso);
    
    alunoFaltoso [0].faltas ++;
    alunosDaEscola [index] = alunoFaltoso;

    console.log (`Falta de ${aluno} registrada com sucesso.`);

 } else {
    console.log (`Não foi possível registrar falta, pois ${aluno} não está cadastrado no sistema ou não está matriculado em nenhum curso.`)
 }
}

function aplicarNota (aluno, nota){
  /*
  Ao receber um aluno devidamente cadastrado em nossa lista. 
  Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. 
  Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
  */

  let alunoAvaliado = buscarAluno (aluno);

  if (alunoAvaliado.length > 0 && alunoAvaliado [0].cursos.length > 0) {
    let index = alunosDaEscola.indexOf (alunoAvaliado);
    
    alunoAvaliado [0].notas.push (nota);
    alunosDaEscola [index] = alunoAvaliado;

    console.log (`Nota de ${aluno} registrada com sucesso.`);

  } else {
    console.log (`Não foi possível registrar nota, pois ${aluno} não está cadastrado no sistema ou não está matriculado em nenhum curso.`)
  }
}

function aprovarAluno (aluno){
  /* 
  Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. 
  Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
  Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
  */

  let alunoAvaliado = buscarAluno (aluno);

  // console.log (alunoAvaliado);
  // console.log (alunoAvaliado.length);
  // console.log (alunoAvaliado [0].cursos.length);

  if (alunoAvaliado.length > 0 && alunoAvaliado [0].cursos.length > 0 && alunoAvaliado [0].notas.length > 0) {

    let faltas = alunoAvaliado [0].faltas;
    let notas = alunoAvaliado [0].notas;

    let media = notas.reduce ( (accumulator, currentValue) => accumulator + currentValue) / notas.length;

    if (faltas <= 3 && media >= 7) {
      console.log (`${aluno} está aprovado.`);

    } else {
      console.log (`${aluno} está reprovado.`);
    }

  } else {
    console.log (`${aluno} não está cadastrado, ou não está matriculado, ou não possui nenhuma nota registrada.`)
  }  
}