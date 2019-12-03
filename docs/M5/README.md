### [User Stories](https://github.com/seng350/seng350f19-project-2-1/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3A%22user+story%22+)

1. As the Administrator, I want to be able to **create a user account** in order to manage accounts in the system.
2. As the Administrator, I want to be able to **delete a user account** in order to manage accounts in the system.
3. As a user, I want to **log into my account** in order to access my data.
4. As a user, I want to **enter a purchase** into a spending category in order to track how much money has been spent in that category.
5. As a user, I want to **see my spending history** within each category in order to see all past purchases. 
6. As a user, I want to **edit previously logged purchases** in order to update them.
7. As a user, I want to access a **summary of my expenses** in a variety of formats and time frames. 


### [QAS](https://github.com/seng350/seng350f19-project-2-1/issues?q=is%3Aissue+label%3Aqas)

1. **Usability** - Input validation on purchase amount.
2. **Usability** - User can change the time frame of the summary and see the results within 1 second.
3. **Usability** - Mulitple transactions can be submitted to different categories without leaving the page.
4. **Performance** - Database should handle >10 users each with >1000 transations without decreasing the response time of the database queries by 1 second.
5. **Performance** - A user's page loads within 1 second of login.
6. **Maintainability** - Modifying the summary format should take <5 hours of development time.
7. **Testability** - Ability to verify the information displayed is correctly linked to the account selected
