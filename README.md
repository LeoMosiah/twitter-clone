# twitter-clone

This project simulates the main page of the twitter website in it the user should be able to view their tweets, write new tweets, change their username, profile image and cover image. All the data in this project are treated locally, motions being intentions with api's. By lack of time this project was not built with  responsive design, it does not support screen with width lower than 960px. 

## Architecture

The modules of this project were made based on the concepts of clean architecture, consisting of three layers, date, domain and presentation.

## Layers

### Data Access Layer (data):

The data layer is responsible for connecting the application to the outside world, all data that is accessed from the outside of the application or oblivion outside the application passes here. In this project all data are mocked so i'm using firebase initialization only simulate how it would work if the project was using firebase services.

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

All tests are related to redux, run all tests executing the command:

```javascript
npm test
```

## Build tool

This project was created using the [Create React App](https://github.com/facebookincubator/create-react-app).
