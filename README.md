# Motin Films - Landing Page

Este projeto foi gerado automaticamente pelo **M2Z Creator**, focado em alta performance, SEO e rastreamento de dados granular.

Built with **Next.js 14 (App Router)**, **TypeScript** & **Tailwind CSS**.

---

## 🚀 Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Estilização:** Tailwind CSS v3 (Configuração estendida)
- **Animações:** Framer Motion (Scroll reveal & micro-interactions)
- **Ícones:** Lucide React
- **Analytics:** Ninetwo User Tracking (GTM Integration)

---

## 🛠️ Como Rodar Localmente

1. **Instale as dependências:**
   ```bash
   npm install

```

2. **Rode o servidor de desenvolvimento:**
```bash
npm run dev

```


3. **Acesse:** [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)

---

## 📊 Analytics & Tracking (Ninetwo)

Este projeto vem configurado nativamente com a biblioteca `ninetwo-user-tracking`.

### Configuração do GTM

O ID do Google Tag Manager está configurado em:
`app/providers.tsx` -> Procure por `gtmId="GTM-XXXXXX"`.

### Eventos Automáticos

O código já possui tags de rastreamento implementadas:

1. **View Events (Impressão de Seção):**
Disparado quando uma seção entra na viewport (tela) do usuário.
* Atributo: `data-nt-ut-type="view"`
* Exemplo: Saber se o usuário rolou até a seção de "Preços".


2. **Click Events (Interação):**
Disparado ao clicar em botões ou links importantes.
* Atributo: `data-nt-ut-type="click"`



---

## 🎨 Design System & Customização

As cores e fontes globais estão definidas para fácil alteração.

* **Cores:** Editável em `tailwind.config.ts`.
* `primary`: Cor principal (Botões, Destaques)
* `secondary`: Cor de apoio
* `bgDark`: Cor de fundo padrão


* **Fontes:** Utiliza `Inter` (via `next/font/google`) configurada em `app/layout.tsx`.
* **Imagens:** As imagens utilizam URLs dinâmicas do Unsplash (`source.unsplash.com`). Para produção, recomenda-se substituir por imagens estáticas em `/public`.

---

## 📂 Estrutura de Pastas

```bash
.
├── app/
│   ├── layout.tsx      # Configuração global (Fontes, CSS, Providers)
│   ├── page.tsx        # Página principal (Orquestrador de Seções)
│   ├── providers.tsx   # Wrapper do Tracking (Client Component)
│   └── globals.css     # CSS Global e Utilitários Tailwind
├── components/
│   ├── sections/       # Seções da Landing Page (Hero, Features, etc.)
│   └── ui/             # Componentes menores (se houver)
├── public/             # Assets estáticos (Logos)
└── tailwind.config.ts  # Configuração do Design System

```

---

## 🚢 Deploy

Recomendamos o deploy na **Vercel**:

1. Crie um repositório Git (GitHub/GitLab).
2. Importe o projeto na Vercel.
3. O Next.js será detectado automaticamente.
4. Deploy!
