<h1 align="center"> codigoSecretoJuego  </h1>

## Introducción
La idea de este proyecto era poner en práctica conceptos aprendidos en el curso básico de Angular de OpenBootcamp. El mismo es una representación del juego "Código Secreto". Presenta las mismas reglas y forma de juego. Mi meta era practicar Angular por lo que el proyecto no tiene un backend real sino un par de archivos para generar las palabras aleatorias y manejar el ingreso de varios jugadores.

## Sobre el juego
Básicamente se trata de adivinar palabras. El objetivo del juego es ser el primer equipo en adivinar todas las palabras de tu mismo color. Para poder jugar correctamente se necesitan al menos 4 jugadores, donde 2 de ellos serán los "Espías Jefes" y el resto serán los "Espías Operativos". Los espías jefes irán dando pistas a su equipo para adivinar las palabras de su color, esto se hará dando una pista que consta de una única palabra junto a un número, el cual indicará la cantidad de palabras a adivinar para esa pista. Por ejemplo: madera 3. Entonces el resto del equipo tiene que encontrar 3 palabras relacionadas a "madera". Se pueden dar los siguientes casos:
- El equipo adivino una de las palabras: si el equipo adivina una palabra puede continuar adivinando las otras, o si lo desea, puede frenar en ese momento y será el turno del otro equipo.
- El equipo seleccionó una palabra "neutral": en ese instante finaliza el turno del equipo.
- El equipo seleccionó una palabra del otro equipo: en ese instante finaliza el turno del equipo. No sucede nada, simplemente le regalaste una palabra al otro equipo.
- El equipo seleccionó la palabra bomba: en ese instante finaliza TODO el juego, el equipo pierde.

Una vez adivinadas todas las palabras del equipo o al haber sido seleccionada la bomba. Finaliza el juego.
Una ligera diferencia con el juego original es que en este, cada equipo tiene la misma cantidad de palabras (8). Mientras que en el original tiene un equipo una carta de más.
<div align="center">
  <img src="https://github.com/user-attachments/assets/4fbf6b32-cd01-41d8-9942-ff9fb60bc4a2" width="300">
</div>

## Herramientas, lenguajes y tecnologías utilizadas
<p align="center">
  <img src="https://github.com/user-attachments/assets/ea06a514-94b7-46be-b93f-23e28a584b8b" style="width: 60px; height: auto;" />
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebRBzJhW1BDg-1D9keKRb3e0GXVBUBI1ORA&s" style="width: 50px; height: auto;" />
</p>

## Estructura del proyecto
El contenido del proyecto se divide en dos carpetas:
- backend
- frontend

### Backend
Dentro de esta carpeta los archivos de mayor importancia son:
- **index.js**: para configurar e iniciar un servidor web en tiempo real, utilizando socket.IO para manejar eventos, como cuando un cliente nuevo se conecta al servidor. Esto permite que puedan jugar varios usuarios utilizando distintos dispositivos.
- **words.js**: contiene la lógica para obtener las 25 palabras aleatorias de cada partida. Toma del arreglo de palabras 25 de ellas al azar, va guardando 8 para cada equipo (también aleatoriamente) y guarda una palabra como "bomba".

### Frontend
Contiene cuatro componentes:
1. **CardComponent**: son las tarjetas individuales en sí, es decir, configura cómo se mostrará cada tipo de tarjeta.
   Hice en Figma los fondos de cada tarjeta para que fueran más personalizados:
   ![tarjetas](https://github.com/user-attachments/assets/c04ee801-974d-4548-b7ac-9671084822f9)

3. **GameComponent**: este componente es el que permite jugar. Contiene las tarjetas y algunos botones extra.
4. **HowToPlayComponent**: sólo utilizado para mostrar las reglas y enseñar a jugar a este juego. Funciona como pop up que se abre desde un botón del lobby.
5. **LobbyComponent**: tiene el botón para comenzar juego y el que permite ver cómo jugar.

## ¿Cómo utilizar el programa?
### Correrlo localmente
Para poder jugar, es necesario descargar el repositorio y ejecutarlo. Para ello primero abrimos una terminal y nos vamos a la carpeta "backend" e instalamos las dependencias con el comando ```npm install``` y luego correrlo con ```npm run dev```.
Luego en otra terminal hay que ir a la carpeta de frontend (sin cerrar la anterior), y también ejecutar ```npm install``` para que se instalen todas las dependencias necesarias. Finalmente, corremos el comando ```ng serve``` para iniciar el frontend y entramos al enlace que nos da.

## Mejoras a futuro
- [ ] Desplegar el proyecto para poder jugarlo sin tener que correrlo localmente
- [X] Finalizar el juego cuando uno de los equipos complete sus tarjetas o haya seleccionado la bomba
- [X] Que al finalizar muestre un pop up indicando qué equipo gano. Para eso tengo que tener un registro del turno de cada equipo en caso de que uno presione la bomba (agregar botón de pasar).
- [X] Añadir botón para agregar amigos así no hay que copiar el enlace desde la barra de navegación
- [X] Al cliquear sobre una palabra, que no se revele el color directamente, sino que se preseleccione y aparezca un botón de confirmación, luego de confirmado recién ahí se revele el color de la tarjeta
