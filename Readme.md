📝 Jest JS - Exemplo Básico de Teste de Unidade
Este projeto de estudo é um exemplo mínimo e prático que demonstra a utilização da biblioteca de testes Jest para realizar Testes de Unidade em uma função simples de soma (soma).

O objetivo é ilustrar a configuração e a escrita de testes básicos em um ambiente JavaScript.

🚀 Tecnologias Utilizadas
Este projeto utiliza as seguintes tecnologias:

JavaScript: Linguagem principal para a função e os testes.

Jest: Framework de teste JavaScript usado para criar, rodar e estruturar os testes.

HTML: Para o arquivo index.html que referencia a função (embora não seja o foco dos testes de unidade).

package.json: Para gerenciar as dependências e scripts de execução.

📁 Estrutura do Projeto
O projeto segue a seguinte estrutura de diretórios:

jest-example/
├── index.html
├── package.json
├── sum.js
└── sum.test.js
Detalhes dos Arquivos
Arquivo Descrição
sum.js Contém a função soma(a, b) a ser testada. Inclui validação de tipo.
sum.test.js Contém os testes de unidade que verificam o comportamento da função soma.
package.json Arquivo de configuração que define o projeto, dependências (como jest), e scripts de teste.
index.html Arquivo HTML simples que carrega o script sum.js.

Exportar para as Planilhas

⚙️ Instalação e Configuração
Siga os passos abaixo para clonar o repositório e configurar o ambiente:

1. Clonar o Repositório
   Bash

git clone https://github.com/Paulo-Borges/jest.git
cd jest 2. Instalar Dependências
O projeto utiliza o Jest como dependência de desenvolvimento. Você pode instalá-lo usando o npm:

Bash

npm install
O arquivo package.json garante que o jest seja instalado corretamente:

JSON

"devDependencies": {
"jest": "^30.2.0"
}
▶️ Como Executar os Testes
Com as dependências instaladas, você pode executar os testes definidos no package.json.

1. Rodar Todos os Testes
   Para executar o conjunto de testes uma única vez:

Bash

npm test
Este comando executa o script "test": "jest", que encontra e roda todos os arquivos de teste no projeto.

2. Rodar Testes em Modo Observação (Watch)
   Para executar os testes e mantê-los rodando, observando as alterações nos arquivos (_.js e _.test.js):

Bash

npm run test:watch
Este comando executa o script "test:watch": "jest --watch", que é ideal durante o desenvolvimento.

🧪 Código da Função e Testes
Função sum.js
A função soma recebe dois parâmetros e realiza a adição, garantindo que ambos sejam números.

JavaScript

function soma(a, b) {
if (typeof a !== "number" || typeof b !== "number") {
throw new Error("Os parametros devem ser números");
}
return a + b;
}

module.exports = soma;
Testes de Unidade (sum.test.js)
Os testes verificam se a função soma retorna os resultados esperados para diferentes entradas.

JavaScript

const soma = require("./sum");

describe("sum.js", () => {
it("deve retornar 5 quando somar 2 + 3", () => {
expect(soma(2, 3)).toBe(5);
});
it("deve retornar -1 quando somar -2 + 1", () => {
expect(soma(-2, 1)).toBe(-1);
});
// Teste adicional: A função deve falhar se os argumentos não forem números.
it("deve lançar um erro quando somar 'a' + 1", () => {
expect(() => soma('a', 1)).toThrow("Os parametros devem ser números");
});
});

🤝 Contato
Desenvolvido por Borges Desenvolvedor.

Plataforma Link
GitHub Paulo-Borges
