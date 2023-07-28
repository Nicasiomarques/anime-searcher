## Anime Searcher

Este projeto consiste em uma tela que exibe uma lista ou tabela de dados paginada em ReactJS. Os dados são carregados sob demanda, exibindo inicialmente os 25 primeiros registros e permitindo que o usuário navegue pelas páginas para visualizar os registros adicionais.

## Requisitos

1. A tela deve exibir uma lista/tabela de dados paginada.
2. Deve ser possível navegar entre as páginas dos dados carregados.
3. Você pode criar dados fictícios ou utilizar uma API externa para obter os dados da lista/tabela.
4. O design da interface não será avaliado, mas a tela deve ser responsiva e de fácil uso.
5. A arquitetura do projeto e a estrutura do código também serão avaliadas. Escrever código limpo, organizado e bem documentado.
6. Implemente um mecanismo de pesquisa para filtrar os dados exibidos na lista/tabela.
7. Adicione recursos de ordenação para que o usuário possa classificar os dados por coluna.

## Configuração do Ambiente

Para executar este projeto localmente, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar a versão mais recente do Node.js em https://nodejs.org.

2. Clone este repositório para o seu computador:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

3. Acesse o diretório do projeto:

```bash
cd nome-do-repositorio
```

4. Instale as dependências do projeto:

```bash
npm install
```

## Executando o Projeto Localmente

Após a conclusão da configuração do ambiente, você pode executar o projeto localmente usando o seguinte comando:

```bash
npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá a aplicação em seu navegador padrão. Se a porta 3000 estiver ocupada, o servidor tentará usar outra porta disponível.

Agora você poderá interagir com a tela de listagem paginada e testar as funcionalidades de filtragem e ordenação dos dados.

## Diferenciais do Projeto

1. **Mínimo de Bibliotecas de Terceiros:** Ao desenvolver o projeto, foram evitadas dependências desnecessárias de bibliotecas de terceiros, resultando em um carregamento mais rápido da página e uma experiência mais ágil para o usuário.

2. **Separation of Concerns (Separação de Responsabilidades):** A arquitetura do projeto foi pensada de forma modular, seguindo o princípio da "Separation of Concerns", promovendo a organização do código, facilitando a colaboração em equipe e simplificando a manutenção e evolução do projeto.

3. **Evitando Requisições Desnecessárias:** Utilização do recurso `AbortController` para cancelar requisições em andamento, evitando respostas desnecessárias do servidor e o desperdício de recursos de rede.

4. **Cache de Pesquisas:** Pesquisas com características semelhantes são cacheadas, resultando em respostas mais rápidas para o usuário e uma melhor utilização da banda de internet.

5. **Otimizações para Evitar Re-Renders Desnecessários:** Uso de memorização de cálculos com `memo` para impedir re-renderizações quando o estado ou as props não foram alteradas, resultando em um desempenho geral mais suave e uma interface mais responsiva.

6. **Componentes Reutilizáveis:** Esforço para criar componentes reutilizáveis, facilitando o desenvolvimento de novas funcionalidades, melhorando a organização do projeto e promovendo a consistência visual em toda a aplicação.

7. **TypeScript:** Uso do TypeScript para maior segurança no código, identificando erros de tipagem em tempo de desenvolvimento e facilitando a compreensão do código.

8. **Responsividade:** Design da interface desenvolvido com foco na responsividade, garantindo uma experiência agradável em diferentes dispositivos.

9. **Debounce Search (Pesquisa com Debounce):** Implementação do conceito de "debounce" na funcionalidade de busca para melhorar a experiência do usuário durante a pesquisa de dados, reduzindo o número de chamadas à API e proporcionando uma busca mais fluida e eficiente.

## Possíveis Melhorias (Não Implementadas)

Embora o projeto já tenha sido desenvolvido com diversos diferenciais e técnicas de otimização, há sempre espaço para melhorias adicionais. Algumas sugestões de possíveis melhorias que não foram implementadas no escopo atual do projeto incluem:

1. **Arquitetura mais robusta, como Clean Architecture ou Port and Adapters:** Adotar uma arquitetura mais sofisticada, como Clean Architecture ou Port and Adapters, pode proporcionar uma melhor estruturação do projeto, tornando-o mais escalável, testável e facilitando a implementação de novos recursos no futuro.

2. **Testes Automatizados:** Implementação de testes unitários, testes de integração e testes end-to-end para garantir a robustez e qualidade do código.

3. **Code Splitting:** Utilização de técnicas de code splitting para dividir o código da aplicação em partes menores, melhorando o tempo de carregamento inicial da página e reduzindo o tamanho do pacote enviado ao usuário.

4. **Customização de Erros mais Aprofundada:** Implementação de tratativas de erros mais aprofundadas e personalizadas para melhorar a experiência do usuário em caso de falhas inesperadas.

5. **Tratativas para Melhorar a UX em Cenários de Throttling:** Implementar técnicas como "lazy loading" de imagens e conteúdos ou otimizações de carregamento para melhorar a experiência do usuário em ambientes com limitação de largura de banda ou conexões instáveis.

6. **Implementação de uma Biblioteca de UI Declarativa:** Criação de uma biblioteca de UI personalizada e declarativa para fornecer componentes reutilizáveis e estilizados de forma consistente em toda a aplicação.

7. **SOLID:** Implementação de princípios SOLID de design de software para aumentar a longevidade e extensibilidade do aplicativo.

8. **Desacoplamento:** Práticas de desacoplamento e injeção de dependências para criar uma aplicação mais flexível e adaptável a mudanças tecnológicas.

9. **Integração Contínua e Entrega Contínua (CI/CD):** Implementação de práticas de Integração Contínua e Entrega Contínua para elevar a qualidade do projeto e agilizar o processo de desenvolvimento.

## Como Contribuir

Agradecemos seu interesse em contribuir para o projeto! Contribuições são sempre bem-vindas e podem ajudar a melhorar a qualidade e funcionalidade da API de Gerenciamento de Empresas. Abaixo estão algumas diretrizes sobre como contribuir:

### 1. Abrindo Issues

Se você encontrou um bug, deseja sugerir uma melhoria ou tem alguma dúvida sobre o projeto, sinta-se à vontade para abrir uma issue no repositório. Descreva claramente o problema ou a sugestão para que possamos entender melhor a questão e respondê-la adequadamente.

### 2. Realizando Fork e Pull Requests

Se você deseja contribuir com código para o projeto, siga os passos abaixo:

1. Faça um fork do repositório para o seu próprio perfil do GitHub.
2. Clone o repositório forkado para o seu ambiente local.
3. Crie um branch para suas alterações:

   ```bash
   git checkout -b nome-da-sua-feature
   ```

4. Realize as alterações desejadas no código e adicione os commits de forma coerente.

### Git Flow e Convenção de Commits

Para manter um fluxo de trabalho organizado, recomendamos seguir o Git Flow e a Convenção de Commits.

#### Git Flow

O Git Flow é uma metodologia de organização de branches que ajuda a gerenciar as diferentes etapas do desenvolvimento. Seguindo essa abordagem, temos dois branches principais:

- `main`: Branch principal que contém o código estável do projeto. Commits direcionados a esse branch devem ser feitos por meio de Pull Requests.

- `develop`: Branch de desenvolvimento que contém o código em andamento. Os novos recursos e correções de bugs devem ser feitos a partir dessa branch.

Além disso, para cada nova funcionalidade ou correção, é recomendável criar um branch a partir do `develop` e dar um nome descritivo, como `feature/nome-da-funcionalidade` ou `bugfix/nome-do-bug`. Quando a funcionalidade ou correção estiver pronta, você pode abrir um Pull Request para mesclar as alterações no `develop`.

#### Convenção de Commits
Uma boa convenção de commits ajuda a manter um histórico de alterações claro e consistente. Recomendamos seguir o formato Conventional Commits. Isso implica em começar o commit com um dos seguintes prefixos:

- `feat`: Para adicionar uma nova funcionalidade.
- `fix`: Para correção de bugs.
- `chore`: Para alterações de configurações e tarefas de manutenção.
- `docs`: Para alterações na documentação.
- `style`: Para alterações de formatação ou estilo que não afetam o código em si.
- `refactor`: Para alterações de código que não adicionam novas funcionalidades nem corrigem bugs.
- `test`: Para adição ou modificação de testes.

Exemplo de um commit usando a convenção:

```
feat: Adiciona endpoint de listagem de empresas
```

### 3. Abra um Pull Request
Quando suas alterações estiverem prontas, abra um Pull Request para o branch `develop`. Descreva claramente o que foi alterado e adicione qualquer informação relevante. Seu Pull Request será revisado e, se estiver tudo certo, será mesclado ao branch `develop`.

### 4. Manutenção Contínua
Após a mesclagem do seu Pull Request, o projeto continuará evoluindo e você pode continuar contribuindo com novas funcionalidades e correções sempre que desejar.

Lembre-se de sempre manter um ambiente de respeito e colaboração ao contribuir para o projeto. Sua ajuda é valiosa e é graças à comunidade que o projeto pode crescer e se aprimorar. Seja bem-vindo(a) à equipe de contribuidores(as) deste projeto!
