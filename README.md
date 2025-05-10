<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

###   NestJS Mongoose GraphQL 
####  Country <-> State <-> District <-> Company <-> Employee 
####  Add : mutation, Listing : query

```bash

### Final Step ###

# mutation {  createCountry   (input: { name: "India" }) { id, name }}
# mutation {  createState     (input: { name: "Gujrat", countryId:"681d62007c6c4a51aeb1d90c" })     { id, name    }}
# mutation {  createDistrict  (input: { name: "Ahmadabad", stateId:"681ee19b2bdaac2a57444024" })    {  id, name   }}
# mutation {  createCompany   (input: { name: "CO-Adani", districtId:"681ee2202bdaac2a5744402b" })  {  id, name  }}
# mutation {  createEmployee  (input: { name: "EM-Riyan", companyId:"681efb59c83fffd9c97e69f7" })   {  id, name  }}


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


### Completed
###############################################################

```

