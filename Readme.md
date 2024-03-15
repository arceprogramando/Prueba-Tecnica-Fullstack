# Prueba Tecnica Middas

- El archivo fue abierto a Viernes 08 de Marzo a las 20 hs  , Tengo una Semana para su realización

## 🧞 Commands (Actualmente lo utilizo de esta forma para levantar el back y separado lo repito en el front)

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             |Para instalar las dependencias necesarias del proyecto|
| `npm run dev`             |Para inicializar los proyectos |


## 🌳 Tree

```text
/
├── backend
│       └── 
├── frontend
│       └── 
├── .gitignore
└── Readme.md
```


## Para la estructura de mis commits voy a utilizar https://www.conventionalcommits.org/en/v1.0.0/

### Para realizar este Arquitectura

- Backend

| Dependencias /Librerias | Funcionalidad                 |
| --------------- | --------------------------------------------------------------------------- |
| ✅ [node.js]    | Se  instalo a nivel local NodeJs.|
| ✅ [express]   | Se uso la libreria Express de NodeJs.|
| ✅ [cors]   | Se uso la libreria CORS como middleware para hacer la conexión entre mi backend y mi front|
| ✅ [dotenv]| Para realizar carga de una variable de entorno de un archivo .env |
| ✅ [cross-env]| Permite establecer variables de entorno de manera que funcionen en todos los sistemas operativos.| 
| ✅ [mongoose]|Gestionador de datos de mongodb e interfaz amigable para hacer la relacion entre mi api y mi BD |

# Estructura Variables de entorno BACKEND (example)

```code
**PORT=8080** 
**PERSISTENCE=MONGO**
**MONGODB_URI=mongodb+srv://cuenta:contraseña7@cluster3.gjraob5.mongodb.net/** 
**BASE_URL=http://localhost:8080**
**COLLECTION_NAME=books**
```

- Frontend

| Dependencias /Librerias | Funcionalidad                 |
| --------------- | --------------------------------------------------------------------------- |
| ✅ [vitejs] | Decidi utilizar vite ya que mi conocimiento en Nextjs es basico actualmente|
| ✅ [tailwindcss]    | Se utiliza tailwind como elemento recomendado por la Prueba tecnica|
| ✅ [sonner]    | Una libreria de elementos de alerta |

- General

| Dependencias /Librerias | Funcionalidad                 |
| --------------- | --------------------------------------------------------------------------- |
| ✅ [eslint] | Utilizo para lintear mi codigo y no tenga errores de escritura  |
| ✅ [prettier]| Utilizo para que de forma automatica me cambie los errores |
| ✅ [nodemon]| Para reiniciar la app cada vez que un codigo cambie |



[node.js]: <http://nodejs.org>
[express]: <http://expressjs.com>
[tailwindcss]: <https://tailwindcss.com>
[cors]: <https://www.npmjs.com/package/cors>
[vitejs]: <https://vitejs.dev>
[prettier]:<https://prettier.io>
[dotenv]:<https://www.npmjs.com/package/dotenv>
[cross-env]:<https://www.npmjs.com/package/cross-env>
[mongoose]:<https://mongoosejs.com>
[eslint]:<https://eslint.org>
[nodemon]:<https://www.npmjs.com/package/nodemon>
[sonner]:<https://sonner.emilkowal.ski>