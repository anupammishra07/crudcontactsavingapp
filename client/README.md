# conctact saving react application

## What is the use of this Repo

This Project is a crudcontactsaving app which demonstrates the following
1. Creating a Component in React
2. Making HTTP calls
3. Communicating between parent and child component
4. Using Bootstrap along with React
5. Using Basic Routing in React

The project Template can be used to build bigger projects.



## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npx create-react-app client
```


## Cloning and Running the Application in local

Clone the project into local
```terminal
$ git clone https://github.com/anupammishra07/crudcontactsavingapp.git
```

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**


# Application design

#### Components

1. **CreateUser** Component : This Component create contact information for a employee and store the information in database .

2. **Navbar** Component : This Component Displays routes of the  application,
3. **updateUser** Component : This Component update the existing user information.
4. **SingleUser** Component : This Component displays a list of users contact information. This Component gets the data from mongodb database by fetchinfg the api from server .

#### HTTP client

**fetch**  is used to make HTTP Calls

#### URL

The application has just three  url .
1. **/create** which ties to *CreateUser component* Component.
2. **/**  which ties to *SingleUser component* Component
3. **/update/:id**which ties to *UpdateUser component* Component.



## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap

