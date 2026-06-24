# FliteManegmentSystemBackend

A backend API for a Flight Booking Management System built with **Node.js**, **Express.js**, and **MYSql**. It provides APIs for user authentication, flight management, airline/airport management, and booking operations.

## Features

* User registration and login
* JWT-based authentication
* Role-based access control for admin and user
* Flight CRUD operations
* Airline CRUD operations
* Airport CRUD operations
* Booking creation and management
* Data validation and error handling
* RESTful API design

## Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MySql
* **Authentication:** JWT
* **MessageBrocker:** RabbitMq
* **Other tools:** dotenv, bcrypt, validation middleware


## Workflow

1. User registers or logs in.
2. Server generates a JWT token.
3. User searches available flights.
4. User books a flight.
5. Booking is stored in the database.
6. Admin manages flights, airlines, and airports.

## Future Enhancements

* Payment gateway integration
* Seat selection feature
* Real-time flight availability updates
* Automated testing with Jest/Supertest
* Docker support

## Contributing


## License

This project is intended for educational and development purposes.

