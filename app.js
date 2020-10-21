const firstQuestion = document.querySelector("#new-contract");
const listOfQuestions = document.querySelector(".collection");

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  //form.addEventListener('submit', addToProcess);
}

//----------------- QUESTIONS -----------------//

/*Valor do objeto para saber se vai para a CGFR
  Se q1 = sim e valor > 50k, CGFR, mas se valor <50k, despacho uniggp Adrianne
*/
const question0 = "Existe NR feita?";
const questionNovoOk = "O contrato é novo mas substitui antigo?";
const question1 = "Qual o tipo de contrato?"; //aqui deverá ser incluída lista com ARP, indenização, contratação direta, etc.

const question2 = "qual o valor do objeto segundo se depreende o processo?";
const question4 = "qual a natureza da despesa?";
const questionSubitem = "qual o subitem da despesa?";
const question5 = "Contrato está vigente e tem até 4 anos?";
const question6 = "Processo passou por CGE e PGE?";

//------------------ RULES ------------------//

// if natureza.processoAsObject == competenciaSead { //enviar processo para sead e incluir decreto no texto }

// if processoAsObject.isNew == true {
//   if processoAsObject.valorTotal > 50000 {//envia para CGFR}
//   else {//faz o modelo e envia para a Adrianne}
// }

//----------------------- Objeto Processo -----------------------//

var processoAsObject = {
  ug: "SECRETARIA DE ESTADO DOS TRANSPORTES DO PIAUÍ - SETRANS-PI",
  isnew: "aditivo de prazo ao contrato nº 068/2019", //contrato, aditivo de prazo ao contrato XYZ, aditivo de valor ao contrato XYZ
  assunto: "PARECER EM ADITIVO DE PRAZO A CONTRATO", //ver cada tipo de fluxograma. Ex: PARECER EM ADITIVO DE PRAZO A CONTRATO
  objeto: "LOCAÇÃO DE VEÍCULOS", //Descrição da Natureza
  empresa: "R F C CARVALHO ME.",
  valorTotalProcesso: "115.695,12",
  valorTotalSeRefereA:
    "02 Pick-ups ao custo mensal de R$4.820,63 pelo prazo de 12 meses a contar de 08/11/2019", // este valor se refere a .....
  observacoesExtra:
    "Importante salientar que a CGE, em seu parecer, considerou alto o risco da prorrogação, recomendando ao gestor que procurasse, visando adequação do contrato à media de valores do mercado, reduzir por acordo bilateral o valor unitário de locação de R$4.820,63 para R$4.134,00. Em resposta, o gestor emitiu despacho informando a motivação para que não procedesse à redução.", //p.ex. "Ressalta-se que o órgão teve despesas similares no exercício anterior"

  aprovado: "1", //1 = aditivo de prazo aprovado com NP, 3 = contrato novo aprovado com NP, 0 = vai para a CGFR para autorizar, 2 = vai para a CGFR para suplementação orçamentária,
  isEmSubstituicao: "0", //é contrato novo mas em substituição a antigo? 0 = não, 1 = sim //ainda não implementei pq a resolução parece ser omissa
  numeroNR: "2020NR00238", //se vazio, informar que não há NR
  numeroNP: "2020NP11808",
  //se for fonte 116 e deve ser enviado para a UNIGED, fiz um texto padrão
  //se for despacho para enviar para a Adrianne, já tem um feito também, pelo Marcos
  //INCLUIR NECESSIDADE DE TER DESPACHO DA CGE NO CASO DE TERCEIRIZADOS

  naturezaNR: "339039",
  fonteNR: "100",
  classificacaoNR: "04.122.0010.2000", //se quiser verificar nome da ação, vai em planejamento, plano plurianual, Ação
  valorExercício: "28.923,78",
  valorNR: "28.923,78",

  //preencher abaixo apenas quando for solicitação de suplementação
  autorizacaoTambem: "1", //0 se for apenas solicitação de orçamento, 1 se também for autorização para contratar
  seRefereASO:
    "construção da passarela elevada e do Mirante do açude em Campo Maior —PI",
  classificacaoSO: "15.451. 0008. 3104",
  nomeClassificacao: "EXECUÇÃO E ACOMPANHAMENTO DE OBRAS",
  valorTotalSO: "250.000,00",
  creditoDisponivel: "1.086.080,46",
  naturezaSO: "449051",
  fonteSO: "100", //ex: 100, 100/116, 100/117, 117
  observacoesSO: "" //p.ex. "Ressalta-se que o órgão teve despesas similares no exercício anterior"
};
// Add Task

//----------------------- ALTERANDO PARECER -----------------------//

var divParecer = document.getElementById("parecer");

var _Interessado = document.getElementById("interessado");
var _Assunto = document.getElementById("assunto");
var _Objeto = document.getElementById("objeto");
var _Intro = document.getElementById("intro");
var _Segue_Analise = document.getElementById("segue_analise");
var _Analise = document.getElementById("analise");
var _Resolucao = document.getElementById("resolucao");
var _Analise_Final = document.getElementById("analise_final");
var _NR = document.getElementById("NR");
var _NP = document.getElementById("NP");
var _Conclusao = document.getElementById("conclusao");
var _auxiliarTemp = document.getElementById("auxiliarTemp");
var today = new Date();
var thisYear = today.getFullYear();

//var nodeP = document.createElement("P");
//var nodeParecer = document.createTextNode(`Assunto:${processoAsObject.isnew}`);
_Interessado.innerHTML = `INTERESSADO: ${processoAsObject.ug}`;
_Assunto.innerHTML = `ASSUNTO: ${processoAsObject.assunto}`;
_Objeto.innerHTML = `OBJETO: ${processoAsObject.objeto}`;
_Intro.innerHTML = `<h3>Introdução</h3>
  </p>
  Trata-se de solicitação recebida por este Núcleo/SEFAZ para verificar viabilidade de ${processoAsObject.isnew} 
  a ser firmado entre as partes ${processoAsObject.ug} e ${processoAsObject.empresa}.  
  </p>Os termos preveem um valor total estimado em <b> R$${processoAsObject.valorTotalProcesso} </b>, valor este que se refere a <b> ${processoAsObject.valorTotalSeRefereA}</b>.
  </p> ${processoAsObject.observacoesExtra}`;

_Segue_Analise.innerHTML = ` 
Após breve relatório, segue <h3>Análise</h3> 
</p>  A análise desta Unidade é devida por previsão no Decreto nº 17.084/2017 e o momento de sua elaboração dá-se conforme a resolução CGFR 02/2017, que inputa necessário parecer deste órgão 
e de outros no fluxograma dos processos de contratos do estado do Piauí. 
`;
_Analise.innerHTML = `
<p>
A Lei de Responsabilidade Fiscal (LC 101/2000) traz em seu artigo 15 a seguinte previsão:

<p class='Citacao'>Art. 15. Serão consideradas não autorizadas, irregulares e lesivas ao patrimônio público a geração de despesa ou assunção de obrigação que não atendam o disposto nos arts. 16 e 17.
</p>
Passamos a analisar neste parecer diversos pontos referentes à regularidade da pretensa obrigação, dentre eles os exigidos nos artigos supracitados, que envolvem de maneira geral o caráter orçamentário da despesa. 
</p>
No tocante a disponibilidade orçamentária, a Lei nº 8.666/93 (Lei de Licitações e Contratos) determina em seu art. 7º, § 2º, inciso III e art. 14, caput, que: 
<p class='Citacao'> "nenhuma obra, serviços ou compra será realizada sem a adequada caracterização de seu objeto e indicação dos recursos orçamentários para seu pagamento, conforme respectivo cronograma, 
sob pena de nulidade do ato e responsabilidade de quem lhe tiver dado causa."

</p>
Por sua vez, o Decreto nº 17.084/2017, determina que:
<p class='Citacao'> “fica vedada, no âmbito dos órgãos e entidades da Administração Pública Direta e Indireta do Estado do Piauí, a assunção de novas obrigações que impliquem despesas relativas a Outras Despesas Correntes (3.3) 
e Investimentos (4.4) cujas dotações orçamentárias sejam vinculadas a recursos do Estado, sem que haja saldo orçamentário disponível para custear a despesa (...)”.

</p>Insta ressaltar o disposto no Art. 1º, §1º, inciso I do referido artigo, que diz que para fins deste Decreto, considera-se 
<p class='Citacao'> 
"I - assunção de novas obrigações: a assinatura de termos de convênio de despesa ou de contrato, e seus respectivos aditamentos, independentemente da modalidade de licitação adotada, ou se decorrente de sua dispensa ou inexigibilidade, ou ainda se através de adesão, incorporação ou liberação de atas de registro de preços;" 

</p>
Conforme informado acima, verifica-se que a administração só pode assumir novas obrigações, por meio de contratações ou mesmo aditivos de prazo (tendo em vista que a Lei de Responsabilidade Fiscal considera
aumento de despesa a prorrogação daquela criada por prazo determinado), mediante a comprovação de créditos orçamentários disponíveis suficientes para lastrear as despesas decorrentes dos serviços contratados. `;

_Resolucao.innerHTML = `</p>
No âmbito estadual, a Comissão de Gestão Financeira e Gestão por Resultados instituiu em 31 de Março de 2020 o Plano de Contingenciamento de Gastos no âmbito da Administração Pública Direta e Indireta do Poder Executivo Estadual com intuito de promover 
ações que reduzam o impacto da pandemia de COVID-19  nas finanças do estado.

Esse plano instituído através da Resolução CGFR nº 02/2020 e publicado no DOE de 01 de Abril de 2020 se aplica a despesas custeadas com recursos do Tesouro (Fonte 100) e do Fundo Estadual de Combate à Pobreza (Fonte 120), 
conforme previsões do Art. 2º bem como do parágrafo único do Art. 3º e tem efeito sobre todos os casos que não encontrem-se excepcionados pelo parágrafo único do Art. 1º da Resolução, que diz:
<p class='Citacao'>“Art.1º, parágrafo único: As medidas de caráter restritivas, previstas nesta resolução, não se aplicam as ações de saúde, segurança pública e assistência social”
</p>

Destarte, ressaltam-se as seguintes restrições:

</p>1 –<b> Suspensão </b> de novos contratos e aditivos de valor, cessão onerosa de servidores, concessão de horas extras, passagens aéreas, diárias, consultorias e assessorias jurídicas além de eventos em geral;

</p>2 – <b>Vedação </b> do início de novas obras, reformas, aquisição de equipamentos e material permanente;

</p>3 – Possibilidade de determinação pela CGFR de <b>redução</b> unilateral de contratos até o valor de 25% bem como de <b>rescisão</b> completa de contratos.

</p>4 – <b>Limitação</b> de diversas despesas a 50% do valor liquidado no mês de referência do exercício anterior.

</p>O art. 4º prevê, não obstante, que “a CGFR, mediante justificativa e comprovação da necessidade, poderá excepcionar as regras estabelecidas nesta resolução.

</p> Por outro lado, importa ressalvar que <b> a resolução não veda aditivos de prazo a contratos com manutenção do valor ou que se firmem novos contratos em substituição a outros cujo prazo está findando</b>.
</p>`;

//SE EXISTE OU NÃO NOTA DE RESERVA
if (processoAsObject.numeroNR == "") {
  _NR.innerHTML = `Ressaltamos que não foi possível encontrar nos autos referência a Nota de Reserva para satisfação dessa finalidade`;
} else {
  _NR.innerHTML = `</p>
  Para satisfação desta finalidade, <b> consta no processo a Nota de Reserva nº ${processoAsObject.numeroNR} no montante de R$${processoAsObject.valorNR} </b> que inclui o valor que se pretende empenhar até o fim da vigência no exercício. 
  <br>A nota contém indicação do número do contrato no Sistema Integrado de Administração Financeira e inclui a previsão da despesa na natureza ${processoAsObject.naturezaNR} , fonte ${processoAsObject.fonteNR}, classificação ${processoAsObject.classificacaoNR};
  `;
}

//SE EXISTE NOTA PATRIMONIAL

if (processoAsObject.numeroNP != "") {
  _NP.innerHTML = `</p>    
  <b> A reserva foi autorizada pela Nota Patrimonial nº ${processoAsObject.numeroNP} </b> garantindo utilização do orçamento com a despesa prevista`;
}

switch (processoAsObject.aprovado) {
  case "1": //se o parecer é do tipo aditivo sem alteração aprovado com NP
    _Analise_Final.innerHTML = `Não obstante, a supracitada Lei nº 8.666/93, em seu art. 57, II, dispõe que:
      <p class='Citacao'> 
      "Art. 57. A duração dos contratos regidos por esta Lei ficará adstrita à vigência dos respectivos créditos orçamentários, exceto quanto aos relativos: [...] 
      <br>II - à prestação de serviços a serem executados de forma contínua, que poderão ter a sua duração prorrogada por iguais e sucessivos períodos com vistas à obtenção de preços e condições mais vantajosas para a administração, limitada a sessenta meses;"
      </p>
      <b>No caso em tela não houve acréscimo de valor ao que estava previsto no contrato, tendo sido prorrogado o prazo repetindo-se o valor anterior</b>. 
      </p>A finalidade do pré-empenho é fazer uma reserva de dotação orçamentária para lastrear despesa futura, pendente da realização de um rito formal para sua execução, tal como um procedimento licitatório. A reserva deve cobrir o valor total da despesa que ocorrerá no exercício financeiro em curso, de forma a garantir os recursos orçamentários para efetivação da despesa.
      `;
    _Conclusao.innerHTML = `Existe saldo orçamentário suficiente para garantir o cumprimento das obrigações contratuais de contraprestação para o caso em análise,
      <b>sendo possível a publicação em ${thisYear} no valor de R$${processoAsObject.valorTotalProcesso} </b>, 
      estando esse ato condicionado ao atendimento de todos os requisitos do fluxograma de processos de contratos no estado do Piauí.`;
    break;

  case "3": //se o parecer é do tipo aditivo sem alteração aprovado com NP
    _Analise_Final.innerHTML = `Não obstante, a supracitada Lei nº 8.666/93, em seu art. 57, II, dispõe que:
      <p class='Citacao'> 
      "Art. 57. A duração dos contratos regidos por esta Lei ficará adstrita à vigência dos respectivos créditos orçamentários, exceto quanto aos relativos: [...] 
      <br>II - à prestação de serviços a serem executados de forma contínua, que poderão ter a sua duração prorrogada por iguais e sucessivos períodos com vistas à obtenção de preços e condições mais vantajosas para a administração, limitada a sessenta meses;"
      </p>
      <b>No caso em tela o contrato novo não encontra óbice nas vedações da resolução da CGFR.</b>. 
      </p>A finalidade do pré-empenho é fazer uma reserva de dotação orçamentária para lastrear despesa futura, pendente da realização de um rito formal para sua execução, tal como um procedimento licitatório. A reserva deve cobrir o valor total da despesa que ocorrerá no exercício financeiro em curso, de forma a garantir os recursos orçamentários para efetivação da despesa.
      `;
    _Conclusao.innerHTML = `Existe saldo orçamentário suficiente para garantir o cumprimento das obrigações contratuais de contraprestação para o caso em análise,
      <b>sendo possível a publicação em ${thisYear} no valor de R$${processoAsObject.valorTotalProcesso} </b>, 
      estando esse ato condicionado ao atendimento de todos os requisitos do fluxograma de processos de contratos no estado do Piauí.`;
    break;

  case "0": //se vai encaminhar para a CGFR deliberar
    _Analise.innerHTML = ``;
    _Analise_Final.innerHTML = `Frente às vedações expostas, esta unidade fica, a princípio, impedida da emissão de Nota Patrimonial autorizativa que contemple os valores solicitados neste processo`;
    _Conclusao.innerHTML = `Os autos serão encaminhados à CGFR junto às informações e opiniões necessárias para a deliberação, podendo a introdução deste parecer constar como item de pauta.`;
    break;

  case "2": //Suplementação Orçamentária
    _Assunto.innerHTML = `ASSUNTO: SOLICITAÇÃO DE SUPLEMENTAÇÃO ORÇAMENTÁRIA`;
    _Objeto.innerHTML = `SOLICITANTE: ${processoAsObject.ug} `;
    _Intro.innerHTML = `
      Recebemos da Unidade Gestora solicitação de suplementação orçamentária, a ser encaminhada à CGFR, apresentando resumidamente:
      </p>

      <table style="width: 40%">

      <tr>
      <th> Objeto </th>
      <td> ${processoAsObject.seRefereASO} </td>      
      </tr>

      <tr>
      <th> Valor </th>
      <td> R$${processoAsObject.valorTotalSO} </td>      
      </tr>

      <tr>
      <th> Classificação </br> Orçamentária </th>
      <td> ${processoAsObject.classificacaoSO} </br> ${processoAsObject.nomeClassificacao}  </td>      
      </tr>

      <tr>
      <th> Fonte</th>
      <td> ${processoAsObject.fonteSO}   </td>      
      </tr>

      <tr>
      <th> Natureza</th>
      <td> ${processoAsObject.naturezaSO}   </td>      
      </tr>
      
      </table>
      `;

    _Segue_Analise.innerHTML = ``;
    _Analise.innerHTML = `Ao verificarmos o livro Razão da conta Crédito Disponível (622110101) na fonte 100, notamos saldo de R$${processoAsObject.creditoDisponivel} 
      a ser utilizado com diversas despesas cabíveis na ação descrita na Classificação Orçamentária acima.  
      </p> ${processoAsObject.observacoesSO}.`;
    _Resolucao.innerHTML = ``;

    if (processoAsObject.autorizacaoTambem === "1") {
      _Resolucao.innerHTML = `Além de suplementação orçamentária, <b> o órgão busca também excepcionar a vedação a novas contratações imposta pela Resolução CGFR nº 02/2020 </b>
       que prevê em seu art. 4º que “a CGFR, mediante justificativa e comprovação da necessidade, poderá excepcionar as regras estabelecidas nesta resolução".`;
    }
    _NR.innerHTML = ``;
    _Analise_Final.innerHTML = ``;
    _Conclusao.innerHTML = `Os autos serão encaminhados à CGFR junto às informações e opiniões necessárias para a deliberação, podendo ser utilizada a introdução deste parecer como item de pauta.`;

    break;

  default:
    console.log(`Mude o tipo`);
}

nodeP.appendChild(nodeParecer);

divParecer.appendChild(nodeP);

//divParecer = divParecer.appendChild(parecerParte1Objeto);
console.log(divParecer);

//----------------------- COISAS PARA IR LEMBRANDO -----------------------//

_auxiliarTemp.innerHTML = `


A Lei nº 6.673, de 18 de junho de 2015, publicado no Diário Oficial do Estado nº 112, de 18 de junho de 2015, alterou o dispositivo da Lei Complementar nº 28, de 09 de junho de 2003, que dispõe sobre a Lei Orgânica da Administração Pública do Estado do Piauí em seu art. 35, § 5º, 
no qual a Secretaria Estadual da Administração e Previdência é o órgão central de coordenação e execução da Política de pessoal, material, patrimônio, serviços gerais, licitações e contratos, gestão de documentos e gestão de controle de gastos da administração pública do Estado, 
cabendo desta forma, a Superintendência de Licitações e Contratos ser o órgão responsável pelo acompanhamento e controle de todas as licitações realizadas no Estado, bem como dos demais atos de contratações, respeitado o disposto no inciso II, do art. 151 da Constituição Estadual, 
cabendo-lhe, ainda, proporcionar a permanente atualização dos servidores responsáveis pelas licitações no Estado, com estrita observância da Lei nº 8.666, de 21 de julho de 1993, e suas alterações posteriores.
Processos que passam pela SEAD (Le)



(Se for despesa dessas acima, deve passar pela SEAD para verificar se existe ARP)

 

FLUXOGRAMA (CGFR 02/2017)

*aqui já se escolhe no Assunto

 

DAD e NR em tudo

Parecer PGE = Tudo menos Adesão a ARP

Parecer CGE = Apenas em Reajuste, Revisão, Prorrogação e Repactuação + Contratação diretas se há dúvidas quanto à vantajosidade

 

Adesão a ARP do executivo do Piauí: DAD, NR, -sem PGE ou CGE

Reajuste: DAD, NR dos efeitos no exercício, Parecer PGE e CGE

Contratação sem SRP: Se T.I = parecer da ATI, DAD, NR, Parecer apenas PGE (perguntar se está certo)

Contratação direta: DAD, NR, parecer PGE, parecer CGE Apenas se existirem dúvidas quanto à vantajosidade da contratação

Revisão Contratual: DAD, NR, parecer PGE e CGE

Adesão a ARP de outro estado: DAD e NR, Se T.I = parecer da ATI, , Parecer apenas PGE (perguntar se está certo)

Alteração de quantitativo: DAD, NR, Parecer apenas PGE (perguntar se está certo)

Pregão com SRP: Se T.I = parecer da ATI, DAD, NR, Parecer apenas PGE (perguntar se está certo)

Prorrogação: DAD, NR, parecer PGE e CGE

Repactuação: DAD, NR, parecer PGE e CGE

 

 


-------------------------------------------------- De vez em quando ler de novo(LC 101/2000 - LRF) ------------------
****** ATENÇÃO COM O ÚLTIMO PARÁGRAFO DO ART. 17, MUITO IMPORTANTE INCLUIR PARA ADITIVOS DE PRAZO ****************

Art. 15. Serão consideradas não autorizadas, irregulares e lesivas ao patrimônio público a geração de despesa ou assunção de obrigação que não atendam o disposto nos arts. 16 e 17.

Art. 16. A criação, expansão ou aperfeiçoamento de ação governamental que acarrete aumento da despesa será acompanhado de:        (Vide ADI 6357)

I - estimativa do impacto orçamentário-financeiro no exercício em que deva entrar em vigor e nos dois subseqüentes;

II - declaração do ordenador da despesa de que o aumento tem adequação orçamentária e financeira com a lei orçamentária anual e compatibilidade com o plano plurianual e com a lei de diretrizes orçamentárias.

§ 1o Para os fins desta Lei Complementar, considera-se:

I - adequada com a lei orçamentária anual, a despesa objeto de dotação específica e suficiente, ou que esteja abrangida por crédito genérico, de forma que somadas todas as despesas da mesma espécie, realizadas e a realizar, 
previstas no programa de trabalho, não sejam ultrapassados os limites estabelecidos para o exercício;

II - compatível com o plano plurianual e a lei de diretrizes orçamentárias, a despesa que se conforme com as diretrizes, objetivos, prioridades e metas previstos nesses instrumentos e não infrinja qualquer de suas disposições.

§ 2o A estimativa de que trata o inciso I do caput será acompanhada das premissas e metodologia de cálculo utilizadas.

§ 3o Ressalva-se do disposto neste artigo a despesa considerada irrelevante, nos termos em que dispuser a lei de diretrizes orçamentárias.

§ 4o As normas do caput constituem condição prévia para:

I - empenho e licitação de serviços, fornecimento de bens ou execução de obras;

II - desapropriação de imóveis urbanos a que se refere o § 3o do art. 182 da Constituição.

Art. 17. Considera-se obrigatória de caráter continuado a despesa corrente derivada de lei, medida provisória ou ato administrativo normativo que fixem para o ente a obrigação legal de sua execução por um período superior a dois exercícios.        (Vide ADI 6357)

§ 1o Os atos que criarem ou aumentarem despesa de que trata o caput deverão ser instruídos com a estimativa prevista no inciso I do art. 16 e demonstrar a origem dos recursos para seu custeio.

§ 2o Para efeito do atendimento do § 1o, o ato será acompanhado de comprovação de que a despesa criada ou aumentada não afetará as metas de resultados fiscais previstas no anexo referido no § 1o do art. 4o, devendo seus efeitos financeiros, nos períodos seguintes, ser compensados pelo aumento permanente de receita ou pela redução permanente de despesa.

§ 3o Para efeito do § 2o, considera-se aumento permanente de receita o proveniente da elevação de alíquotas, ampliação da base de cálculo, majoração ou criação de tributo ou contribuição.

§ 4o A comprovação referida no § 2o, apresentada pelo proponente, conterá as premissas e metodologia de cálculo utilizadas, sem prejuízo do exame de compatibilidade da despesa com as demais normas do plano plurianual e da lei de diretrizes orçamentárias.

§ 5o A despesa de que trata este artigo não será executada antes da implementação das medidas referidas no § 2o, as quais integrarão o instrumento que a criar ou aumentar.

§ 6o O disposto no § 1o não se aplica às despesas destinadas ao serviço da dívida nem ao reajustamento de remuneração de pessoal de que trata o inciso X do art. 37 da Constituição.

§ 7o Considera-se aumento de despesa a prorrogação daquela criada por prazo determinado.


`;

//----------------------- Código Copiado da Tarefa, Apagar depois -----------------------//
function addToProcess(e) {
  if (taskInput.value === "") {
    alert("error... nothing");
  }

  // Create li element
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item";
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element
  const questionsInDoc = document.createElement("p");
  // Add class
  link.className = "delete-item secondary-content";
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append the link to li
  listOfQuestions.appendChild(link);
  // Append li to ul
  listOfQuestions.appendChild(li);

  // Clear input
  taskInput.value = "";

  e.preventDefault();
}
