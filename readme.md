# Reminder Service
## Overview
- The Reminder Service is a microservice responsible for scheduling and sending time-based notifications (such as email reminders) for events like flight departures, bookings. It works asynchronously using a message queue and cron jobs to ensure reliability, scalability, and loose coupling with other services.
### Project setup
- clone the project on your local
- execute `npm install` on the same on the same path as of your root directory of the downloaded project
- create `.env` file in the root directory and add `PORT <number>`
- setup mysql in your local
- go to the `src` folder from your terminal run `npx sequelize init``
- after that inside the `src/config` folder create a new file `config.json` and then add the following piece of json
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": <DB_NAME>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- after setting up this go to the `src` folder from your terminal and execute `npx sequelize db:create`
### DB Design
#### notificationticket Table

- to generate user table run `npx sequelize model:generate --name notificationticket --attributes subject:string,content:text,recipientEmail:string,status:enum,notificationTime:date,departureTime:date`

- after that figure out some migration attributes based on your requirement run `npx sequelize db:migrate`

- setup channel and queues for message queue via rabbitmq for reminder service  to consume the messages from the queues in which message is being published by booking service 
### API Endpoints
#### Base URL: /api/v1/
POST "/create" -> create tickets;

