# Retrospective Report for Seng 350 Group 2-1
### Participants
- Emily Sluis
- Malcolm Newson
- Oliver Lewis

## What did we do that went well?
  * **The DAO's were well written**  
The DAO's had descriptive comments, consistent error handling, and clean code. This made them easy to implement within other modules,  and easy to unit test.
  * **Skill-levels were accurately assessed**  
During the design phase, we were able to determine the experience levels of each team member. This allowed us to split up the workload to ensure that no team members have too little or too much work, or a task they weren’t able to do.
  * **Met regularly**  
Throughout this project, our team met regularly. The frequency of our meetings depended on how much collaboration was needed to finish the current tasks and how soon our next deadline was. In these meetings we checked in with each team member, and gave them a chance to show and teach us what they had been working on. We then regrouped and determined what our next goals and deadlines should be. Task were split up based on ability while still maintaining a fairly equal workload. If a certain task was later determined to be the most difficult or time consuming than expected, they could also be redistributed at the next meeting (or over slack).

 * **Good communication over slack** 
 While we were not always able to meet in person, we were always able to get in touch over Slack to quickly decide on a couple details or the next meeting date.

  * **Realistic user stories**  
  During the initial planning phase of the project, a consensus was reached among the group members to keep the ambitions of the project realistic and focus on the foundations of a CRUD application. We knew that we would not have an accurate estimation of how easy different functionality would be to implement and that it would be easy to overcommit. The user stories we did focus on were chosen so that more functionality could be added onto the base we built.

## What could we of done better?
  * **Setting code quality expectations**  
  As a team, we would have benefited from having a quick discussion on topics such as code comments, error handling, checking passed arguments, consistent return values, single-responsibility principle, etc. Not setting these expectations hurt our overall productivity later on in development when our codebase became more complicated and it ended up being difficult to modify or expand upon existing code.
  * **Better formed QAS**  
 When the QASs were initially written we should of put more thought into how viable each test case would be for our team to implement. This caused the team to scramble towards the end of our milestone when we started to test our QAS and realized some were either too difficult for us to accomplish with the time we had, while others were very basic and ended up being more of a functional requirement than a QAS.
  * **Follow the design at all times**  
  When we first started working on user stories we made the mistake of accepting code into our repository on the basis that it worked and nothing more with the idea being we would refactor it before the current milestone ends. We should have had a more rigorous code review process to ensure that we follow our design from the very beginning. Not doing this produced an unnecessary and time-consuming refactor.
  * **Discussion on error handling**  
 As a team, we never formally discussed how to implement error handling in our design. This resulted in some functions returning null, others returned undefined, while others returned an object; the result object from Mongo, for example. This inconsistency made implementing and testing these functions more difficult than they needed to be. This caused us to refactor the error handling.
  * **Started testing earlier**  
  We made the mistake of starting our testing later than we should have. We wrote some basic unit tests for the first development milestone but didn’t put any more thought towards our testing until after the second development milestone; this includes integration testing and QAS testing as well as unit testing. Getting an earlier start on testing would have allowed us to do a better job of automating our tests. Additionally, we would have benefited from writing our tests around the same time the functionality was implemented since code is generally understood best when it is first written.
  * **Clarifying expectations of the UI**  
  At the start of the project, we decided to not worry about adding CSS to our frontend. We were under the impression that the UI style was not important, therefore we decided to spend our time elsewhere in the project. However, we later received feedback that the UI was poor and lost marks because of it. We should have done a better job of understanding UI expectations prior to making a decision.
  * **Taken time to learn each framework **
  In hindsight, learning to use frameworks we were unfamiliar with would have been a good use of our time. Many programming tasks ended up taking way longer than needed due to us not having a strong grasp on Express, TypeScript, Pug, etc. This also caused a sort of confidence barrier for some team members, meaning that we didn’t want to develop complex functionality for fear we might not be able to implement it properly.

## How could our design be improved?
* **Simplify the DAOs**  
In the [initial](https://github.com/seng350/seng350f19-project-2-1/tree/master/docs/M2()) design we decided to make a separate DAO class for each operation related to users and purchases (eg. userCreateDAO, userDeleteDAO, etc). For a large scale project, this kind of design may have been feasible to allow for clear responsibilities between classes; however, in a project our size, this would have resulted in many classes with a single function. Instead of this, we decided to create two DAOs; one for users, and one for purchases.

* **Better naming of our classes**  
Our current design does not make it obvious that we're following an MVC design; this is largely caused by how we ended up naming our classes. Instead, we named the controllers, "Routers"; and the models, "DAOs". Naming our classes "Controllers" and "DAOs" would make our design clear to someone reading the code; they wouldn't have to look at a design document for this information.
* **Better algorithm for generating purchase summary**  
To calculate total expenses in each category for each time slot, whether by year or by month, requires the full purchases of the user to be downloaded from the database. The current implementation pulls all data for a user in one database query, then for every time slot in each category, iterates through the list of purchases looking for relevant purchases and adding them to the total. An improvement could involve iterating through the list of purchases once; each purchase could have its cost added to the appropriate member in an object based on its category and date. This would speed up the overall loading time of the summary page and make the code easier to follow.


## What did we learn?
* **Web app design with Mongo, Node, and Express**  
Learning to use each of these was more difficult than expected. There was also the added challenge that it was impossible to guess how long it would take to learn and program any given portion, making the division of tasks more complicated. 
* **Getting a project set up can take a lot of time**  
Steps like adding JSlint, Travis, and Docker take a surprising amount of time to set up when no team member has worked with them before. Similarly, setting up the basic Node and Express framework for the project also takes significant time for first time users, even with a detailed lab covering that material. This just highlights that the coding phase of a project that inexperienced programmers assume is the majority of a project is actually a much smaller proportion of total development time.
* **Testing takes almost as long as development**  
Fully mocking some aspects of the project took much longer than anticipated. Leaving testing to the end rather than having a test focused development lifecycle can give a false sense of completeness.
