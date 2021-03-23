[![LinkedIn][linkedin-shield]][linkedin-url] <br />
![Twitter Follow](https://img.shields.io/twitter/follow/Sthefano_C?style=social) <br />

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/sthefanocarvalho

<h1 align="center">Masteradin Press | MERN App</h1>

<p align="center">
  <img width="100%" alt="Masteradin Press Header" src="/repo/Masteradin Press - MERN App - Header.png">
</p>

Website to share press releases with different journalists. It has authentication, allows users to follow profiles and comment on articles.
Node/Express/Mongoose.

<p align="center">
  <img width="100%" alt="Masteradin Press Preview" src="/repo/Masteradin Press - MERN App - Complete.webp">
</p>

## Getting Started

To get this running on another machine, just clone the repo and run the command to start the server. It is important to have node installed:

```
npm install
npm run dev
```

### Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [express-jwt](https://github.com/auth0/express-jwt) - Middleware for validating JWTs for authentication
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript
- [mongoose-unique-validator](https://github.com/blakehaswell/mongoose-unique-validator) - For handling unique validation errors in Mongoose. Mongoose only handles validation at the document level, so a unique index across a collection will throw an exception at the driver level. The `mongoose-unique-validator` plugin helps us by formatting the error like a normal mongoose `ValidationError`.
- [passport](https://github.com/jaredhanson/passport) - For handling user authentication
- [slug](https://github.com/dodo/node-slug) - For encoding titles into a URL-friendly format

### Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.

### Error Handling

In `routes/api/index.js`, we define a error-handling middleware for handling Mongoose's `ValidationError`. This middleware will respond with a 422 status code and format the response to have [error messages the clients can understand](https://github.com/gothinkster/realworld/blob/master/API.md#errors-and-status-codes)

### Authentication

Requests are authenticated using the `Authorization` header with a valid JWT. We define two express middlewares in `routes/auth.js` that can be used to authenticate requests. The `required` middleware configures the `express-jwt` middleware using our application's secret and will return a 401 status code if the request cannot be authenticated. The payload of the JWT can then be accessed from `req.payload` in the endpoint. The `optional` middleware configures the `express-jwt` in the same way as `required`, but will _not_ return a 401 status code if the request cannot be authenticated.

## Deployment

The app is deployed using [Netlify](https://www.netlify.com/) for the front-end, [Heroku](https://dashboard.heroku.com/app/) as back-end.
The domain is managed on the [Hostinger](https://www.hostinger.com.br/) platform.

## Built With

- [Visual Studio Code](https://code.visualstudio.com/) - The editor
- [NextJS](https://nextjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [ReactJS](https://reactjs.org/)
- [NodeJS](http://nodejs.org/)

## Authors

- **Sthefano Carvalho** - [SthefanoC](https://github.com/sthefanoc)

## Acknowledgments

- Project inspired by [RealWorld codebase](https://github.com/gothinkster/realworld)
