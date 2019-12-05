# M4 - Final Code Iteration 

## User Stories Added
The two remaining user stories were added during this sprint; a purchase summary page and the ability to edit previous purchases. Functionality for a user to delete purchases was also implemented, which was not previously included in any user story but should have been. The summary page provides a simple table displaying the total expense per category in each time range. The user can select 'month' or 'year', where a monthly time frame has the expense per month for the 12 months before the most recent purchase. A yearly time frame will have every year between the first purchase of that user and the most recent purchase. For a user to edit their purchase a button beside each purchase reloads the page and presents auto populated fields with that purchases data for the user to edit. Once submitted, the unique database entry id is used to ensure the correct purchases is edited.



[As a user I want to access a summary of my expenses in a variety of formats and time frames.](https://github.com/seng350/seng350f19-project-2-1/issues/7)

[As a user I want to edit previously logged purchases in order to update them.](https://github.com/seng350/seng350f19-project-2-1/issues/8)



## Automated Testing of QAS
(exlanation of how you are automating testing of 3 QAS)


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
