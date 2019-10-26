# Milestone 3: Code Iteration 1
## Build Steps
1. Clone repository.
2. Run `npm install` in the repository.
3. Open WebStorm and create a new Node.js configuration. Specify `bin/www` as the JavaScript file.
4. Run `tsc` in terminal.
5. Run the app from WebStorm.
6. Go to `http://localhost:3000/` in browser

seng350f19-project-2-1/coverage/lcov-report/index.html

## Functionality
At present, the app consists of a login page where a list of users and admin are presented. Once a user is selected they are directed to that users history page. This page displays all purchases by that users in a separate table per category and sorted in reverse date. If the web user selects an admin they are directed to a simple list of users. Eventually this will changed to allow the admin to create or delete users. 

## User stories
The user stories implemented for this code sprint are linked below. A user can log into their account by selecting their user name from the home page list of users. Once a user selects their account, they are directed to a history page that displays their purchases in each category, sorted in reverse date order. 

[As a user I want to log into my account in order to access my data](https://github.com/seng350/seng350f19-project-2-1/issues/2)

[As a user I want to see my spending history within each category in order to see all past purchases.](https://github.com/seng350/seng350f19-project-2-1/issues/3)

## Code Coverage
To run unit tests run `npm t` from terminal.

To see code coverage report open `coverage/lcov-report/index.html` in a browser.

    Commit latest, working code to Github tagged "sprint1". Ensure there is a build process documented in the Readme file.
    Static analysis report 
       Passing Travis CI builds
    Code coverage report.
    What design problems were faced (and how design changed).
    
    


