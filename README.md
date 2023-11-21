## DatingApp

The primary goal of this dating app is to go beyond traditional dating norms, 
giving users a personalized experience that fits their individual preferences.
This web application offers users customized preferences features, a simple 
sign-up form, and a seamless online chatting platform.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)

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

  ## API Endpoints

 This dating app exposes the following API endpoints for interaction:

  * `/api/user/signUp`
     * Method: POST <br>
     * Description: Creates a new user <br>
     * Parameters: <br>
           &nbsp;&nbsp;`first name`: user's first name <br>
           &nbsp;&nbsp;`last name`: user's last name <br>
           &nbsp;&nbsp;`dob`: user's date of birth <br>
           &nbsp;&nbsp;`email`: user's email <br>
           &nbsp;&nbsp;`username`: user's username <br>
           &nbsp;&nbsp;`password`: user's password <br>
           &nbsp;&nbsp;`gender`: user's gender <br>
           &nbsp;&nbsp;`bio`: user's information (optional) <br>
           &nbsp;&nbsp;`preference`: user's preferred gender <br>
           &nbsp;&nbsp;`profile picture`: user's photo (optional) <br>
     * Response: <br>
           &nbsp;&nbsp;`message`: succesful or unsuccesful registration <br>

  * `/api/user/login`
     * Method: POST <br>
     * Description: Logins user into the website <br>
     * Parameters: <br>
           &nbsp;&nbsp;`username`: user's username <br>
           &nbsp;&nbsp;`password`: user's password <br>
     * Response: <br>
           &nbsp;&nbsp;`message`: welcomes user to website <br>

  * `/api/user/updateUser/:userId`
     * Method: POST <br>
     * Description: Logins user into the website <br>
     * Parameters: <br>
           &nbsp;&nbsp;`user_id`: user's id <br>
           &nbsp;&nbsp;`fields`: desired fields to update with their
           respective information <br>
     * Response: <br>
           &nbsp;&nbsp;`message`: succesful or unsuccesful update <br>

  * `/api/user/deleteUser/:userId`
     * Method: DELETE <br>
     * Description: Deletes user account <br>
     * Parameters: <br>
           &nbsp;&nbsp;`user_id`: user's id <br>
           &nbsp;&nbsp;`password`: user's password <br>
     * Response: <br>
           &nbsp;&nbsp;`message`: successful or unsuccessful deletion <br>

  * `/api/getUser/:userId`
     * Method: GET <br>
     * Description: Gets users by username <br>
     * Parameters: <br>
           &nbsp;&nbsp;`user_id`: current user's id <br>
           &nbsp;&nbsp;`username`: requested user username <br>
     * Response:
           &nbsp;&nbsp;`message`: user <br>

  * `/api/match/newMatch`
     * Method: POST <br>
     * Description: Creates and checks if there is an
       existing match <br>
     * Parameters: <br>
           &nbsp;&nbsp;`user_requester_id`: current user's id <br>
           &nbsp;&nbsp;`user_receiver_id`: matched user <br>
     * Response: <br>
           &nbsp;&nbsp;`message`: successful or unsuccessful match creation <br>

   * `/api/match/deleteMatch`
     * Method: DELETE <br>
     * Description: Creates and checks if there is an
       existing match and deletes it <br>
     * Parameters: <br>
           &nbsp;&nbsp;`userid_first`: user's id <br>
           &nbsp;&nbsp;`userid_second`: user's id <br>
     * Response: <br>
           &nbsp;&nbsp;`message`: successful or unsuccessful match deletion <br>

  * `api/messages/getChat`
     * Method: GET <br>
     * Description: Gets complete conversation between two users <br>
     * Parameters: <br>
         &nbsp;&nbsp;`sender_id`: sender id <br>
         &nbsp;&nbsp;`receiver_id`: receiver id <br>
     * Response: <br>
         &nbsp;&nbsp;`message`: chat between users <br>
