Todos os direitos reservados à https://baasic.com.br

  

--
# Bem Vindo ao Repositório do Zapcomm!
--

  

O Zapcomm é uma plataforma de suporte B2B avançada que combina a eficiência do WhatsApp com a gestão robusta de dados e operações, permitindo um atendimento rápido e seguro aos clientes. Desenvolvido com foco em desempenho, escalabilidade e segurança. Aqui está o passo a passo de como instalar e rodar a versão executável do MVP !!!

--
Tutorial de Instalação e Execução do Backend
--

**Requisitos**

Antes de iniciar, certifique-se de que você possui as seguintes ferramentas instaladas:

Node.js (versão 16 ou superior) | COMO INSTALAR NODE JS NO WINDOWS?

NPM (Npm vem junto com a instalação do node)

PostgreSQL (versão 12 ou superior) | COMO INSTALAR O POSTGRESQL NO WINDOWS - PARA DEVS

Git (para clonar o projeto)

pgAdmin (opcional, para gerenciar o banco de dados PostgreSQL)

Redis server | Link para download do instalador

**Instalação do Backend**
1. Clonar projeto localmente
No terminal, use o comando cd para navegar até o diretório onde você deseja clonar o repositório, por exeplo:

cd  /caminho/para/seu/diretorio

No terminal, execute o seguinte comando para clonar o projeto:

git  clone  https://github.com/0110101001110000/zapcomm.git
2. Acessar o Diretório do Projeto
Após a clonagem, navegue até o diretório do projeto:

cd  zapcomm

**Configuração do Backend**

**1. Instalar Dependências do Backend**
No terminal, navegue até a pasta backend e execute o comando:

npm  install
Quando você executa esse comando, o NPM (Node Package Manager) baixa todos os pacotes de bibliotecas necessários para o projeto rodar, colocando-os na pasta node_modules. Essas dependências podem incluir bibliotecas como o express, sequelize, dotenv, entre outras.

**2. Configuração do Banco de Dados**
Crie Banco de Dados via terminal ou PgAdmin 4
Para criar o banco de dados via terminal, siga as seguintes instruções:

No terminal, para se conectar ao servidor PostgreSQL como o usuário padrão "postgres", execute o comando abaixo. Você será solicitado a digitar a senha.

psql  -U  postgres
Uma vez conectado, você estará no prompt do PostgreSQL.

No prompt do PostgreSQL, digite o comando abaixo para criar um novo banco de dados. Substitua "nome_do_banco" pelo nome que você deseja dar ao seu banco de dados.

CREATE  DATABASE  nome_do_banco;
Configure as variáveis de ambiente
No terminal, ainda na pasta backend, execute o seguinte comando para copiar o arquivo existente .env.example e colar como .env:

copy .env.example .env
Em seguida, edite o arquivo .env com os dados corretos para a conexão com o PostgreSQL
Antes de iniciar o projeto, é necessário configurar as credenciais de acesso ao banco de dados PostgreSQL no arquivo .env.

Edite o arquivo .env e insira as informações corretas de acordo com seu ambiente de desenvolvimento:

DB_DIALECT=postgres

DB_HOST=localhost

DB_PORT=5432

DB_USER=seu_usuario_postgres

DB_PASS=sua_senha_postgres

DB_NAME=nome_do_banco_de_dados
Substitua os valores seu_usuario_postgres, sua_senha e nome_do_banco pelas credenciais corretas para o seu ambiente.

**3. Rodar Migrações e Seeds**
Com o banco de dados configurado, você precisará rodar as migrações e seeds para popular o banco de dados com as tabelas e dados iniciais.

Realize o primeiro build no projeto
Para que seja possível executar corretamente os scripts de migração e seeds, é necessário realizar o primeiro build no projeto caso não o tenha feito.

No terminal, execute o seguinte comando para realizar o primeiro build:

npm  run  build
Execute o script de migrações
O seguinte comando cria as tabelas necessárias no banco de dados.

npm  run  db:migrate
Execute o script de seeds
O seguinte comando popula o banco com dados iniciais.

npm  run  db:seed
Isso vai inserir dados padrões no banco, como usuários ou empresas.

Rodar o Servidor Backend localmente
No terminal, ainda na pasta backend, execute o seguinte comando para subir o servidor Backend localmente:

npm  run  dev:server

O backend será iniciado e estará disponível no endereço http://localhost:8080 (ou outra porta configurada).

--

Tutorial de Instalação e Execução do Frontend
--

**Requisitos**

Antes de iniciar, certifique-se de que você possui o Backend instalado, configurado e em execução em sua máquina. Tutorial de instalação e execução do backend
Instalação do Frontend
No terminal, navegue até o diretório zapcomm (criado anteriormente na instalação do Backend). No diretório do projeto, navegue até a pasta frontend.

**Instalação das dependências**
No terminal, execute o seguinte comando para que sejam instaladas as dependências (listadas no arquivo package.json) do projeto:

npm  install
Quando você executa esse comando, o NPM (Node Package Manager) baixa todos os pacotes de bibliotecas necessários para o projeto rodar, colocando-os na pasta node_modules.

**Configuração do Frontend**

Configuração das variáveis de ambiente
No terminal, ainda na pasta frontend, execute o seguinte comando para copiar o arquivo existente .env.example e colar como .env:

copy .env.example .env
Em seguida, abra o arquivo .env, você encontrar-se-á uma linha com o seguinte código:

REACT_APP_BACKEND_URL=https://url front
Altere-a para que fique da seguinte maneira:

REACT_APP_BACKEND_URL="http://localhost:8080"
Lembrando que "http://localhost:8080" é a url do Backend.

**Execução do Frontend**

Com a instalação e configuração do Frontend em sua máquina, basta executar o seguinte comando para abrir o servidor Frontend:

npm start
Com a execução desse comando, o Frontend será iniciado e estará disponível no endereço http://localhost:3000 (ou outra porta configurada).

Caso necessário, utilize as seguintes credenciais para login:

E-mail: admin@admin.com
Senha: 123456
