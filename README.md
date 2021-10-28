# Medical Records Back End
Medical Records BackEnd (Node)

The intention of this project is to keep a record of medical history for the family

# Architecture

![Architecture](images/architecture.png)

# Initial thougts on API

- /member - General Data for a fmaily member
- /visit - Details of a medical consultation
- /history - List of visits corresponding to a member


# MongoDB

## Initial Setup

This project will use an instance of mongo DB, please follow these steps for the initial setup

The name is med-records

To Start the service

```
brew services start mongodb-community@5.0
```

or to stop the service:

```
brew services stop mongodb-community@5.0
```

Once started create a db

´´´
mongo
use med-records
´´´

create member document

´´´
db.memeber.insert([{ name: 'Ricardo', 
 lastname: 'Uribe',
 age: 38,
 }])
´´´
