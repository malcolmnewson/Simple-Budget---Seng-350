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
Our current design does not make it obvious that we're following an MVC design; this is largely caused by how we ended up naming our classes. 
* **Better algorithm for generating purchase summary**  
< Add description here >

## What did we learn?
* **Even small decisions may have a large impact later on**  
< Add description here >
* **Web app design with Mongo, Node, and Express**  
< Add description here >
* **
#malcolm's suggestions of topics 
during the very initial design phase we deleberitly kept our project simple and without fansy UI or complicated features, with the motivation of limiting what we were commited to. Which i think was a great choice for keeping the project work managable and low stress, but based on the resonpse to the demo niel felt it was too simple and lacking in UI. Which obviously is frustrating because of how vaige the requirements have been.

It was hard to write good QAS at the begining that we could actually implement because of how limited the framework/requirements were.

I think we did a good job of meeting regularly and sharing the work load. Oliver prob did a larger share, esspecially at the begining. 

I am guessing that he wants more reflection regarding the architecture and app, rather then group work. 
  If we were displaying the summary on the same page as the purchase upload/edit option then having the summary get updated with additions directly without qurying the database.
  For creating the summary page, we changed from using the mongodb to filter purchases caused far too many database queries, and so pulling the data once and filtering the list of json objects. However for each category and time range, the whole list was searched and purchases added to a total. It could be improved by sorting by date, then category, and summing the relevent groups. Or by iterating through the list once and populating an array of data based on each  purchases data.


### Rubric

    evidence of reflection and meaningful consideration of potential and actual problems.
    presentation and writing style appropriate for technical writing in software engineering.
    demonstrates understanding of design approach using Node/Express/Mongo.

After class and the project are done, create a group retrospective document as a Markdown file called retro.md. It should reflect on what you learned, what you could do better, and how your design can be improved.

The Markdown file. Use appropriate technical writing style and organization. Aim for at least 1000 words.
