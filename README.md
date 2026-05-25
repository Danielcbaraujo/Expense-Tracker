# Expense Tracker CLI

Um aplicativo de linha de comando (CLI) desenvolvido em Node.js para gerenciamento de despesas financeiras.

O projeto permite adicionar, listar, atualizar, remover e resumir despesas utilizando armazenamento local em arquivo JSON.

---

# Funcionalidades

- Adicionar despesas
- Listar despesas
- Atualizar despesas
- Remover despesas
- Visualizar resumo total das despesas
- Visualizar resumo por mês
- Persistência de dados usando JSON
- Estrutura modularizada
- Validação básica de entrada

---

# Tecnologias Utilizadas

- JavaScript
- Node.js
- File System (fs)
- JSON

---

# Estrutura do Projeto

```txt
expense-tracker/
│
├── index.js
├── expenses.json
│
├── commands/
│   ├── addExpense.js
│   ├── listExpenses.js
│   ├── deleteExpense.js
│   ├── updateExpense.js
│   └── summaryExpense.js
│
├── utils/
│   ├── readExpenses.js
│   └── saveExpenses.js
│
└── README.md
```

---

# Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/expense-tracker.git
```

Entre na pasta do projeto:

```bash
cd expense-tracker
```

Inicialize o projeto:

```bash
npm install
```

---

# Como Utilizar

## Adicionar uma despesa

```bash
node index.js add --description "Pizza" --amount 40
```

Saída:

```bash
Despesa adicionada com sucesso! (ID: 1)
```

---

## Listar despesas

```bash
node index.js list
```

Saída:

```bash
ID | DESCRIPTION | AMOUNT | DATE
1 | Pizza | $40 | 2026-05-25
```

---

## Atualizar despesa

```bash
node index.js update --id 1 --description "Pizza Grande" --amount 60
```

Saída:

```bash
Despesa atualizada com sucesso!
```

---

## Remover despesa

```bash
node index.js delete --id 1
```

Saída:

```bash
Despesa removida com sucesso!
```

---

## Resumo total das despesas

```bash
node index.js summary
```

Saída:

```bash
Total de despesas: $120
```

---

## Resumo por mês

```bash
node index.js summary --month 5
```

Saída:

```bash
Total do mês 5: $80
```

---

# Estrutura dos Dados

As despesas são armazenadas no arquivo `expenses.json`.

Exemplo:

```json
[
  {
    "id": 1,
    "description": "Pizza",
    "amount": 40,
    "date": "2026-05-25"
  }
]
```

---

# Conceitos Aplicados

Este projeto utiliza diversos conceitos importantes do desenvolvimento backend:

- Manipulação de arquivos
- CRUD
- Modularização
- Persistência de dados
- Validação de entrada
- Arrays e objetos
- Métodos de array (`find`, `filter`, `reduce`)
- Organização de código
- Arquitetura em camadas

---

# Melhorias Futuras

- Categorias de despesas
- Exportação para CSV
- Definição de orçamento mensal
- Integração com banco de dados
- Uso do Commander.js
- Testes automatizados
- Interface gráfica

---

# Aprendizados

Este projeto foi desenvolvido com foco em:

- prática de JavaScript
- lógica de programação
- desenvolvimento backend com Node.js
- construção de aplicações CLI
- organização profissional de projetos

---

# Autor

Desenvolvido por Daniel.
