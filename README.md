# BakerSoft Automatio suite (Local Machine setup)

Prerequisites - Node Js , TypeScript and faker-js

This repository contains the source code for the Bakersoft application.

Step 1 - Checkout the code from Github (- https://github.com/harishpurushothaman81/Bakersoft)

Step 2 - Select any of the IDE (Visual Studio Code) and open the project.

Step 4 - Navigate to the CypressProject directory and run the following command "npm install cypress --save-dev"

Step 5 - Navigate to the CypressProject directory and run the following command "npm install @faker-js/faker --save-dev"

Step 6 - Navigate to the CypressProject directory and run the following command "npx cypress open"

Step 7 - Configure E2E test and run "spec.cy.ts" spec .



-----------------------------------------------------------------------------------------------------------
# Bakersoft Automation suite (Docker setup)

This repository contains the source code for the Bakersoft application.

- https://github.com/harishpurushothaman81/Bakersoft

To install the Bakersoft application, follow the steps below:

Check out the code from the Bakersoft repository (https://github.com/harishpurushothaman81/Bakersoft)

Build the Docker image using the following command:-

"docker build --tag backersoft:latest ."

Run the Docker container to start the application and run the tests:

"docker run backersoft:latest"
