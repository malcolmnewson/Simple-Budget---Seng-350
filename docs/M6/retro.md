# Retrospective Report for Seng 350 Group 2-1
### Participants
- Emily Sluis
- Malcolm Newson
- Oliver Lewis

## What did we do that went well?
* **The DAOs were well written**  
The DAOs had descriptive comments, consistent error handling, and clean code. This made them easy to implement within other modules,  and easy to unit test.
* **Skill-levels were accurately assessed**  
During the design phase, we were able to determine the experience levels of each team member. This allowed us to split up the workload to ensure that no team members have too little or too much work, or a task they weren’t able to do.
* **Met regularly**  
Throughout this project, our team met regularly. The frequency of our meetings depended on how much collaboration was needed to finish the current tasks and how soon our next deadline was. In these meetings we checked in with each team member, and gave them a chance to show and teach us what they had been working on. We then regrouped and determined what our next goals and deadlines should be. Task were split up based on ability while still maintaining a fairly equal workload.
* **Good communication over Slack**  
While we were not always able to meet in person, we were always able to get in touch over Slack to make quick decisions or set up meetings.
* **Realistic user stories**  
During the initial planning phase of the project, a consensus was reached among the group members to keep the ambitions of the project realistic based on our experience and focus on the foundations of a CRUD application. We knew that we would not have an accurate estimation of how easy different functionality would be to implement and that it would be easy to overcommit; therefore, the user stories we wrote were initially not ambitious, but provied the opportunity for expansion if we didn't have enough to do.

## What could we have done better?
* **Setting code quality expectations**  
As a team, we would have benefited from having a quick discussion on topics such as code comments, error handling, checking passed arguments, consistent return values, single-responsibility principle, etc. Not setting these expectations hurt our overall productivity later on in development when our codebase became more complicated and it ended up being difficult to modify or expand upon existing code.
* **Better formed QAS**  
When the QASs were initially written we should of put more thought into how viable each test case would be for our team to implement. This caused the team to scramble towards the end of our final milestone when we started to test our QAS and realized some were too difficult for us to accomplish with the time we had, while others were very basic and ended up being more of a functional requirement than a QAS.
* **Follow the design at all times**  
When we first started working on user stories we made the mistake of accepting code into our repository on the basis that it worked and nothing more with the idea being we would refactor it before the current milestone ends. We should have had a more rigorous code review process to ensure that we follow our design from the very beginning. Not doing this produced an unnecessary and time-consuming refactor.
* **Discussion on error handling**  
As a team, we never formally discussed how to implement error handling in our design. This resulted in some functions returning null, others returned undefined, while others returned an object; the result object from Mongo, for example. This inconsistency made implementing and testing these functions more difficult than they needed to be. This caused us to refactor the error handling.
* **Started testing earlier**  
We made the mistake of starting our testing later than we should have. We wrote some basic unit tests for the first development milestone but didn’t put any more thought towards our testing until after the second development milestone; this includes integration testing and QAS testing as well as unit testing. Getting an earlier start on testing would have allowed us to do a better job of automating our tests. Additionally, we would have benefited from writing our tests around the same time the functionality was implemented since code is generally understood best when it is first written.
* **Clarifying expectations of the UI**  
At the start of the project, we decided to not worry about adding CSS to our frontend. We were under the impression that the UI style was not important, therefore we decided to spend our time elsewhere in the project. However, we later received feedback that the UI was poor and lost marks because of it. We should have done a better job of understanding UI expectations prior to making a decision.
* **Ensure all team members feel confident with the tools they're working with**  
We should of done a better job of making sure that team members were confident with the tools or lanuage they're working with. Many tasks ended up taking much long than expected because the time was not spend to learn the tools being used. This occasionally resulted in finished code not utilizing the tools to their full potential.

## How could our design be improved?
* **Simplify the DAOs**  
In the [initial](https://github.com/seng350/seng350f19-project-2-1/tree/master/docs/M2) design we decided to make a separate DAO class for each operation related to users and purchases (eg. userCreateDAO, userDeleteDAO, etc). For a large scale project, this kind of design may have been feasible to allow for clear responsibilities between classes; however, in a project our size, this would have resulted in many classes with a single function. Instead of this, we decided to create two DAOs; one for users, and one for purchases.
* **Better naming of our classes**  
Our current design does not make it obvious that we're following an MVC design; this is largely caused by how we ended up naming our classes. Instead, we named the controllers, "Routers"; and the models, "DAOs". Naming our classes "Controllers" and "DAOs" would make our design clear to someone reading the code; they wouldn't have to look at a design document for this information.
* **Better algorithm for generating purchase summary**  
To calculate total expenses in each category for each time slot, whether by year or by month, requires the full purchases of the user to be downloaded from the database. The current implementation pulls all data for a user in one database query, then for every time slot in each category, iterates through the list of purchases looking for relevant purchases and adding them to the total. An improvement could involve iterating through the list of purchases once; each purchase could have its cost added to the appropriate member in an object based on its category and date. This would speed up the overall loading time of the summary page and make the code easier to follow.

## What did we learn?
* **Web app design with Mongo, Node, and Express**  
Before this project began, no one on our team had experience developing web applications. This includes using tools such as MongoDB, Node.js, and Express. Now, after the project is completed, we have a better understanding of how these tools work together to create a fully functioning web application. 
* **Getting a project set up can take a lot of time**  
Setting up a project can be very tedious when there are lots of tools needed to get started. This process is definetly sped up by using npm, but other set up, such as a linter, TravisCI, and the bare bones application itself, all need to get finished before any user stories can be implemented. This process will definetly take longer when the tools are new to all members of the team.
* **Testing takes almost as long as development**  
Properly testing an application can take as long, if not longer, as the functionality being tested took to implement. For example, learning how to write mocked dependencies for unit tests took longer to write than some of the classes being mocked took to write. This shows how much time needs to be set aside for testing during development. 
