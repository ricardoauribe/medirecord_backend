# Medical Records Back End
Medical Records BackEnd (Node)

The intention of this project is to keep a record of medical history for the family

# Architecture

![Architecture](images/architecture.png)

# Initial thougts on API

- / - Home should redirect to static content folder over build folder
- /api/member/:name - General Data for a family member
- /api/members - Get all members
- /api/appointment/:id - Get details on an specific appointment
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

```
mongo
use med-records
```

create members document

```
db.members.insert([{ name: 'Ricardo', 
 lastname: 'Uribe',
 age: 38,
 }])
```

create appoitment document

```
db.appointment.insert([{ 
 appointment_id : 'abcd', 
 patient: 'Ricardo Uribe', 
 Date: '2022-10-27',
 Type: 'Dentist',
 Description: 'Caries Removal',
 RecepieURL: 'TBD',
 BillPDF: 'TBD',
 BillXML: 'TBD',
 }])
```
