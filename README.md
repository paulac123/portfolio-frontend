# Portafolio — Paula Cruz 👩‍💻

Mi portafolio personal como Desarrolladora Fullstack, construido con React y alimentado por una API propia en Node.js.

🔗 **Ver en línea:** [paulacruzlo.com](https://paulacruzlo.com/)

## ✨ Funcionalidades

- Contenido servido desde una **API REST propia** ([portfolio-backend](https://github.com/paulac123/portfolio-backend)).
- **Modo oscuro** con transición suave.
- **Botón directo a WhatsApp**, LinkedIn y GitHub.
- Imágenes alojadas en **AWS S3**.
- Diseño responsive.

## 🛠️ Tecnologías

- **React** + **Vite**
- **Axios** — consumo de la API
- **AWS** — despliegue y almacenamiento de imágenes (S3)

## 🚀 Instalación

```bash
git clone https://github.com/paulac123/portfolio-frontend.git
cd portfolio-frontend
npm install
```

Crea un archivo `.env`:

```
VITE_API_URL=http://localhost:3000
```

```bash
npm run dev
```
