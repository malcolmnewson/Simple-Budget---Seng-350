# M4 - Final Code Iteration 

## User Stories Added
The two remaining user stories were added during this sprint; a purchase summary page and the ability to edit previous purchases. Functionality for a user to delete purchases was also implemented, which was not previously included in any user story but should have been. The summary page provides a simple table displaying the total expense per category in each time range. The user can select 'month' or 'year', where a monthly time frame has the expense per month for the 12 months before the most recent purchase. A yearly time frame will have every year between the first purchase of that user and the most recent purchase. For a user to edit their purchase a button beside each purchase reloads the page and presents auto populated fields with that purchases data for the user to edit. Once submitted, the unique database entry id is used to ensure the correct purchases is edited.



[As a user I want to access a summary of my expenses in a variety of formats and time frames.](https://github.com/seng350/seng350f19-project-2-1/issues/7)

[As a user I want to edit previously logged purchases in order to update them.](https://github.com/seng350/seng350f19-project-2-1/issues/8)



## Automated Testing of QAS
### Usability - [Input validation on purchase amount.](https://github.com/seng350/seng350f19-project-2-1/issues/14)
All input validation is done using the HTML form that takes purchase data from the user. The category is a simple drop [down menue](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/Category.png) with 5 options including Clothing, Food, School, Transport, and Other. The cost can not be [negative](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/negative%20cost.jpg) and can only include down to [0.01](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/less%20then%20cents.jpg). The calendar is a [built in selection](https://github.com/seng350/seng350f19-project-2-1/blob/master/docs/M4/calender.jpg) that can not accept invalid dates. The description is limited to 15 characters.

### Performance - [A user's page loads within 1 second of login.](https://github.com/seng350/seng350f19-project-2-1/issues/4)
As outlined in the QAS issue, the automated test was to run a script that records how long it takes to load a users page once they attempt to login. The [script](https://github.com/seng350/seng350f19-project-2-1/blob/master/scripts/curl_script) is below. 

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
The goal was to use this script within a GitHub Workflow to test each pull request. If the output was over 1 second then the job would fail, otherwise it would pass. However, we ran into issues while trying to automate this script into our CI pipeline. Since our application is not deployed anywhere, we were unable to start the app and then run the test script at the same time. If our app was deployed somewhere this test could of been automated.
#### Results
TODO

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
