<div align="center">
  
<img src="https://github.com/ryanhutzley/beat-match/blob/main/client/src/icon/beatmatch_icon.png" alt="BeatMatch" width="200" height="200" />
  
# Flatiron Phase 4 Project - BeatMatch
  
</div>

## Description

BeatMatch is a matchmaking and music streaming platform for rappers and producers designed to promote musical collaboration. Profiles feature the user's music, playable in the app and visible to other users. 

**Check out the live site [here](https://stormy-basin-28378.herokuapp.com/login)!**

## Requirements

- Ruby 2.7.4
- NodeJS (v14 or higher), and npm
- Postgresql

## Setup

**Fork and clone this repository**.

Then run:

```sh
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)
- `rails start`: run the frontend and backend together with one command


## Acknowledgements

This project was built by Zeus Ramirez, Kenny Ghun-Yoon, and Ryan Hutzley. The frontend for this application was built using React, React Bootstrap, and ReactPlayer. The rails backend was configured using ActiveRecord, ActiveRecordSerializers, PostgreSQL, and BCrypt.
