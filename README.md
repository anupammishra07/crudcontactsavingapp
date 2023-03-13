<h1 align="center">
 Contact Saving App
</h1>


this project is a crud application with pagination. 
the project is build in MERN stack.
MERN stack is the idea of using Javascript/Node for fullstack web development.
crud opertaion is performed on the user contact information.



## clone or download
```terminal
$ git clone https://github.com/anupammishra07/crudcontactsavingapp.git
$ yarn # or npm i
```



## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `components` - This folder holds all of the different components that will make up our views.
    - #### `App.js` - This is what renders all of our browser routes and different views.
    - #### `App.css` - css file for styling the webpage.
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change.
    - #### `App.css` - css file for styling the webpage.
     - #### `.gitignore` - css file for styling the webpage.  
- #### `package.json` - Defines npm behaviors and packages for the client
- #### `readme.md` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `app.js` - This holds all the constants.
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!


# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm start       // run it locally
```


## Server-side usage(PORT: 8000)

### Start

```terminal
// in the root level
$ cd server
$ npm i       // npm install packages
$ npm start 

```





## BUGs or comments

[Create new Issues] https://github.com/anupammishra07/crudcontactsavingapp.git) 

Email Me: anupammishra731996@gmail.com (welcome, say hi)



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn how to setup a local MongoDB instance for testing, check out how to [Connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn Express, check out the [Express documentation](https://expressjs.com/).

To learn React, check out the [React documentation](https://reactjs.org/).
