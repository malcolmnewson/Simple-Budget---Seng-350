# Retrospective Report for Seng 350 Group 2-1
## Finance Tracker






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
