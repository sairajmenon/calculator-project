# calculator-project

Live demo of this application has been hosted using Amazon AWS at: http://10.240.8.47/

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
