Title: Marking Rubric - Project

Authors: Neil Ernst
---

# Running Total (this will change each milestone):   42

NB: for all milestones, basic clean coding style: comments, standardized indentation, lack of code smells, is expected. Your submission and repository should show the following: 
	- Travis CI is being used (M3+)
	- a static analysis tool and linter has been applied (M3+)
	- Typescript project best practices are followed (M3+)

# Milestone 1    9 / 10

## Marking Guide	

- ASRs complete and capture
  - need to persist data
  - need to manage user state and cookies
  - security and privacy
  - usability
  - performance and latency
  - async issues

Marks deducted:

- scenarios seem to have little to no connection with the project (-2)
- poor technical writing  (-2)
- Quality of scenarios (clear analysis of stimulus, response, response measure)

## Notes M1

(explaining why marks were deducted)
-----

- some of the QAS were more functional in nature (see comments online)

# Milestone 2    16/ 20

## Marking Guide

- design cohesive and intelligent
- design solves QAR from M1
- design models follow conventions for class and activity diagrams
- design allows for future changes
- design justifies technology choices

## Notes M2

- Technical Writing could be better. The design is not well detailed as written. (-1) 
- ADR for testing does not completely satisfy the highlighted Testing QAS. (-1) 
- Incomplete design decisions for technology selection. (-2)

-----


# Milestone 3    17/ 20

## Marking Guide	

- code conventions/CI from above
- working demo 
- clear explanation of what user stories were satisfied in this iteration
- design is visibly MVC or some justification of why not 
- async is async when necessary
- code compiles
- TSLint does not complain.

## Notes M3

(explaining why marks were deducted)

- CI is not implemented. (-2)
- Comments are missing. (-1)

# Milestone 3.5  4 / 5

## Marking Guide	
- code compiles 
- code conventions/CI from above (commented, code style, design principles)
- working demo 
- clear explanation of what (2) user stories were satisfied in this iteration
- design as implemented follows design doc, or change rationale is present in README
- async is async when necessary
- TSLint does not complain
- test suite present/part of CI
- test coverage reasonable and meaningful

## Notes M3.5
(explaining why marks were deducted)
- Testing is incomplete since last milestone, no improvement. (-1)

-----

# Milestone 4    / 30

## Marking Guide	
- code compiles 
- code conventions/CI from above (commented, code style, design principles)
- working demo 
- clear explanation of how the remaining user stories were satisfied in this iteration
- design as implemented follows design doc, or change rationale is present in README
- async is async when necessary
- TSLint does not complain
- test suite present/part of CI
- test coverage reasonable and meaningful

And new in M4:
- **explanation of how you are automating testing 3 QAS from your list in M1** 
- **explanation of integration testing and CI pipeline**


## Notes M4
(explaining why marks were deducted)
-----

# Milestone 5  6 / 10

## Marking Guide
- demo works without error. -1 per bug or workaround.
- demo covers all user stories. Show us your user stories and make it clear what user story you are going through.
- demo has a coherent and organized demo script
- architectural summary is brief and coherent, explaining the key design problems.

## Notes M5
- UI pretty boring and lacks attention
- while the features are there, they aren't very ambitious
- Not a lot of depth in the QAS e.g. return by order number as the way in which you do testability

A bit vague on what design changes were made. Controllers were refactored midway through  but why? how did you realize this was needed?

----

# Milestone 6 / 5

## Marking Guide
- evidence of reflection and meaningful consideration of potential and actual problems.
- presentation and writing style appropriate for technical writing in software engineering.
- demonstrates understanding of design approach using Node/Express/Mongo.
