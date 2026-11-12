# 🚀 Dev Portfolio Project — Arquitectura de Software (UCEVA)

**Estudiante:** Javier Eduardo Morán Jurado  
**GitHub:** [@javiereduardomoranjurado](https://github.com/javiereduardomoranjurado)  
**Asignatura:** Arquitectura de Software — Facultad de Ingeniería, UCEVA  
**Docente:** Ing. Jesús David Mejía Vergara  

---

## 📌 Descripción del Proyecto

Portafolio digital desarrollado en **Angular 20** que funciona como catálogo centralizado de los **5 proyectos** desarrollados durante el curso de Arquitectura de Software. Cada proyecto cuenta con su propio repositorio en GitHub y un pipeline de **CI/CD con GitHub Actions** (`.github/workflows/pipeline.yml`) que automatiza la instalación de dependencias, ejecución de pruebas unitarias con **Jest**, compilación de producción y despliegue continuo en **GitHub Pages** sobre la rama `main`.

---

## 🗂️ Catálogo de los 5 Proyectos

| # | Proyecto | Repositorio | Aplicación Desplegada (GitHub Pages) |
|---|----------|-------------|--------------------------------------|
| 1 | **Portafolio (Proyecto Principal)** | [Ver Repositorio](https://github.com/javiereduardomoranjurado/Portafolio) | [Ver Aplicación](https://javiereduardomoranjurado.github.io/Portafolio/) |
| 2 | **Uceva-Astro-Angular-SSG-SPA** | [Ver Repositorio](https://github.com/javiereduardomoranjurado/Uceva-Astro-Angular-SSG-SPA) | [Ver Aplicación](https://javiereduardomoranjurado.github.io/Uceva-Astro-Angular-SSG-SPA/) |
| 3 | **Uceva-Angular-Taller-Design-System** | [Ver Repositorio](https://github.com/javiereduardomoranjurado/Uceva-Angular-Taller-Design-System) | [Ver Aplicación](https://javiereduardomoranjurado.github.io/Uceva-Angular-Taller-Design-System/) |
| 4 | **Uceva-Angular-Taller-Modules** | [Ver Repositorio](https://github.com/javiereduardomoranjurado/Uceva-Angular-Taller-Modules) | [Ver Aplicación](https://javiereduardomoranjurado.github.io/Uceva-Angular-Taller-Modules/) |
| 5 | **Uceva-Angular-NodeJS-Taller-Client-Server** | [Ver Repositorio](https://github.com/javiereduardomoranjurado/Uceva-Angular-NodeJS-Taller-Client-Server) | [Ver Aplicación](https://javiereduardomoranjurado.github.io/Uceva-Angular-NodeJS-Taller-Client-Server/) |

---

## 🛠️ Ejecución Local

```bash
# 1. Instalar dependencias
npm ci

# 2. Ejecutar pruebas unitarias (Jest)
npm test

# 3. Ejecutar servidor de desarrollo
npm start

# 4. Compilar para producción (GitHub Pages)
npm run build -- --base-href "/Portafolio/"
```
