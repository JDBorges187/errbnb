# Errbnb

Errbnb is a place for software engineers, developers, and remote workers to find a place to crash!

### [LINK](https://errbnb-app.herokuapp.com/)


### Back End
Err(bnb) was built using Express for the server with a postgreSQL database. The back end structure utilizes RESTful convention and handles user requests through our API and uses JSON and redux to update the front end. Err(bnb) uses token based authentication and BCrypt to safely store user passwords and verify login credentials. 
### Front End
The front end was built using React Components to render the pages with JavaScript and Redux to store stateand make the pages dynamic.
### List of Technologies
* Express
* BCrypt
* PostgreSQL
* Heroku
* React
* Redux
* [airbnb/react-dates](https://github.com/airbnb/react-dates)
* MomentJS(For Efficient Date Object Handling)
* 

### Core Features
* Add/ delete places.
* Add/delete booings at these places.
* Sign up/Login/ Demo User
##### User Authorization
User authentication is handled in JavaScript using BCrypt to hash passwords for storage. To authenticate users, the submitted password is hashed and then compared to the hashed password stored in the database.


