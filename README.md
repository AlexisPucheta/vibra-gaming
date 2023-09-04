# VIBRA GAMING CHALLENGE

Coding Challenge for Front-End Developer Position at VIBRA GAMING

## Appendix

This repository is a monorepo where the front-end and back-end coexist.

## Authors

- [@AlexisPucheta](https://www.github.com/AlexisPucheta)

## Installation

Since it is a monorepo, the node_modules directory will be installed in the root directory for common dependencies, while the client and server projects will have their specific ones.

```bash
  npm install
```

## Deployment

To run both the client and the server, you can simply use the following script:

```bash
  npm run start
```

and then go to

http://localhost:5173/

If you want to run only the client, you can use the following script:

```bash
  cd client
  npm run dev
```

http://localhost:5173/

If you want to run only the server, you can use the following script:

```bash
  cd server
  npm run dev
```

http://localhost:3000/

## Documentation

This documentation provides an overview of the approach used to solve the coding challenge.

# World Clock Application

This application was developed to address the World Clock exercise challenge. The solution is divided into two main components: the client and the server.

### Project Structure

Given the requirement to develop both a server and a client, a monorepo structure was chosen for its practicality in integrating and reviewing their functionality. While the dependencies and devDependencies in this example were not extensive, utilizing a monorepo allows for the sharing of dependencies between repositories, which is particularly advantageous in larger projects.

### Server

The server is built using Express and contains controllers and routes for various supported methods. Its primary function is to provide the client with time zone and local time data obtained from the [World Time API](https://worldtimeapi.org/api).

### Client

On the client side, Vite was used as a build tool, and the application is developed with Vue 3 and TypeScript. Within the client, you'll find a Pinia-based store, reusable components, interfaces, and utility functions.

The user interface features a search bar with autocomplete for various time zones provided by the server. When a time zone is selected, it is displayed as a card in the user's dashboard. Users can add multiple time zones and remove them after confirming their action through a warning modal.

The application automatically updates the time every 5 seconds by making a call to the server for the specific time zone.
