## DatingApp

The primary goal of this dating app is to go beyond traditional dating norms, 
giving users a personalized experience that fits their individual preferences.
This web application offers users customized preferences features, a simple 
sign-up form, and a seamless online chatting platform.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)

## Getting Started

To get started with the project follow these steps:

## Prerequisites

  1 - npm (Node Package Manager)

    npm install node

## Installation

  1 - Clone repository

    git clone https://github.com/elsoukicarol/DatingApp.git

  2 - Install libraries/packages

    npm install sequelize

    npm install mysql2

    npm install socket.io

    npm install express

    npm install express-validator

    npm install dotenv

    npm install nodemon

    npm install body-parser

  ## Configuration

  Change the configuration of the database in the .env file, this configuration 
  should match your database name, port number, username, and password. Also,
  change the dialect in the /database/config.sequelize.js file according to your 
  predefined dialect.

  ## Usage

 Some methods that shape the backend of this project are:

  * SignUp: gets the user's personal information, checks if it's a new user and
     register it in the database.

  * SignIn: validates credentials and welcomes the user to the website.

  * UpdateUser: allows the user to make some updates to his profile (first name,
    last name, bio, profile picture, etc.).

  * DeleteUser: deletes the account of a user on the website

  * GetUserByUsername: allows users to find people according to their username

  * CreateMatch: generates matches between users and checks if both users match.

  * DeleteMatch: deletes match between two users

  * CreateMessage: sends message between two users

  * GetConversation: returns the entire conversation between two users
