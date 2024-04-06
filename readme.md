# Desafío Mercado Web
Este desafío es parte del curso de Desafio Latam, Desarrollo de aplicaciones Full Stack Js, en el cual validaremos nuestros conocimientos de CRUD de archivos con File System, además de verbos y parámetros para consultas HTTP y formularios HTML y servidores con Express

# Descripción del desafío
Sa necesita agregar una funcionalidad que permita a sus usuarios crear dentro de la plataforma los archivos con las extensiones y el contenido que deseen, el mismo debe ser almacenado en el servidor. Para realizarlo, se debe crear un servidor con Express que permita crear, leer, renombrar y eliminar archivos alojados en el servidor por medio de las rutas correspondientes. Se debe enviar los datos como parámetros en una consulta GET por medio de formularios HTML.

# Visuales

Este proyecto contiene 4 formulario, uno para cada función, crear, leer, editar (en este caso se renombra el nombre del archivo), y eliminar.

| Vista Principal | 
| --- | 
| ![Vista_Principal](/assets/páginaPrincipal.png)|  

El uso es muy sencillo
- Se debe dar un nombre a un archivo, el nombre debe terminar en .txt, y luego agregar el contenido (texto) que se prefiere y se crea un archivo al seleccionar su respectivo botón. 
- Para leer el archivo, debe colocar el nombre sin olvidar el '.txt' y consultar.
- Para renombrar el archivo, debe ingresar el nombre actual, y luego el nuevo nombre, no olvidar el '.txt' al final de cada nombre, y luego selecionar el botón que corresponde.
- Finalmente puede eliminar el archivo, solo indicándole el nombre, no olvidar el .txt


## Empezando 🚀

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Prerrequisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

- Sistema Operativo: puedes usar Ubuntu o Windows 10 o superior.
- Se trabajo con Javascript, html.
- Node versión v20.11.1
- Express

### Instalación 🔧

Para utilizar este proyecto debes clonar este repositorio en tu máquina, utilizando git.

```
git clone git@github.com:jesbell/welcomeWorld_.git
```

Una vez allí puedes abrir el proyecto donde te sea más comodo. Pero dentro de la carpeta del proyecto deberas realizar las instalación de las dependencias, con el siguiente comando.
```
npm install
```

Cuando se haya instalado todo, puedes realizar la ejecución del proyecto, llamando al archivo js para levantar el servidor.
```
node index.js
```

Abre el navegador de tu preferencia
```
localhost:3001
```

## Soporte

Si tienes algún problema o sugerencia, por favor abre un problema [aquí](https://github.com/jesbell/welcomeWorld_/issues).

## Versionado  📌

Usamos [Git](https://git-scm.com) para el versionado.

## Expresiones de Gratitud 🎁

Si encontraste cualquier valor en este proyecto o quieres contribuir, aquí está lo que puedes hacer:

- Comparte este proyecto con otros
- Invítanos un café ☕
- Inicia un nuevo problema o contribuye con un PR
- Muestra tu agradecimiento diciendo gracias en un nuevo problema.

---

⌨️ con ❤️ por [Joselyn Gonzalez](https://github.com/jesbell) 😊
