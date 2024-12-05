<div align="center">
    <img src="./public/logocumtual-23.webp" alt="Logo Cumtual" width="200" />
</div>

# Pagina Cumtual

## Para ejecutar la aplicacion por primera vez

```sh
npm install
```

> 🧑‍🚀 **No puedes visualizar algo? Contacta a Luis**

> 🧑‍🚀 **Recuerda que se eliminaron las rutas relativas por lo que toda ruta que sea hacia una nueva carpeta debe declararse en el archivo:**

```text
    tsconfig.json y en el archivo astro.config.mjs

    astro.config.mjs:
```

```javascript
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@pages": "/src/pages",
        "@styles": "/src/styles",
      },
    },
  },
  site: "https://cumtual-demo.netlify.app",
  integrations: [
    tailwind(),
    react({
      experimentalReactChildren: true,
    }),
  ],
});
```

```text
    tsconfig.json:
```

```javascript
    {
    "extends": "astro/tsconfigs/base",
    "compilerOptions": {
        "baseUrl": ".", // Define la raíz del proyecto
        "jsx": "react-jsx",
        "jsxImportSource": "react",
        "paths": {
        "@components/*": ["src/components/*"],
        "@layouts/*": ["src/layouts/*"],
        "@pages/*": ["src/pages/*"],
        "@styles/*": ["src/styles/*"]
        }
    }
}
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
|   └── components/
|       └── botonHeaderMX/
|          └── Boton.tsx
|          └── OpcionesIdioma.tsx
|       └── ComponentesEN/
|          └── ContactUs.astro
|          └── Form.tsx
|       └── ComponentesES/
|          └── BurguerMenu.tsx
|          └── ContactanosBoton.astro
|          └── Formulario.tsx
|          └── Header.astro
|          └── MenuStore.ts
|          └── NavBar.tsx
|          └── ServiciosSlider.tsx
|          └── Slider.tsx
|       └── SVG/
|          └── CumtualElevamos.astro
|          └── DesarrolloIcon.astro
|          └── DesarrolloIconPC.astro
|          └── HerramientasDesarrollo.astro
|          └── InsigniaAdaptabilidad.astro
|          └── InsigniaCalidad.astro
|          └── LogoIcon.astro
|          └── LogoIconPC.astro
|          └── NubeIcon.astro
|          └── NubeIconPC.astro
|          └── SlideIcon.astro
|       └── UI/
|          └── BotonHomeSeleccionarIdioma.tsx
|          └── BotonServicios.tsx
|          └── BotonWhatsapp.tsx
|          └── OpcionHome.tsx
|       └── Footer.astro
│   └── Layouts/
|       └── BaseLayoutEN.astro
|       └── BaseLayoutES.astro
|       └── Layout.astro
│   └── pages/
|       └── en-US/
|          └── about-us
|             └── index.astro
|          └── contact-us
|             └── index.astro
|          └── services
|             └── cloud-storage
|               └── index.astro
|             └── custom-web-development
|               └── index.astro
|             └── logos
|               └── index.astro
|          └── index.astro
|       └── es-MX/
|          └── acerca-de-nostros
|             └── index.astro
|          └── contactanos
|             └── index.astro
|          └── servicios
|             └── almacenamiento-en-la-nube
|               └── index.astro
|             └── desarrollo-web-a-la-medida
|               └── index.astro
|             └── portafolio-logos
|               └── index.astro
|          └── index.astro
│       └── 404.astro
│       └── index.astro
│   └── styles/
│       └── globals.css
│       └── prototype.css
└── .gitignore
└── astro.config.mjs
└── convertirImagen.js
└── package-lock.json
└── package.json
└── README.json
└── tailwind.config.js
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npx astro dev --host`    | Levantar aplicación en red local                 |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
