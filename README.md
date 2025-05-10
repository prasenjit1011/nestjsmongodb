<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

###   NestJS Mongoose GraphQL 

```bash

### 1.  Country <-> State <-> District <-> Company <-> Employee 
### 2.  Upload File/Image for employee CRUD
### 3.  Auth : User, AuthGuards : Product 
### 4.  Add : mutation, Listing : query


### Start :   CRUD ( Country, Auth ) ###
### Listing : Country -> State -> District -> Company 

# query { 
#   countryDetails {
#     name
#     stateDetails {
#       name
#       districtDetails {
#         name
#         companyDetails {
#           name
#           employeeDetails{
#             name
#           }
#         }
#       }
#     }
#   }
# }


### Company -> District -> State -> Country
### stateDetails, districtDetails, companyDetails
# query {
#   companyDetails {
#     name
#     district {
#       name
#       state {
#         name
#         country {
#           name
#         }
#       }
#     }
#   }
# }


### Add, Update, Delete : CRUD ( Country ) ###

# mutation {  createCountry   (input: { name: "India" }) { id, name }}
# mutation {  createState     (input: { name: "Gujrat",     countryId:"681d62007c6c4a51aeb1d90c" }){id, name    }}
# mutation {  createDistrict  (input: { name: "Ahmadabad",  stateId:"681ee19b2bdaac2a57444024" }){  id, name   }}
# mutation {  createCompany   (input: { name: "CO-Adani",   districtId:"681ee2202bdaac2a5744402b" })  {  id, name  }}
# mutation {  createEmployee  (input: { name: "EM-Riyan",   companyId:"681efb59c83fffd9c97e69f7" })   {  id, name  }}
# mutation {  updateEmployee(input: { name: "Baby Riyan",   id: "empID" }) {  id, name  }}
# mutation {  deleteEmployee(id: "empID")}

### Auth ###
# mutation {  createUser( username: "Karim", password: "12345") {username, password }}
# mutation {  login(username: "Karim", password: "12345")}



### PostMan : Create employee with image #####################

# URL : http://localhost:3003/graphql
# Method : POST

# TEXT
# operations
# {"query":"mutation($file: Upload!) { createEmployee(input: { name: \"Aluni\", companyId: \"681efb59c83fffd9c97e69f7\" }, file: $file) { id name image } }", "variables": {"file": null}}

# TEXT
# map
# {"0": ["variables.file"]}

# FILE
# 0
# SELECT FILE


### Step-by-Step to Add Headers: ###
### Auth ###

# Step-by-Step to Add Headers:
# Open your GraphQL Playground (or your GraphQL UI).
# Look for a "Headers" section.
# In GraphQL Playground:
# You will see two panels — Query on the left, HTTP HEADERS tab at the bottom-right.
# Click on the HTTP HEADERS tab (bottom-right or side tab).
# Paste your JWT Token in JSON format like:
# {"Authorization": "Bearer your_jwt_token_here"  }

#########
# mutation {  createUser( username: "Karim", password: "12345") {username, password }}
# mutation {  login(username: "Karim", password: "12345")}


### End : CRUD ( Country, Auth ) ###
### Completed #####

###############################################################

```


```bash


```



