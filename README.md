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

### Project Structure

Given the requirement to develop both a server and a client, a monorepo structure was chosen for its practicality in integrating and reviewing their functionality. While the dependencies and devDependencies in this example were not extensive, utilizing a monorepo allows for the sharing of dependencies between repositories, which is particularly advantageous in larger projects.

### Server

This server, built using the Express framework, is designed to consume data from the World Time API and provide users with information about corresponding timezones and local times. It offers a simple and efficient way to access accurate time-related data for various regions around the world.

### Front-End

This frontend application, developed using Vite and Vue 3, is designed to render cards displaying time zone information along with the corresponding local time. It provides an intuitive and user-friendly interface for accessing and visualizing accurate time-related data for different regions around the world.
