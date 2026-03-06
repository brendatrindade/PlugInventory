# Desafio Técnico - Front-End

## 📋 Objetivo

Desenvolver uma aplicação React que exiba uma lista de produtos com funcionalidades de busca, paginação e visualização de detalhes. O desafio deve ser implementado usando **React Query**, **Material UI** e **TypeScript**.

## 🎯 Requisitos Funcionais

### 1. Listagem de Produtos (Tabela)

Criar uma tabela que exiba produtos com as seguintes colunas:

- **ID** - Identificador único do produto
- **Nome** - Nome do produto
- **Categoria** - Categoria do produto
- **Preço** - Preço formatado em R$ (ex: R$ 1.299,99)
- **Estoque** - Quantidade disponível em estoque
- **Status** - Status do produto ("Ativo" ou "Inativo")

**Requisitos da tabela:**
- As linhas devem ser clicáveis (exceto quando o status for "Inativo")
- Ao passar o mouse sobre uma linha clicável, deve haver feedback visual (hover)
- A tabela deve exibir um estado de loading durante o carregamento
- A tabela deve exibir uma mensagem quando não houver dados

### 2. Campo de Busca

Implementar um campo de busca que:

- Permita buscar produtos por **nome** ou **categoria**
- Tenha debounce de **500ms** (aguardar 500ms após o usuário parar de digitar)
- Atualize a URL com o parâmetro de busca (ex: `?search=notebook`)
- Ao alterar a busca, resetar para a página 1
- Manter o valor da busca ao recarregar a página

### 3. Paginação

Implementar paginação que:

- Exiba 10 itens por página (padrão)
- Permita alterar o tamanho da página (opções: 10, 20, 50)
- Controle a página atual e tamanho via URL params (`?page=1&size=10`)
- Exiba informações de paginação (ex: "Página 1 de 5" ou "1-10 de 50")
- Tenha botões de navegação (anterior/próxima)
- Mantenha os parâmetros de paginação ao recarregar a página

### 4. Drawer de Detalhes

Ao clicar em uma linha da tabela (produtos ativos), deve abrir um drawer lateral direito exibindo:

- **ID do Produto**
- **Nome Completo**
- **Descrição** (campo adicional não exibido na tabela)
- **Categoria**
- **Preço** (formatado)
- **Quantidade em Estoque**
- **Status**
- **Data de Criação** (formatada: DD/MM/YYYY HH:mm)

**Requisitos do drawer:**
- Deve ser controlado via URL params (ex: `?productId=123`)
- Deve ter botão de fechar (X)
- Deve fechar ao clicar fora (backdrop)
- Ao fechar, deve remover o parâmetro da URL

## 🛠️ Stack Tecnológica

- **React** (versão 18+)
- **TypeScript**
- **React Query** (TanStack Query) para gerenciamento de estado de servidor
- **Material UI (MUI)** para componentes de UI
- **React Router** para roteamento e controle de URL params
- **Vite** ou **Create React App** para build

## 💻 Ferramentas Permitidas

É **permitido e encorajado** o uso de ferramentas de IA assistente como **Cursor** ou outras ferramentas similares durante o desenvolvimento do desafio. O objetivo é avaliar sua capacidade de trabalhar com ferramentas modernas e entregar uma solução funcional e bem estruturada.

## 📦 Estrutura de Dados

### Tipo Product

```typescript
type Product = {
  id: number
  name: string
  description: string
  category: string
  price: number
  stock: number
  status: 'Ativo' | 'Inativo'
  created_at: string // ISO 8601 format
}
```

### Resposta Paginada

```typescript
type PaginatedResponse<T> = {
  items: T[]
  page: number
  pages: number
  size: number
  total: number
}
```

## 📊 Dados Mockados

Criar um arquivo com pelo menos **50 produtos** diferentes. Exemplo:

```typescript
// mocks/products.ts

export const productsMock: Product[] = [
  {
    id: 1,
    name: 'Notebook Dell Inspiron 15',
    description: 'Notebook Dell Inspiron 15 3000 com processador Intel Core i5, 8GB RAM, 256GB SSD',
    category: 'Eletrônicos',
    price: 3299.99,
    stock: 15,
    status: 'Ativo',
    created_at: '2024-01-15T10:30:00Z',
  },
  {
    id: 2,
    name: 'Mouse Logitech MX Master 3',
    description: 'Mouse sem fio Logitech MX Master 3 para produtividade',
    category: 'Periféricos',
    price: 599.99,
    stock: 42,
    status: 'Ativo',
    created_at: '2024-01-20T14:15:00Z',
  },
  {
    id: 3,
    name: 'Teclado Mecânico Keychron K2',
    description: 'Teclado mecânico sem fio Keychron K2 com switches Gateron Brown',
    category: 'Periféricos',
    price: 899.99,
    stock: 0,
    status: 'Inativo',
    created_at: '2024-01-10T09:00:00Z',
  },
  // ... adicionar mais 47 produtos variados
]

// Função para simular API com paginação e busca
export const fetchProducts = async (
  page: number = 1,
  size: number = 10,
  search: string = ''
): Promise<PaginatedResponse<Product>> => {
  // Implementar lógica de filtro e paginação aqui
  // Retornar dados paginados baseados nos parâmetros
}
```

## 🏗️ Estrutura de Pastas Sugerida

```
src/
├── components/
│   ├── ProductTable/
│   │   ├── index.tsx
│   │   └── ProductTableRow.tsx
│   ├── ProductSearch/
│   │   └── index.tsx
│   ├── ProductPagination/
│   │   └── index.tsx
│   └── ProductDrawer/
│       ├── index.tsx
│       └── ProductDetails.tsx
├── hooks/
│   ├── useProducts.ts          # Hook com React Query
│   └── useDebounce.ts          # Hook de debounce
├── mocks/
│   └── products.ts             # Dados mockados
├── types/
│   └── product.ts              # Tipos TypeScript
├── utils/
│   └── formatters.ts           # Funções de formatação (preço, data)
└── pages/
    └── Products/
        └── index.tsx            # Página principal
```

## 💡 Implementação Esperada

### 1. Hook useProducts

```typescript
// hooks/useProducts.ts
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { fetchProducts } from '../mocks/products'
import { useDebounce } from './useDebounce'

export const useProducts = () => {
  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const size = Number(searchParams.get('size')) || 10
  const search = searchParams.get('search') || ''
  
  const debouncedSearch = useDebounce(search, 500)

  return useQuery({
    queryKey: ['products', page, size, debouncedSearch],
    queryFn: () => fetchProducts(page, size, debouncedSearch),
  })
}
```

### 2. Hook useDebounce

```typescript
// hooks/useDebounce.ts
import { useEffect, useState } from 'react'

export const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
```

### 3. Componente de Busca

```typescript
// components/ProductSearch/index.tsx
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { TextField, InputAdornment } from '@mui/material'
import { Search } from '@mui/icons-material'

export const ProductSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [value, setValue] = useState(searchParams.get('search') || '')

  useEffect(() => {
    const currentSearch = searchParams.get('search') || ''
    if (currentSearch !== value) {
      setValue(currentSearch)
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    
    const newParams = new URLSearchParams(searchParams)
    if (newValue) {
      newParams.set('search', newValue)
      newParams.set('page', '1') // Resetar para página 1
    } else {
      newParams.delete('search')
      newParams.set('page', '1')
    }
    setSearchParams(newParams)
  }

  return (
    <TextField
      fullWidth
      placeholder="Buscar por nome ou categoria..."
      value={value}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  )
}
```

### 4. Drawer de Detalhes

```typescript
// components/ProductDrawer/index.tsx
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useSearchParams } from 'react-router-dom'
import { useProducts } from '../../hooks/useProducts'
import { ProductDetails } from './ProductDetails'

export const ProductDrawer = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const productId = searchParams.get('productId')
  const { data } = useProducts()
  
  const product = data?.items.find(p => p.id === Number(productId))

  const handleClose = () => {
    const newParams = new URLSearchParams(searchParams)
    newParams.delete('productId')
    setSearchParams(newParams)
  }

  return (
    <Drawer
      anchor="right"
      open={Boolean(productId)}
      onClose={handleClose}
      PaperProps={{
        sx: { width: '500px', padding: 3 }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6">Detalhes do Produto</Typography>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </Box>
      {product && <ProductDetails product={product} />}
    </Drawer>
  )
}
```

## ✅ Critérios de Avaliação

### Funcionalidade (40%)
- ✅ Tabela exibindo produtos corretamente
- ✅ Busca funcionando com debounce
- ✅ Paginação funcional
- ✅ Drawer abrindo ao clicar na linha
- ✅ Parâmetros persistidos na URL

### Qualidade do Código (30%)
- ✅ Uso correto do React Query
- ✅ TypeScript bem tipado
- ✅ Código limpo e organizado
- ✅ Hooks customizados quando apropriado
- ✅ Separação de responsabilidades

### UI/UX (20%)
- ✅ Interface consistente e profissional
- ✅ Estados de loading e empty state
- ✅ Feedback visual adequado
- ✅ Responsividade básica

### Boas Práticas (10%)
- ✅ Estrutura de pastas organizada
- ✅ Nomenclatura clara
- ✅ Tratamento de erros
- ✅ Performance (debounce, memoização quando necessário)

## 📝 Observações Importantes

1. **Não é necessário** criar um backend real - use apenas mocks
2. **Não é necessário** implementar todas as funcionalidades do Material UI - use o básico
3. **Foque** em código limpo e funcionalidade correta
4. **Formatação de valores**: Use `Intl.NumberFormat` para formatar preços e `Intl.DateTimeFormat` para datas
5. **Filtro de busca**: Deve funcionar tanto para nome quanto para categoria
6. **Status Inativo**: Produtos inativos não devem ser clicáveis na tabela

## 🚀 Como Entregar

1. Criar um repositório Git (GitHub, GitLab, etc.)
2. Implementar todas as funcionalidades solicitadas
3. Adicionar um README.md com:
   - Instruções de instalação
   - Como executar o projeto
   - Tecnologias utilizadas
5. Hospedar aplicação na Vercel (opcional)
4. Enviar o link do repositório/vercel



---

**Boa sorte! 🎉**
