# M4 - Final Code Iteration 

## User Stories Added
The two remaining user stories were added during this sprint; a purchase summary page and the ability to edit previous purchases. Functionality for a user to delete purchases was also implemented, which was not previously included in any user story but should have been. The summary page provides a simple table displaying the total expense per category in each time range. The user can select 'month' or 'year', where a monthly time frame has the expense per month for the 12 months before the most recent purchase. A yearly time frame will have every year between the first purchase of that user and the most recent purchase. For a user to edit their purchase a button beside each purchase reloads the page and presents auto populated fields with that purchases data for the user to edit. Once submitted, the unique database entry id is used to ensure the correct purchases is edited.



[As a user I want to access a summary of my expenses in a variety of formats and time frames.](https://github.com/seng350/seng350f19-project-2-1/issues/7)

[As a user I want to edit previously logged purchases in order to update them.](https://github.com/seng350/seng350f19-project-2-1/issues/8)



## Automated Testing of QAS
### Usability - [Input validation on purchase amount.](https://github.com/seng350/seng350f19-project-2-1/issues/14)
All input validation is done using the HTML form that takes purchase data from the user. The category is a simple drop [down menue](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/Category.png) with 5 options including Clothing, Food, School, Transport, and Other. This makes invalid user input of category impossible. The cost can not be [less than zero](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/negative%20cost.jpg) and can only include [two desimals](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/less%20then%20cents.jpg). If the user attempts to input an invalid cost and tries to submit, the purchase is not submitted and a pop up statement informs them of the requirement they are failing. The calendar is a [built in selection](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/calender.jpg) that can not accept invalid dates. It is possible to input a date down to 0001-01-01 which is unrealistic but not invalid. The description is limited to 15 characters including numbers, letters, and special characters. While special characters and numbers might not seem like good descriptions, the user is free to use them. The field will not accept any more characters after the limit is reached.

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

## Integration testing and CI pipeline
(explination of integration testing and ci pipeline)


### delete before handin
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
