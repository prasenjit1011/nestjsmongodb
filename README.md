<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

###   NestJS Mongoose GraphQL 
####  Country <-> State <-> District <-> Company <-> Employee 
####  Upload File/Image for employee CRUD
####  Add : mutation, Listing : query

```bash

### Final Step ###

### Country -> State -> District -> Company 

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



# mutation {  createCountry   (input: { name: "India" }) { id, name }}
# mutation {  createState     (input: { name: "Gujrat",     countryId:"681d62007c6c4a51aeb1d90c" }){id, name    }}
# mutation {  createDistrict  (input: { name: "Ahmadabad",  stateId:"681ee19b2bdaac2a57444024" }){  id, name   }}
# mutation {  createCompany   (input: { name: "CO-Adani",   districtId:"681ee2202bdaac2a5744402b" })  {  id, name  }}
# mutation {  createEmployee  (input: { name: "EM-Riyan",   companyId:"681efb59c83fffd9c97e69f7" })   {  id, name  }}


# mutation {  updateEmployee(input: { name: "Baby Riyan",   id: "empID" }) {  id, name  }}
# mutation {  deleteEmployee(id: "empID")}



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

### Completed #####

###############################################################


```

