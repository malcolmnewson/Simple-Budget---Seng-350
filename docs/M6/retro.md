# Retrospective Report for Seng 350 Group 2-1
### Participants
- Emily Sluis
- Malcolm Newson
- Oliver Lewis

## What did we do that went well?
  * **The DAO's were well written**  
The DAO's had descriptive comments, consistent error handling, and clean code. This made them easy to implement within other modules,  and easy to unit test.
  * **Skill-levels were accurately assessed**  
During the design phase, we were able to determine the experience levels of each team member. This allowed us to split up the workloads to ensure that no team members have too little or too much work.
  * **Met regularly**  
  < Add description here >
  * **Realistic user stories**  
  < Add description here >

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
  < Add description here >
  * **Understand expectations on the UI**  
  < Add description here >
  
## How could our design be improved?
* **Simplify the DAOs**  
< Add description here >
* **Better naming of our classes**  
Our current design does not make it obvious that we're following an MVC design; this is largely caused by how we ended up naming our classes. Instead, we named the controllers, "Routers"; and the models, "DAOs". Naming our classes "Controllers" and "DAOs" would make our design clear to someone reading the code; they wouldn't have to look at a design document for this information.
* **Better algorithm for generating purchase summary**  
< Add description here >

## What did we learn?
* **Even small decisions may have a large impact later on**  
< Add description here >
* **Web app design with Mongo, Node, and Express**  
< Add description here >
* **Getting a project set up can take a lot of time**  
< Add description here >
* **Testing takes almost as long as development**  
< Add description here >
