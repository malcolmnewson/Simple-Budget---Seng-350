# M4 - Final Code Iteration 

## User Stories Added
The two remaining user stories were added during this sprint; a purchase summary page and the ability to edit previous purchases. Functionality for a user to delete purchases was also implemented, which was not previously included in any user story but should have been. The summary page provides a simple table displaying the total expense per category in each time range. The user can select 'month' or 'year', where a monthly time frame has the expense per month for the 12 months before the most recent purchase. A yearly time frame will have every year between the first purchase of that user and the most recent purchase. For a user to edit their purchase a button beside each purchase reloads the page and presents auto populated fields with that purchases data for the user to edit. Once submitted, the unique database entry id is used to ensure the correct purchases is edited.

- [As a user I want to access a summary of my expenses in a variety of formats and time frames.](https://github.com/seng350/seng350f19-project-2-1/issues/7)
- [As a user I want to edit previously logged purchases in order to update them.](https://github.com/seng350/seng350f19-project-2-1/issues/8)

## CI Pipeline
Our CI pipeline is comprised of a GitHub Action (workflow) and Travis CI. For each pull request that is created, a workflow is executed and 
a Travis build is created. If either of these processes fail the pull request will be marked as failed. A sample of a checked pull request is given
[here](https://github.com/seng350/seng350f19-project-2-1/pull/63/checks).

![alt text](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/pull_request_checks.png "Sample of our CI in a pull request")

The GitHub Action checks-out our repository under an environment variable to allow other workflow processes to access it.
It then runs `npm install`, and compiles the project. 
If at any point along the workflow a process fails then the workflow will mark the pull request as failed. 
Currently, there are no automated tests being executed in the workflow.
 
Our Travis builds are responsible for executing our unit tests. If any tests fail then the pull request is marked as failed.

## Integration Testing  
*Note: The integration testing for this milestone wasn’t completed, however the explanations below outline how it can be implemented in the future.* 

### Setting up the frameworks
For this project, Jest was selected for both the unit testing and the integration testing. Jest was selected because it is a JavaScript testing framework with Typescript options that can standalone as a testing framework. It has relatively minimal configurations and supports mocking which was essential for the unit testing. In order to do the integration testing, the Supertest library can be imported. It is a library build specifically to test Node.js HTTP servers, so it will facilitate testing the GET, and POST the application uses.
In order to set up Jest we need to ensure it is installed and add it to the package.json configuration file. Once configured properly, running the command ‘npm test’ will run all the appropriately named test methods. 
Setting up Supertest is similarly simple, it needs to be installed and then called using “require (‘supertest’)” in any test file that will be using the library. 

### Test Plan per User Story
For each user story, a “happy path” was determined. This path was determined by following which pages a user visits and what input they provide. Following this path, it was determined which controller, routers and methods were used and those were then added to the respective test plans. For these test to be integration tests, the methods need to be tested in the same order as a user would access them and each should be tested using input returned from previous tests. 
For example, in order for a user to complete the first user story, “As a user, I want to log into my account in order to access my data”, the user accesses the home page, selects their user id, then their purchase page (or admin page) loads. This requires the routers UserRoute and PurchaseRoute to be created, the index to load, multiple methods and helper methods to be called, and the purchase page to load. This path as a whole needs to be tested, and thanks to all local methods having been testing by unit tests, this should not be too lengthy.

### The list of methods and HTTP requests to be tested per user story are as follows:  
*Note: The class is listed between square brackets [ ] followed by the method that belongs to the happy path. HTTP endpoints that need testing are shown in **bold**.*
#### 1.	As the Administrator, I want to be able to create a user account in order to manage accounts in the system.
-	*Login process testing covered by user story test 3.*
-	**GET /users/admin1** 
-	[LoginController] admin()
-	[RequestData] requestAllUsers()
-	[User Router] getAll()
-	[UserDao] getAllUsers()
-	**GET /users** 
-	**GET /user/admin1** 
-	[User Router] createUser()
-	**POST /users/create_user/** 
-	[LoginController] login()
-	[RequestData] requestUser()
-	[User Router] getOne()
-	**GET /users/admin1** 
-	[LoginController] admin()
-	[RequestData] requestAllUsers()
-	[User Router] getAll()
-	[UserDao] getAllUsers()
-	**GET /users** 
-	**GET /user/admin1** 

 

#### 2.	As the Administrator, I want to be able to delete a user account in order to manage accounts in the system.
-	*Login process testing covered by user story test 3.*
-	**GET /users/admin1** 
-	[LoginController] admin()
-	[RequestData] requestAllUsers()
-	[User Router] getAll()
-	[UserDao] getAllUsers()
-	**GET /users** 
-	**GET /user/**
-	[User Router] deleteOne()
-	**POST /users/delete/demo** 
-	[LoginController] login()
-	[RequestData] requestUser()
-	[User Router] getOne()
-	**GET /users/admin1** 
-	[LoginController] admin()
-	[RequestData] requestAllUsers()
-	[User Router] getAll()
-	[UserDao] getAllUsers()
-	**GET /users** 
-	**GET /user/admin1** 
 

#### 3.	As a user, I want to log into my account in order to access my data.
-	[IndexRoute] index()
-	[RequestData] requestAllUsers()
-	[User Router] getAll()
-	[UserDao] getAllUsers()
-	**GET /users** 
-	[LoginController] login()
-	[RequestData] requestUser()
-	[User Router] getOne()
-	**GET /users/emilysluis** 

#### 4.	As a user, I want to enter a purchase into a spending category in order to track how much money has been spent in that category.
-	*Login process testing covered by user story test 3.*
-	**GET /users/emilysluis** 
-	[LoginController] purchasePage()
-	[RequestData] requestPurchases()
-	[PurchaseRouter] getUserPurchases()
-	**GET /purchases/emilysluis** 
-	**GET /user/emilysluis** 
-	[PurchaseRouter] uploadUserPurchases()
-	**POST /purchases/upload** 
-	[LoginController] login()
-	[RequestData] requestUser()
-	[User Router] getOne()
-	**GET /users/emilysluis** 
-	[LoginController] purchasePage()
-	[RequestData] requestPurchases()
-	[PurchaseRouter] getUserPurchases()
-	**GET /purchases/emilysluis** 
-	**GET /user/emilysluis** 


#### 5.	As a user, I want to see my spending history within each category in order to see all past purchases.
-	*Login process testing covered by user story test 3.*
-	**GET /users/emilysluis**
-	[LoginController] purchasePage()
-	[RequestData] requestPurchases()
-	[PurchaseRouter] getUserPurchases()
-	**GET /purchases/emilysluis**
-	**GET /user/emilysluis** 

#### 6.	As a user, I want to edit previously logged purchases in order to update them.
-	*Login process testing covered by user story test 3.*
-	**GET /users/emilysluis**
-	[LoginController] purchasePage()
-	[RequestData] requestPurchases()
-	[PurchaseRouter] getUserPurchases()
-	**GET /purchases/emilysluis** 
-	**POST /purchases/updateRequest** 
-	[PurchaseRouter] updateUserPurchases()
-	**POST /purchases/updateSubmission**
-	[LoginController] login()
-	[RequestData] requestUser()
-	[User Router] getOne()
-	**GET /users/emilysluis *Reloaded with item to edit in loaded into the update fields**
-	[LoginController] purchasePage()
-	[RequestData] requestPurchases()
-	[PurchaseRouter] getUserPurchases()
-	**GET /purchases/emilysluis** 
-	**GET /user/emilysluis *Reloaded with updated item**


#### 7.	As a user, I want to access a summary of my expenses in a variety of formats and time frames.
-	*Login process testing covered by user story test 3.*
-	**GET /users/emilysluis**
-	[LoginController] purchasePage()
-	[RequestData] requestPurchases()
-	[PurchaseRouter] getUserPurchases()
-	**GET /purchases/emilysluis** 
-	**GET /user/emilysluis** 
-	[SummaryRoute] summary()
-	[RequestData] requestPurchases()
-	[PurchaseRouter] getUserPurchases()
-	**GET /purchases/emilysluis**
-	[SummaryRoute] makeDateList()
-	[SummaryRoute] makeTableDateList()
-	[SummaryRoute] calcTotals()
-	**GET /user/summary/emilysluis** 
-	[SummaryRoute] summary()
-	[RequestData] requestPurchases()
-	[PurchaseRouter] getUserPurchases()
-	**GET /purchases/emilysluis** 
-	[SummaryRoute] makeDateList()
-	[SummaryRoute] makeTableDateList()
-	[SummaryRoute] calcTotals()
-	**POST /user/summary/timeFrame** 


## Automated Testing of QAS
### Usability - [Input validation on purchase amount.](https://github.com/seng350/seng350f19-project-2-1/issues/14)
All input validation is done using the HTML form that takes purchase data from the user. The category is a simple [drop-down menu](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/Category.png) with 5 options including Clothing, Food, School, Transport, and Other. This makes invalid user input of category impossible. The cost can not be [less than zero](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/negative%20cost.jpg) and can only include [two desimals](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/less%20then%20cents.jpg). If the user attempts to input an invalid cost and tries to submit, the purchase is not submitted and a pop up statement informs them of the requirement they are failing. The calendar is a [built in selection](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/calender.jpg) that can not accept invalid dates. It is possible to input a date down to 0001-01-01 which is unrealistic but not invalid. The description is limited to 15 characters including numbers, letters, and special characters. While special characters and numbers might not seem like good descriptions, the user is free to use them. The field will not accept any more characters after the limit is reached.

This use of data validation is sufficient for our users purchases and for the updating of purchases. Category is limited to choices rather than an input field for text, cost is limited to positive numbers with up to two decimals, date is limited by the selection from a calendar, and the description is only limited by length. Because of the simplicity of the app, simply listing purchases, making sums of costs, and sorting by date, these restraints on user inputs are adequate. The html form will not accept submissions that fail these criteria and so no database entry can have invalid data.


### Performance - [A user's page loads within 1 second of login.](https://github.com/seng350/seng350f19-project-2-1/issues/4)
As outlined in the QAS issue, the automated test was to run a script that records how long it takes to load a users page once they attempt to login. The [script](https://github.com/seng350/seng350f19-project-2-1/blob/master/scripts/curl_script) is below. This URL the script uses is the main page the user, test_user, will see when they log into the application. By changing "test_user" to a different username allows us to test pages with different amounts of data needing to be loaded. The amount of data a webpage loads correlates directly to the number of purchases they have. 

```bash
#!/bin/bash

time=0
total=0
average=0
for i in {1..50}
do
    time=$(curl "http://localhost:3000/user/test_user" -s -o /dev/null -w  "%{time_starttransfer}\n")
    total=$(echo "$total + $time" | bc)
done
average=$(echo "scale=3; $total / 50" | bc)
echo $average
```
The goal was to use this script within a GitHub Workflow to test each pull request. If the output was over 1 second then the job would fail, otherwise it would pass. However, we ran into issues while trying to automate this script into our CI pipeline. Since our application is not deployed anywhere, we were unable to start the app and then run the test script at the same time. If our website was deployed somewhere then this test could of been automated. The [workflow](https://github.com/seng350/seng350f19-project-2-1/blob/master/.github/workflows/PRs.yml) below shows our attempt at automating this. The workflow currently installs dependencies (npm install) and compiles our project (tsc) for every pull request that is created. If anything fails then the pull request is updated to reflect this. The goal was to add our test script to this workflow but, as stated previously, we could not get this going.

```yaml
name: CI

on: [pull_request]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    - uses: actions/setup-node@v1
    - run: npm install
    - run: tsc
```

#### Results
Because we could not automate this test, we ran it locally. The below screen capture shows the result of running the script on the user, 'test_user'. The terminal on the right shows the GET requests getting received by our application. The terminal on the left shows the result of the script. Test results for three different user accounts is displayed in the table below. Each account has a varying number of purchases being loaded.

![alt text](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/test_user_load_time.png "Curl Script on test_user")

| Account | Number of Purchases | Average Response Time (seconds) | Test Result |
| --- | :---: | :---: | :---: |
| test_user | 1 | 0.607 | PASS |
| oliverlewis | 19 | 0.441 | PASS |
| malcolmnewson | 38 | 0.586 | PASS |

### Usability - [User can change the time frame of the summary and see the results within 1 second.](https://github.com/seng350/seng350f19-project-2-1/issues/12)
Our definition of testing this QAS is performance-related. Specifically, with the server under load, we want to ensure that a user can change the time format of their summary page and get the results in less than 1 second. We define "under load" as handling at least 5 requests per second.

To test this, a user account, 'perf_user' was created containing 60 purchases. By loading this user's summary page, we can make sure that the requests result in a reasonable amount of data being processed.

Because this was performance test of our applications load handling, we decided to use JMeter as it was the most recommended performance testing tool. Similar to the test above, we were not able to make use of automated testing. Our initial idea was to run the JMeter test plan on a server and output the results in order to determine if we're still satisfying our QAS. However, since our web application is not deployed anywhere we were not able to make this work. Instead, the test plan was run locally.

The following [JMeter test plan](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/PerfTesting.jmx "JMeter Config") was created:
```
Thread Properties
   - Number of Threads (users): 50
   - Ramp-up Period (seconds): 10
   - Loop Count: 1
POST request to change summary format to monthly (Montly Format)
   - Server Name: localhost
   - Port: 3000
   - Method: POST
   - Body Data: { userID: 'perf_user', timeFrame: 'Month',}
POST request to change summary format to yearly (Yearly Format)
   - Server Name: localhost
   - Port: 3000
   - Method: POST
   - Body Data: { userID: 'perf_user', timeFrame: 'Year',}
```

This configuration will create 50 concurrent connections to our server. The Ramp-up Period sets the start-up delay between each connection to be 0.5 seconds. For each connection, there are two POST requests sent sequentially. The first one changes the time frame to monthly, and the second one turns it to yearly. This configuration results in 100 POST requests over 10 seconds.

#### Results
The [results](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/perf_test_50users_10ramp.csv "CSV Format") of running the JMeter test is shown below.

| Label | # Samples | Average | Min | Max | Std. Dev. | Error % | Throughput (req/sec) | Received (KB/sec) |
| ----- | --------- | ------- | --- | --- | --------- | ------- | -------------------- | ----------------- |
| Monthly Format | 50 | 472 | 367 | 563 | 45.31 | 0.000% | 4.82998 | 3.67 |
| Yearly Format | 50 | 455 | 329 | 556 | 45.31 | 0.000% | 4.90052 | 3.72 |
| TOTAL | 100 | **464** | 329 | 563 | 46.09 | 0.000% | **9.36242** | 7.11 |

The important values that we care about are throughput and average. We can see that the average response time of these requests are 0.464 seconds while the throughput is 9.36 requests/second. This confirms the QAS is **satisfied** as the response time is less than 1 second while the server is under load.

### delete before hand-in
project rubric

    code compiles
    code conventions/CI from above (commented, code style, design principles)
    working demo
    clear explanation of how the remaining user stories were satisfied in this iteration
    design as implemented follows design doc, or change rationale is present in README
    async is async when necessary
    TSLint does not complain
    test suite present/part of CI
    test coverage reasonable and meaningful

And new in M4:

    explanation of how you are automating testing 3 QAS from your list in M1
    explanation of integration testing and CI pipeline
