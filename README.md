
# Daily Dairy

Daily Dairy is a web app that is designed so that you can add your daily journal/summary as well as your memories. This is a great way to store memories and summary so that you can revist those and relive that exact moment.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NAME` - Username you have in mongodb

`PASS` - Password you have in mongodb

`CLUSTER` - Cluster name

`DATABASE` - Database name


## Tech Stack

**Client:** 

- HTML, CSS
- JavaScript

**Server:** 

- Node JS
- Express

**Templating Engine:**

- EJS

**Database:**

- MongoB
- Mongoose
## Run Locally

Clone the project

```bash
  git clone https://github.com/Fay4z/daily-dairy.git
```

Go to the project directory

```bash
  cd daily-dairy
```

Setup .env file

```bash
  NAME = "MongoDB Database Usename eg: john"
  PASS = "MongoDB Database Password"
  CLUSTER = "Cluster Name"
  DATABASE = "Database name inside the Cluster"
```


Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon app
```

