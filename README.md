# calculator-project

Live demo of this application has been hosted on Amazon AWS at: http://10.240.8.47/

Overview for the calculator app:

This calculator app has been developed to do basic arithmetic operations. The goal of the application is to do basic calculations and have those results shared across multiple users. Some of the features and functionalities of the app are:

1. The frontend has been developed using Angular framework and the backend using Node.js
2. On the frontend, I have used material components for designing a simple layout for the calculator.
3. After every calculation, the result of the same is posted to the backend where it is stored in an array of results. It maintains a list of the last 10 operations along with its results.
4. The frontend makes a call to the backend to fetch recursively to get the updated data and display on the frontend.

Things that could be added/changed to the implementation:

1. We could use Web sockets to do the communication.
2. We could store the details in a database and access that through the NodeJS server.

To run the application:

a) NodeJS server:
  1. After cloning the repository, navigate to "calculator-nodejs-app" folder.
  2. Run "npm install" command to install the dependencies
  3. Run "npm start" command. This will start the server on 3000 port in your system.
  4. Keep this application running in background

b) Angular application:
  1. Navigate to "calculator-client-app" folder.
  2. Run "npm install" command.
  3. Go to "src/assets and open the file "config.json". Change the property "baseUrl" to the value where NodeJS server mentioned above is running.
  4. Run "ng serve" command to run the application(It runs on port 4200 by default).

Now to test the app:

  1. Open 2 instances of "http://localhost:4200" in the browser
  2. Do calculations in the calculator and press the "=" button
  3. Check the result table in the other instance swiftly to see the changes reflected.
