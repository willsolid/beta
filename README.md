# IBMi Website

Projeto moderno de um website construído com React, Vite e Supabase.

## Sobre o Projeto

Este projeto é um website completo desenvolvido com tecnologias modernas de frontend e backend. Utiliza React para a interface, Vite como ferramenta de build, TailwindCSS para estilização e Supabase como backend para autenticação e banco de dados.

## Tecnologias Principais

- React 18
- Vite
- TailwindCSS
- Supabase
- Zustand
- React Router
- Radix UI
- Framer Motion

## Documentação

A documentação completa do projeto está disponível na pasta [DOC/documentacao.md](DOC/documentacao.md).

## Configuração Rápida

1. Clone o repositório:
```bash
git clone https://github.com/willsolid/beta.git
cd beta
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo `.env` na raiz do projeto:
```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a build de produção
- `npm run preview`: Visualiza a build de produção localmente

## Contribuição

Para contribuir com o projeto, por favor:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'feat: Nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request 