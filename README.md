# Figure Skating Program Music Database Project
### Goal

I aim to develop a comprehensive figure skating program music search database with easy search functionality for music, artist/composer, or choreographer, as well as a user input form for submission of new figure skating program music information to the database. 

For now, the basic version will feature an alphabetical list of music on the front page, with each entry clickable to reveal a list of of skating programs using the music, including information about the skater, season, and program type (e.g. short program).

[fandom.com](https://figure-skating.fandom.com/wiki/Category:Music) is an existing website that offers similar functionality, but it is neither comprehensive nor up-to-date. Many people decline to contribute to Wikia/Fandom because of its for-profit business model. They feel uncomfortable doing unpaid work for a private company when they could instead contribute to non-profit projects like Wikipedia.

### Data source

ISU web archive ([example](https://web.archive.org/web/20100527225704/http://www.isuresults.com/bios/isufs00007232.htm)), Wikipedia



### Tech stack
- Backend API (this repo): Node.js, Express.js, PostgreSQL, PostgreSQL, Railway
- Frontend ([link](http://github.com/wusixuan0/fs-frontend)): javascript, netlify

### Demo/Sample URL:

[index_page](https://fluffy-sunflower-e4e412.netlify.app)

[item_page](https://fluffy-sunflower-e4e412.netlify.app/music_title)

### Work in Progress: TODO List
- fill database
   - Develop a system to extract program music and artist/composer information from available sources. I extracted information from Yuna Kim's Wikipedia page on [google colab](https://colab.research.google.com/drive/1JsfrcGvLFjtNXaVA3U-dQWdBgWq6kOp7?usp=sharing), but it appears manual input is necessary due to differences in formatting on Wikipedia.

- [remove redundancy in api logic](https://docs.google.com/document/d/1-Rf1M40dCZ2UMdzquOPsJGLgOZrtC7Zl7IXd4wa28AA/edit#bookmark=id.md4oxjjabvtl)

### Getting Started

    npm install
    npm start
[more dev notes](https://docs.google.com/document/d/1-Rf1M40dCZ2UMdzquOPsJGLgOZrtC7Zl7IXd4wa28AA/edit?usp=sharing)


### Database Schema Design [link](https://drive.google.com/file/d/1d1Zc450tY9FpdjUUSSOquNJlNDByyX5y/view?usp=sharing)

<img src="https://i.imgur.com/5HnCoOA.png" alt="Alt Text" width="700"/>


### API directory structure

<img src="https://i.imgur.com/0zHGdZs.png" alt="Alt Text" width="300"/>

 
TODO future
1. Implement a Search Function: Finally, implement a search function that will allow users to search for programs by music, artist/composer, and/or choreographer. You can use SQL queries to retrieve data from the database based on user input, and display results on a webpage or other interface.
2. Implement auto-suggestion functionality for search queries to enhance user experience. [Tutorial](https://www.educative.io/module/lesson/building-infinite-list/N7EE2Nk5RyN)
