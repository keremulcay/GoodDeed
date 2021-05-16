# Good Deed
Good Deed is an online platform that connects passionate people and encourages collaboration on community building projects. We are a nonprofit, project-based social media network to fund and promote social impact projects through crowdsourcing. 

A user will be able to create an account and from there either join a project, develop a new project, or register to join any project.

Each user -- donor or developer -- has an account with their profile consisting of the projects they have developed and registered to. After signing in, a user can view who registered to the events they created and contact them through their emails. 

## A user can:
- Register a profile
- Log in
- Edit their profile
- View other user's profile
- Create a project
- Add a project description to a new project
- Add a category to a new project
- Add information and requests to a new project
- View list of projects available
- Search a project
- Filter projects by category
- Participate in a project
- Donate to a project

## Documents from the Fall 2020:
Other Good Deed documentation like the Project Management Plan, System Requirements Specification, and Pitch Presentation can be found [here](https://github.com/timurgordon/good-deed-web/tree/master/project-documents).

## Local Setup
 
Start by cloning this repository to your local directory.
- git clone https://github.com/keremulcay/GoodDeed.git

The following steps require npm to be installed in your computer.

### Step 1: Install dependencies

- npm install 

installs dependencies such as cypress (for testing) and jsdoc(documentation) to node_modules from package.json

- npm install -g @aws-amplify/cli

installs Amplify Command Line Interface necessary to pull backend environment

IMPORTANT: add the aws-exports.js file sent to the course instructor and TA into the src directory. This file includes the API key and is not pushed to git, yet kept locally. Without this file the backend functionalities won't work properly. Furthermore, if this project is run after the 21st of May, the API Key will have expired and a new API key will need to be generated, and the related field in aws-exports will need to be modified to use the new API key. Contact team members if you run this project after May 21st.

### Step 2: Create documentation and deploy application on localhost
You can create documentation using JSDoc with:
- npm run docs

This will automatically create a docs directory with the documentation created as index.html using JSDocs library.

To run the application:
- npm start

Once run, the site will be deployed in your localhost and the browser will be launched.

### OPTIONAL: Step 3: Pull backend environment from AWS
This step is marked as optional because while you do not need this step to run the app, you will need it to access Amplify's build pipeline.
amplify pull --appId d3c5ql377ffoge --envName staging

After running this command, which pulls the backend environment from aws, you will be prompted to login to the Admin UI.
You should receive an email from amplify to set up your login credentials to access the backend resources for this project.

Warning: the link displayed on the command line that pops up in your browser to prompt you to login to Admin UI doesn't work in safari.
We've observed it working in firefox and chrome. 

Once pulled, Amplify CLI will prompt inputs for configuration. Input the following responses:

- Choose your default editor: (choose any)
- Choose type of app: Javascript
- Javascript framework: react
- Source directory path: src
- Distribution directory path: build
- Build command: npm run-script build
- Start command: npm run-script start
- Do you plan on modifying this backend: no.

After this, you should get the following success messaage, which means that the backend environment is locally set up and amplify is locally configured.
"Added backend environment config object to your project."



## Build file
Our build file is stored in aws servers, as the backend build is initiated on the server side. The amplify.yml file is run continously and triggered by pushes to this repository. While the file in this directory is not used locally, it is included in the root directory for reference as ./amplify.yml.

## Testing
We use Cypress to run tests. Cypress uses Mocha as the testing framework which could not work coherently with the default testing framework of React, Jest. While we did manage to produce test results with coverages through Jest, we could not report the code coverage of Cypress's end-to-end tests on the Jest's results. 

## Linter
We use the eslint library to lint our software. You can run the linter using the following commands.
- npm run lint
- npm run lint:fix (for automated fixing)

eslint is also run automatically whenever the project is built locally using npm start, generating a report on the command line about unused variables and code to be cleaned, that can be 'linted'.

We used the [AWS AppSync's Starter Project](https://github.com/keremulcay/GoodDeed/blob/main/README-extension.md).As a way to guide us with this project and used their tested/auto-generated code to develop our own work.Please check the link to learn more about this part.

## Make Targets

- prod:
  - In order to build this project, you need to run the Makefile for both frontend and backend components of this project.  
- tests: 
  - Tests  will be executed through two ways. One, by visually checking deployed copy from Amazon Web Services (AWS). This will be carried through the AWS's Amplify service.                                                        If you need an access for that section please make a request. 
  - The other way to make tests is supported by the Cypress. An example for the tests can be seen [here](https://github.com/timurgordon/good-deed-web/blob/master/cypress/integration/authenticator_spec.js). Cypress will help this project with the visual aid it provides. The test created through this platform will create videos of the test being performed. The previous example test has this [video](https://github.com/timurgordon/good-deed-web/blob/master/cypress/videos/authenticator_spec.js.mp4). 
- dev_env:
  - This project uses AWS for deploying. Specifically through using Amplify, local development environments are integrated. On amplify there are two options to commit changes  to. Developers can chose to deploy for staging or master branch of the project. 
- docs:
  - The documentation for the project will be automated as well. For this purpose JSDoc is utilized in this project. The documentation will be created with every build under [this file](https://github.com/timurgordon/good-deed-web/blob/master/docs/index.html)

