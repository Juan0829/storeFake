# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


***PASOS PARA CREAR EL PROYECTO DESDE 0***
# Crea un nuevo proyecto Vite con React
npx create-vite my-rick-and-morty-wiki --template react

# Ingresa al directorio del proyecto
cd my-rick-and-morty-wiki

# Instala Bootstrap
npm install bootstrap



***Crea los siguientes componentes en el directorio src/components:***

Card.js
Pagination.js
Search.js
Filter.js
Navbar.js



***OJO***

En el código proporcionado para el componente principal App.jsx, la llamada a la API se realiza dentro del useEffect. Aquí tienes una explicación detallada:
<img width="1280" alt="Captura de Pantalla 2023-11-16 a la(s) 8 19 11 p m" src="https://github.com/wjulifajarb/APIREACT/assets/44068486/47962fdf-8e5e-4790-9a28-db45743e4399">


<img width="772" alt="Captura de Pantalla 2023-11-16 a la(s) 8 19 33 p m" src="https://github.com/wjulifajarb/APIREACT/assets/44068486/8fafc446-ab3d-4f2f-ab9f-c8a40464420a">






En el useEffect, se utiliza la función fetchData que realiza una llamada a la API de Rick and Morty. La URL de la API se construye utilizando el término de búsqueda (searchTerm) y el filtro (filter). Cuando estos valores cambian, la llamada a la API se vuelve a realizar.

La función fetchData se ejecuta la primera vez que el componente se monta y luego cada vez que searchTerm o filter cambian, asegurando que los datos se actualicen según los criterios de búsqueda y filtro del usuario.
