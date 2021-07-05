
# Proyecto Individual - Videogame App

<p align="right">
  <img height="200" src="./videogame.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Aplicación en la cual se puedan ver los distintos videojuegos disponibles junto con información relevante de los mismos utilizando la api externa [rawg](https://rawg.io/apidocs) y a partir de ella poder, entre otras cosas:

  - Buscar videjuegos
  - Filtrarlos / Ordenarlos
  - Agregar nuevos videojuegos

__IMPORTANTE__: Para las funcionalidades de filtrado y ordenamiento no se utilizaron los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados sino que fueron realizados por mi mismos.

## Demo
<div align="center">
   <img height="250" width="250" src="./imgDemo/2.png" />
  <img height="250" src="./imgDemo/1.png" />
  <img height="250" src="./imgDemo/3.png" />
  <img height="250" src="./imgDemo/4.png" />
</div>


## Duracion

El proyecto se realizo en una duración de tres semanas.

## Comenzando

#### Tecnologías Usadas :
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

Adicionalmente cree una base de datos desde psql llamada `videogames`

El contenido de `client` fue creado usando: Create React App.


__IMPORTANTE__: No se utilizo ninguna librería externa para aplicar estilos a la aplicación. (CSS puro)

#### Frontend

__Ruta principal__: 
- [ ] Input de búsqueda para encontrar videojuegos por nombre
- [ ] Área donde se verá el listado de videojuegos.
- [ ] Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating
- [ ] Paginado para ir buscando y mostrando los siguientes videojuegos

__Ruta de detalle de videojuego__:
- [ ] Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
- [ ] Descripción
- [ ] Fecha de lanzamiento
- [ ] Rating
- [ ] Plataformas

__Ruta de creación de videojuegos__:
- [ ] Un formulario __controlado__ con los siguientes campos
  - Nombre
  - Descripción
  - Fecha de lanzamiento
  - Rating
- [ ] Posibilidad de seleccionar/agregar varios géneros
- [ ] Posibilidad de seleccionar/agregar varias plataformas
- [ ] Botón/Opción para crear un nuevo videojuego

#### Base de datos

El modelo de la base de datos tiene las siguientes entidades:

- [ ] Videojuego con las siguientes propiedades:
  - ID: 
  - Nombre *
  - Descripción *
  - Fecha de lanzamiento
  - Rating
  - Plataformas *
- [ ] Genero con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades son de muchos a muchos ya que un videojuego puede pertenecer a varios géneros en simultaneo y, a su vez, un género puede contener múltiples videojuegos distintos. 


#### Backend

Servidor en Node/Express con diversas rutas

