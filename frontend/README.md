# 🚀 DownPro

O **DownPro** é uma aplicação Full Stack para download de vídeos e músicas utilizando React, FastAPI e yt-dlp.

O projeto foi desenvolvido com foco em uma arquitetura organizada, interface moderna e boas práticas de desenvolvimento.

---

# 📸 Interface

> Em breve serão adicionadas capturas de tela da aplicação.

---

# ✨ Funcionalidades

- ✅ Download de vídeos
- ✅ Download de músicas (MP3)
- ✅ Seleção de qualidade
- ✅ Barra de progresso
- ✅ Status em tempo real
- ✅ Toasts de sucesso e erro
- ✅ Tratamento de exceções
- ✅ Comunicação React + FastAPI
- ✅ Interface moderna com Tailwind CSS

---

# 🛠 Tecnologias

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Sonner
- Lucide React

## Backend

- FastAPI
- Python
- yt-dlp
- FFmpeg

---

# 📂 Estrutura do Projeto

```
DownPro
│
├── backend
│   ├── downloads
│   ├── routes
│   ├── schemas
│   ├── services
│   ├── utils
│   ├── downloader.py
│   └── main.py
│
└── frontend
    ├── src
    │   ├── components
    │   ├── constants
    │   ├── hooks
    │   ├── pages
    │   ├── services
    │   ├── types
    │   └── utils
```

---

# ⚙️ Como executar

## 1️⃣ Clonar o projeto

```bash
git clone https://github.com/SEU-USUARIO/DownPro.git
```

---

## 2️⃣ Backend

```bash
cd backend

python -m venv venv
```

### Windows

```bash
.\venv\Scripts\activate
```

### Instalar dependências

```bash
pip install -r requirements.txt
```

### Iniciar a API

```bash
uvicorn main:app --reload
```

A API ficará disponível em:

```
http://127.0.0.1:8000
```

---

## 3️⃣ Frontend

```bash
cd frontend
```

Instalar dependências

```bash
npm install
```

Executar

```bash
npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```

---

# 📌 Requisitos

- Node.js
- Python 3.12+
- FFmpeg instalado e configurado no PATH
- Git

---

# 🗂 Roadmap

## ✅ Sprint 1
- Estrutura inicial
- React + FastAPI

## ✅ Sprint 2
- Interface inicial

## ✅ Sprint 3
- Backend de downloads

## ✅ Sprint 4
- Integração Frontend + Backend

## ✅ Sprint 5
- UX e Interface

## ✅ Sprint 6
- Arquitetura
- Services
- Types
- Constants
- Tratamento de erros

## 🚧 Sprint 7
- Histórico de downloads
- Fila de downloads
- Cancelamento de downloads
- Download simultâneo
- Empacotamento com Electron

---

# 👨‍💻 Autor

Desenvolvido por **Uilson Francisco do  Nascimento**.

GitHub:
https://github.com/uilsonfrancisco18

---

# 📄 Licença

Este projeto está licenciado sob a licença MIT.