# twitter-clone

This project simulates the main page of the twitter website in it the user should be able to view their tweets, write new tweets, change their username, profile image and cover image. All the data in this project are treated locally, motions being intentions with api's.

## Architecture

The modules of this project were made based on the concepts of clean architecture, consisting of three layers, date, domain and presentation.

## Layers

### Data Access Layer (data):

The data layer is responsible for connecting the application to the outside world, all data that is accessed from the outside of the application or oblivion outside the application passes here. In this project this layer was built using the firebase.

### Business Logic Layer(domain):

The domain layer is responsible for knowing the business rules, knowing how the graphical interface should respond to a certain user action. In this project this layer was constructed using redux for the synchronous logics and redux-saga for asynchronous.

### User interface(presentation):

The presentation layer is responsible for determining what should be presented to the user. In this project this layer was built using the react and material-ui frameworks.

## Instalation

Clone the repository to a folder of your choice, redirect to the cloned repository and execute the following command:

```javascript
npm install
```

After the installation of the libs and dependencies, start the development server executing the command:

```javascript
npm start
```

## Test

All tests were made using cypress framework, after executing the command run all tests available.

```javascript
npm test
```

## Organization

The project is organized in the following way:

- src
  - cypress
  - components
  - icons
  - pages
  - utils
  - App.css
  - App.js
  - App.test.js
  - index.css
  - index.js

## Libs

Below we can see all the libs used in the project:

|     Name     |                                                                                     Function                                                                                     |
| :----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    lodash    |                                                 A modern JavaScript utility library delivering modularity, performance & extras.                                                 |
|  react-dnd   |                                      React DnD is a set of React higher-order components to help you build complex drag and drop interfaces                                      |
| evergreen-ui |                                                  Evergreen is a React UI Framework for building ambitious products on the web.                                                   |
|   cypress    | Cypress is free, open source, and locally installed front end testing tool. It can be used by developers or QA engineers, who build web applications using JavaScript framework. |

## License

MIT © 2018

## Build tool

This project was created using the [Create React App](https://github.com/facebookincubator/create-react-app).
