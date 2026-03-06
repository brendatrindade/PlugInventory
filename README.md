# PlugInventory · Catálogo de Produtos

Aplicação de listagem de produtos com busca, paginação e drawer de detalhes. Desenvolvida com **React**, **TypeScript**, **React Query**, **Material UI** e **Vite**. Dados mockados e estado controlado via parâmetros da URL.

## Tecnologias

- **React**
- **TypeScript**
- **Vite**
- **React Router DOM**
- **React Query**
- **Material UI**

## Instalação e execução

### Pré-requisitos

- Node.js 18+
- npm, pnpm ou yarn

### Comandos

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Funcionalidades

### 1. Tabela paginada de produtos

- Colunas: **ID**, **Nome**, **Categoria**, **Preço**, **Estoque**, **Status**.
- Linhas:
   - Clicáveis apenas quando o status é **Ativo**.
   - Linha com estado **Inativo** exibida com menor destaque visual.
   - Hover com feedback visual apenas para itens ativos.
- Estados de UI:
   - **Loading** com skeleton na tabela.
   - **Erro** com mensagem dedicada.
   - **Empty state** amigável, usando o termo de busca truncado quando aplicável.

### 2. Campo de busca com debounce

- Busca por **nome** e **categoria** simultaneamente.
- Debounce de **500ms** implementado via hook `useDebounce`.
- Termo de busca é:
   - Mantido na URL (`?search=...`).
   - Normalizado na requisição sendo case-insensitive com remoção de espaços extras, preservando o valor digitado no input.
- Ao alterar a busca:
   - A página é resetada para **1**.
   - A busca é preservada em recarregamentos e navegação (URL-driven).

### 3. Paginação

- Itens por página: **10, 20, 50**.
- Controle via URL:
   - `?page=1&size=10`.
- Mantém parâmetros ao recarregar a página.
- Exibe range e total: ex.: `1-10 de 50`.
- Navegação entre páginas mantém os dados anteriores enquanto carrega os novos, graças ao `placeholderData` do React Query.

### 4. Drawer de detalhes

- Ao clicar em uma linha ativa, abre um drawer lateral à direita.
- Controlado via URL: `?productId=<id>`.
- Exibe:
   - **ID do Produto**
   - **Nome completo**
   - **Descrição**
   - **Categoria**
   - **Preço** formatado (`Intl.NumberFormat`)
   - **Quantidade em estoque**
   - **Status**
   - **Data de criação** formatada (`Intl.DateTimeFormat` – `DD/MM/YYYY HH:mm`)
- Produto **Inativo** não abre o drawer (nem pela URL): o parâmetro é removido da URL.
- UX:
   - Botão de fechar (`X`) com `aria-label`.
   - Fecha ao clicar fora (backdrop).
   - Remove `productId` da URL ao fechar.
   - Em mobile, ocupa 90% da largura.

### 5. Dados mockados

- Arquivo `mocks/productsMock.ts` com **50+ produtos**:
   - Variação de categoria, preço, estoque, status e datas.

- Função `fetchProducts` em `mocks/products.ts`:
   - Simula latência de 500ms.
   - Aplica filtro por nome/categoria com normalização de busca.
   - Realiza paginação em memória e retorna um `PaginatedResponse<Product>`.

## Testes

### Cypress e Testes E2E

O projeto utiliza **Cypress** para testes end-to-end (e2e), garantindo a qualidade e funcionalidade da aplicação em um ambiente real de navegador.

#### Configuração

- Base URL: `http://localhost:5173`
- Arquivos de teste: `cypress/e2e/**/*.cy.ts`
- Arquivo de suporte: `cypress/support/e2e.ts`

#### Scripts disponíveis

```bash
# Abrir interface do Cypress
npm run test:e2e

# Executar testes em modo headless
npm run test:e2e:run
```

#### Cenários de teste cobertos

1. **Carregamento da listagem com paginação**
   - Verifica se a tabela carrega produtos corretamente
   - Valida presença de linhas na tabela

2. **Filtragem de produtos pela busca**
   - Testa entrada de texto no campo de busca
   - Verifica atualização da URL com parâmetro `search`
   - Confirma que os resultados filtrados aparecem na tabela

3. **Abertura do drawer para produtos ativos**
   - Clica em uma linha de produto com status "Ativo"
   - Valida abertura do drawer lateral com detalhes do produto

4. **Impedimento de abertura do drawer para produtos inativos**
   - Tenta clicar em uma linha de produto com status "Inativo"
   - Confirma que o drawer não é aberto

#### Seletores de teste

Os testes utilizam seletores `data-cy` para identificar elementos na interface:

- `product-search-input`: Campo de busca
- `products-table`: Tabela de produtos
- `product-row`: Linha da tabela
- `product-drawer-title`: Título do drawer
- `product-status-chip`: Chip de status do produto

## Arquitetura

### Estrutura de pastas

```text
src/
├── components/
│   ├── Layout/
│   │   ├── index.ts
│   │   ├── AppLayout.tsx
│   │   ├── AppHeader.tsx
│   │   └── AppLogo.tsx
│   ├── ProductsPageHero/
│   │   └── index.tsx
│   ├── ProductSearch/
│   │   ├── index.tsx
│   │   └── ProductSearchFeedback.tsx
│   ├── ProductTable/
│   │   ├── index.tsx
│   │   ├── ProductTableRow.tsx
│   │   ├── ProductTableHeader.tsx
│   │   ├── ProductTableSkeleton.tsx
│   │   ├── ProductTableEmpty.tsx
│   │   ├── ProductTableError.tsx
│   │   └── tableLabels.ts
│   ├── ProductPagination/
│   │   ├── index.tsx
│   │   └── paginationLabels.ts
│   └── ProductDrawer/
│       ├── index.tsx
│       ├── ProductDrawerHeader.tsx
│       ├── ProductDrawerContent.tsx
│       ├── ProductDetails.tsx
│       └── DetailField.tsx
├── contexts/
│   └── ProductsContext.tsx
├── hooks/
│   ├── useProducts.ts
│   ├── useDebounce.ts
│   ├── useProductSearch.ts
│   ├── useProductPagination.ts
│   ├── useProductDrawer.ts
│   └── useProductTable.ts
├── mocks/
│   ├── products.ts
│   └── productsMock.ts
├── pages/
│   └── Products/
│       └── index.tsx
├── types/
│   ├── index.ts
│   ├── product.ts
│   ├── layout.ts
│   ├── table.ts
│   ├── drawer.ts
│   └── search.ts
├── utils/
│   └── formatters.ts
├── theme/
│   ├── palette.ts
│   ├── theme.ts
│   └── tokens.ts
├── App.tsx
└── main.tsx
```

### Fluxo de dados

- **URL como fonte de verdade**: `page`, `size`, `search` e `productId` vêm de `useSearchParams()`.
- **useProducts**: lê os params, normaliza o termo de busca, aplica debounce e chama `fetchProducts` (mocks). Retorno usado via **ProductsContext**.
- **ProductsProvider**: envolve a página de produtos; `useProducts()` é chamado uma vez e o resultado é exposto por `useProductsContext()` para tabela, paginação, drawer e busca.
- **Hooks de UI**: `useProductTable`, `useProductPagination`, `useProductDrawer`, `useProductSearch` usam o context e os search params para derivar estado e handlers.

### Responsabilidades

- **ProductTable**: orquestra loading (skeleton), erro, vazio e tabela com dados; usa subcomponentes (Header, Row, Skeleton, Error, Empty) e `tableLabels`.
- **ProductSearch**: campo de busca + feedback de “buscando”; valor do input e URL sincronizados no hook.
- **ProductPagination**: exibe e altera página/tamanho via URL; labels em `paginationLabels`.
- **ProductDrawer**: abre/fecha por `productId` na URL.
- **Tipos**: centralizados em `types/` (product, layout, table, drawer, search) e reexportados em `types/index.ts`.

### Formatação e tema

- **utils/formatters.ts**: `formatPrice`, `formatDate`, `normalizeSearchTerm`, `truncateSearchTerm`.
- **theme**: `palette`, `theme` (MUI) e `tokens` (espaçamentos, larguras, etc.) para layout e componentes.

## UI / UX

- **Identidade visual**
   - Tema escuro: fundo azul profundo, destaques em amarelo e turquesa.
   - Tipografia principal: **Poppins** (via Google Fonts).
   - Layout com `AppLayout` contendo header fixo e área principal com cards.

- **Tabela**
   - Exibe colunas completas em desktop.
   - Em telas pequenas, a tabela permite scroll horizontal controlado via `TableContainer`.
   - Textos longos tratados com `ellipsis` + `title` (tooltip nativo) para manter o layout limpo.

- **Feedbacks de estado**
   - Loading e fetching com `CircularProgress`.
   - Skeleton rows na tabela enquanto carrega produtos.
   - Mensagens claras para erro e “Nenhum produto encontrado”.

- **Acessibilidade**
   - `aria-label` no botão de fechar do drawer.
   - Cabeçalho de tabela semântico (`<TableHead>` / `<TableRow>` / `<TableCell>`).
   - Foco visível customizado via tema (`MuiButtonBase`).

## Requisitos atendidos

- [x] Listagem de produtos
- [x] Busca por nome/categoria com debounce 500ms
- [x] Paginação (10/20/50) e controle por URL
- [x] Drawer de detalhes controlado por `productId` na URL
- [x] Dados mockados e tipos `Product` / `PaginatedResponse`
- [x] React Query, Material UI, React Router, TypeScript
- [x] Parâmetros persistidos na URL e produto inativo não acessível no drawer

## Possíveis evoluções

- Componentes reutilizáveis para:
   - `PageHero` se houver mais dashboards.
   - `SideDrawer` genérico controlado por query param.
- Tratamento de erro com retry e feedback na UI.
- Maior cobertura nos casos de testes.
