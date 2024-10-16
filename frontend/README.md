Todos os direitos reservados à https://baasic.com.br

--
# Tutorial de Instalação e Execução do Frontend
--

## Requisitos

- Antes de iniciar, certifique-se de que você possui o Backend instalado, configurado e em execução em sua máquina. [Tutorial de instalação e execução do backend](https://github.com/0110101001110000/zapcomm/tree/main/backend#readme)
  
## Instalação do Frontend

No terminal, navegue até o diretório ```zapcomm``` (criado anteriormente na instalação do Backend).
No diretório do projeto, navegue até a pasta ```frontend```. 

### Instalação das dependências

No terminal, execute o seguinte comando para que sejam instaladas as dependências (listadas no arquivo ```package.json```) do projeto:

```bash
npm  install
```
  
Quando você executa esse comando, o NPM (Node Package Manager) baixa todos os pacotes de bibliotecas necessários para o projeto rodar, colocando-os na pasta node_modules. 

## Configuração do Frontend

### Configuração das variáveis de ambiente

No terminal, ainda na pasta ```frontend```, execute o seguinte comando para copiar o arquivo existente ```.env.example``` e colar como ```.env```:

```bash
cp  .env.example  .env
```

Em seguida, edite o arquivo .env caso ache necessário.

### Configuração da função handleLogin

Abra o arquivo index.js localizado neste caminho:

- ```zapcomm > frontend > src > hooks > useAuth.js > index.js```

Procure a função ```handleLogin```, nela, você encontrar-se-á uma linha com o seguinte código:

```bash
const { data } = await api.post("/auth/login", userData);
```

Substitua essa linha pelo seguinte código abaixo:

```bash
const { data } = await api.post("http://localhost:8080/auth/login", userData);
```

Com isso, o Frontend fará conexão diretamente com a Api do Backend que está no endereço ```http://localhost:8080/```.

### Configuração do cross-env

Em certos casos, ao tentar execultar o Frontend, pode ocorrer o seguinte erro:

- 'NODE_OPTIONS' is not recognized as an internal or external command, program or batch file.

Para a resolução do mesmo, basta seguir os seguintes passos:

1. Instalar o cross-env atravéz do ```npm```:
    ```bash
    npm install cross-env
    ```
2. No arquivo ```package.json```, na parte de ```"scripts"```, adicione ```cross-env``` somente nos scripts com NODE_OPTIONS para que fiquem da seguinte maneira:
    ```bash
    "start": "cross-env NODE_OPTIONS=--openssl-legacy-provider react-scripts start",
    "build": "cross-env NODE_OPTIONS=--openssl-legacy-provider GENERATE_SOURCEMAP=false react-scripts build",
    ```

Passo a passo para conserto do erro baseado da seguinte issue: "['NODE_OPTIONS' is not recognized as an internal or external command](https://stackoverflow.com/questions/53948521/node-options-is-not-recognized-as-an-internal-or-external-command)"

## Execução do Frontend

Com a instalação e configuração do Frontend em sua máquina, basta executar o seguinte comando para abrir o servidor Frontend:

```bash
npm start
```

Com a execução desse comando, o Frontend será iniciado e estará disponível no endereço ```http://localhost:3000``` (ou outra porta configurada).

Caso necessário, utilize as seguintes credenciais para login:

- E-mail: ```admin@admin.com```
- Senha: ```123456```
