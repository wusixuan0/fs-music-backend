# Figure Skating Program Music Search Website Project
**Goal**

I aim to develop a comprehensive figure skating program music search database with easy search functionality for music, artist/composer, or choreographer, as well as a user input form for submission of new figure skating program music information to the database. For now, the basic version will feature an alphabetical list of music on the front page, with each entry clickable to reveal details of skating programs using the music, including information about the skater, season, and program type (short program or free skating).

[fandom.com](https://figure-skating.fandom.com/wiki/Category:Music) is an existing website that offers similar functionality, but it is neither comprehensive nor up-to-date. Many people decline to contribute to Wikia/Fandom because of its for-profit business model. They feel uncomfortable doing unpaid work for a private company when they could instead contribute to non-profit projects like Wikipedia.

**data source**

The database will utilize skater information from Wikipedia pages, which are updated regularly by volunteers.

[**Database Schema Design draft**](https://drive.google.com/file/d/1d1Zc450tY9FpdjUUSSOquNJlNDByyX5y/view?usp=sharing)

<img src="https://imgur.com/UTah4Qa.png" alt="Alt Text" width="700"/>


**directory structure**

<img src="https://i.imgur.com/0zHGdZs.png" alt="Alt Text" width="300"/>


***TODO list***

1. Choose tech stack
    - Backend API: Node.js with Express.js, deploy with Heroku
    - Database Management: PostgreSQL (use SQL for now, introduce GraphQL later)
    - Frontend: React, deploy with Heroku
2. Write "Getting Started" section on README.md to provide essential information to quickly understand, set up, and start using the project. 

3. Develop a system to extract program music and artist/composer information from available sources. I attempted to extract information from Yuna Kim's Wikipedia page on [google colab](https://colab.research.google.com/drive/1JsfrcGvLFjtNXaVA3U-dQWdBgWq6kOp7?usp=sharing), but it appears manual input is necessary due to differences in formatting on Wikipedia.
4. implement routes

**Getting Started**

npx knex migrate:make init --migrations-directory db/migrations
____
TODO future
1. Implement a Search Function: Finally, implement a search function that will allow users to search for programs by music, artist/composer, and/or choreographer. You can use SQL queries to retrieve data from the database based on user input, and display results on a webpage or other interface.
2. Implement auto-suggestion functionality for search queries to enhance user experience. [Tutorial](https://www.educative.io/module/lesson/building-infinite-list/N7EE2Nk5RyN)
