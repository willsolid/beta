# Documentação do Projeto IBMi Website

## Visão Geral
Este é um projeto web moderno construído com React e Vite, utilizando uma stack tecnológica atual e robusta para desenvolvimento frontend, integrado com Supabase para backend.

## Stack Tecnológica

### Principais Tecnologias
- **React 18**: Framework principal para construção da interface
- **Vite**: Build tool e servidor de desenvolvimento
- **TailwindCSS**: Framework CSS para estilização
- **Supabase**: Backend as a Service (BaaS) para autenticação e banco de dados
- **Zustand**: Gerenciamento de estado
- **React Router**: Roteamento da aplicação

### Bibliotecas de UI
- **Radix UI**: Componentes de interface acessíveis
- **Framer Motion**: Animações
- **Lucide React**: Ícones
- **Class Variance Authority**: Gerenciamento de variantes de componentes

## Estrutura do Projeto

```
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── contexts/       # Contextos React
│   ├── lib/           # Utilitários e configurações
│   │   └── supabase.js # Configuração e funções do Supabase
│   ├── pages/         # Páginas da aplicação
│   ├── App.jsx        # Componente principal
│   ├── main.jsx       # Ponto de entrada
│   └── index.css      # Estilos globais
├── public/            # Arquivos estáticos
├── DOC/              # Documentação
├── .cursor/          # Configurações do Cursor IDE
└── [configurações]   # Arquivos de configuração
```

## Configuração do Ambiente

### Pré-requisitos
- Node.js (versão LTS recomendada)
- npm ou yarn

### Instalação
1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Configure o arquivo `.env` na raiz do projeto:
```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

### Scripts Disponíveis
- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a build de produção
- `npm run preview`: Visualiza a build de produção localmente

## Autenticação e Banco de Dados

### Configuração do Supabase
O projeto utiliza Supabase como backend, oferecendo:
- Login com Google
- Login com Facebook
- Autenticação tradicional (email/senha)

### Estrutura do Banco de Dados

#### Tabela `profiles`
Armazena informações dos usuários:
- `id`: UUID (referência à auth.users)
- `updated_at`: Timestamp
- `username`: Texto (único)
- `full_name`: Texto
- `avatar_url`: Texto
- `website`: Texto

### Políticas de Segurança (RLS)
- Perfis públicos são visíveis para todos
- Usuários podem inserir apenas seu próprio perfil
- Usuários podem atualizar apenas seu próprio perfil

### Triggers Automáticos
1. `handle_updated_at`: Atualiza o timestamp quando o perfil é modificado
2. `handle_new_user`: Cria perfil automaticamente após registro

## Funções de Autenticação
Disponíveis em `src/lib/supabase.js`:
- `signInWithGoogle()`: Login com Google
- `signInWithFacebook()`: Login com Facebook
- `signInWithEmail(email, password)`: Login com email/senha
- `signOut()`: Logout
- `getCurrentUser()`: Obtém dados do usuário atual
- `checkSupabaseConnection()`: Verifica conexão com Supabase

## Estilização
- TailwindCSS para estilização
- Sistema de design consistente
- Animações com Framer Motion
- Componentes acessíveis com Radix UI

## Gerenciamento de Estado
- Zustand para gerenciamento de estado global
- Context API para estados específicos de componentes

## Boas Práticas
1. **Componentização**: Componentes pequenos e reutilizáveis
2. **Acessibilidade**: Componentes Radix UI para garantir acessibilidade
3. **Performance**: Lazy loading e code splitting
4. **SEO**: Meta tags e estrutura semântica
5. **Segurança**: Variáveis de ambiente e Row Level Security

## Desenvolvimento

### Padrões de Código
- ESLint para linting
- Prettier para formatação
- TypeScript para type safety

### Workflow de Desenvolvimento
1. Criar branch para nova feature
2. Desenvolver feature
3. Testar localmente
4. Criar PR
5. Code review
6. Merge após aprovação

## Deploy
O projeto pode ser deployado em qualquer serviço que suporte aplicações Vite/React, como:
- Vercel
- Netlify
- GitHub Pages

## Manutenção
- Manter dependências atualizadas
- Seguir padrões de código
- Documentar novas features
- Realizar testes regulares

## Suporte
Para questões técnicas ou suporte, entre em contato com a equipe de desenvolvimento.

## Licença
[Inserir informações sobre licença] 