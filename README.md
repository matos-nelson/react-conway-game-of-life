# Conway Game of Life

Conway Game of Life done in React js. See [here](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) for more details on Conway's Game of Life.

### Demo
Click this [Node.js](https://nodejs.org/) to see the code in action.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.
Install the dependencies and devDependencies and start the server.

```sh
$ cd react-conway-game-of-life
$ npm install
$ npm start
```

For production environments...

```sh
$ npm install --production
$ npm run build
```

### Docker
This application is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd react-conway-game-of-life
docker build -t conway-game-of-life .
```
This will create the conway-game-of-life image and pull in the necessary dependencies.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8080 of the host to port 80 of the Docker image(or whatever port was exposed in the Dockerfile):

```sh
docker run -d --name conway-container -p 8080:80 conway-game-of-life
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8080
```

### How To Play
The board must first be seeded. In order to seed the board, you may click on individual cells and choose a color to mark the cell as living. Another option is to click the seed button to randomly select living cells and their color. Click the play button to start the simulation.

### Menu Options
- **Game Speed** - A slider that either increases or decreases the speed of the simulation.
- **Play** - Starts the simulation.
- **Pause** - Pauses the simulation.
- **Clear** - Clears the board to its default state. All cells are dead and their color is set to default.
- **Seed** - Randomly select living cells and their colors.

### License
----

GNU General Public License v3.0

