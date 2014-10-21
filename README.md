Frickle
=======

Boilerplate App for building Apps with Mongoose, SASS, Angular, Gulp, Browserify and Express.

## Installation

- git clone http://github.com/Hyra/Frickle.git myApp
- cd myApp
- npm install
- gulp

That's it. Now visit [http://localhost:8080](http://localhost:8080)

## What's in the box

A sensible default app that ..

  - uses Browserify to build the client code from the `client` to the `public` folder
  - uses $stateProvider for the (HTML5 PushState supported) routing
  - uses SASS as pre processor
  - uses an EditorConfig file for everyone to enjoy
  - uses a .jshintrc
  - uses Gulp as build tool that does:
  	- view compiling
  	- sass conversion
  	- browserify-ing all teh things
  	- cleaning the build folder
  	- jshinting your beautiful code

and comes with an example controller, service, directive and stateprovider so you can see how things work together.

## Roadmap

Once satisfied with the client wiring I will add an Express backed API structure up along with CORS and Mongoose. Until then, feel free to send in PRs or normal requests if you feel you miss something.