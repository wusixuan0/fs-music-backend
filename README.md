# Figure Skating Program Music Search Website Project
**Goal**

I aim to develop a comprehensive figure skating program music search database with easy search functionality for music, artist/composer, or choreographer, as well as a user input form for submission of new figure skating program music information to the database. For now, the basic version will feature an alphabetical list of music on the front page, with each entry clickable to reveal details of skating programs using the music, including information about the skater, season, and program type (short program or free skating).

[fandom.com](https://figure-skating.fandom.com/wiki/Category:Music) is an existing website that offers similar functionality, but it is neither comprehensive nor up-to-date. Many people decline to contribute to Wikia/Fandom because of its for-profit business model. They feel uncomfortable doing unpaid work for a private company when they could instead contribute to non-profit projects like Wikipedia.

**data source**

Wikipedia, ISU web archive ([example](https://web.archive.org/web/20100527225704/http://www.isuresults.com/bios/isufs00007232.htm))


**TODO list**
1. Write "Getting Started" section to set up and start using the project.
2. Write [instructions](https://docs.google.com/document/d/1-Rf1M40dCZ2UMdzquOPsJGLgOZrtC7Zl7IXd4wa28AA/edit?usp=sharing) on how to set up Netlify with Express app

**In progress**
- fill database
   - Develop a system to extract program music and artist/composer information from available sources.
   - I extracted information from Yuna Kim's Wikipedia page on [google colab](https://colab.research.google.com/drive/1JsfrcGvLFjtNXaVA3U-dQWdBgWq6kOp7?usp=sharing)
   - but it appears manual input is necessary due to differences in formatting on Wikipedia.

- [remove redundancy in api logic](https://docs.google.com/document/d/1-Rf1M40dCZ2UMdzquOPsJGLgOZrtC7Zl7IXd4wa28AA/edit#bookmark=id.md4oxjjabvtl)
- refactor urls in function/api.js(netlify), src/app.js, src/index.js(local)

**tech stack**
- Backend API: Node.js with Express.js, deploy with Netlify
- Database: PostgreSQL
- Frontend:

**Getting Started**

    npm install
    npx knex migrate:make init --migrations-directory db/migrations
    npm start


[**Database Schema Design draft**](https://drive.google.com/file/d/1d1Zc450tY9FpdjUUSSOquNJlNDByyX5y/view?usp=sharing)

<img src="https://imgur.com/UTah4Qa.png" alt="Alt Text" width="700"/>


**API directory structure**

<img src="https://i.imgur.com/0zHGdZs.png" alt="Alt Text" width="300"/>

 
TODO future
1. Implement a Search Function: Finally, implement a search function that will allow users to search for programs by music, artist/composer, and/or choreographer. You can use SQL queries to retrieve data from the database based on user input, and display results on a webpage or other interface.
2. Implement auto-suggestion functionality for search queries to enhance user experience. [Tutorial](https://www.educative.io/module/lesson/building-infinite-list/N7EE2Nk5RyN)
