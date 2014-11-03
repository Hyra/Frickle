# Frickle

A Boilerplate App for building Apps with Mongoose, SASS, Angular, Gulp, Browserify and Express.

## Installation

- git clone http://github.com/Hyra/Frickle.git myApp
- cd myApp
- npm install
- gulp

That's it. Now visit [http://localhost:8080](http://localhost:8080) and profit.

## What's in the box

A sensible default app that ..

  - uses Browserify to build the client code from the `client` to the `public` folder
  - uses **$stateProvider** for the (HTML5 PushState supported) routing
  - uses **SASS** as pre processor
  - uses an **.editorConfig** file for everyone to enjoy
  - uses a **.jshintrc**
  - uses **Gulp** as build tool that does:
  	- view compiling
  	- sass conversion
  	- browserify-ing all teh things
  	- cleaning the build folder
  	- jshinting your beautiful code

It comes with an example controller, service, directive and two states using stateprovider so you can see how things work together.

## API

In `server.js` you will notice an **USE_API** flag you can set. When you set this to true, Frickle will automatically load all your models that live in `api/models`, connect to your MongoDB based on your ENV settings and load up the API routes from `api/routes.js`.

There's an example API Controller with corresponding Model so you can start building straight away.
