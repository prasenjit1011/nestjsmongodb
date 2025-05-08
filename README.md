<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

###   NestJS Mongoose GraphQL 
####  Country <-> State

```bash

### Step 01 : Country list ###

# mutation {
#   createCountry(input: { name: "India" }) {
#     id
#     name
#   }
# }

# query {
#   countries {
#     id
#     name
#   }
# }


### Step 02 : State list ###

# mutation {
#   createState(input: { name: "Orisha" }) {
#     id
#     name
#   }
# }

# query {
#   states {
#     id
#     name
#   }
# }


### Step 03 : State -> country ###

# mutation {
#   createState(input: { name: "Gujrat", countryId:"681ca957d26e346e2f4316ae" }) {
#     id
#     name
#   }
# }

# query {
#   states {
#     id
#     name
#     country{
#       name
#     }
#   }
# }


### Step 04 : Country -> state ###

# query {
#   countries {
#     id
#     name
#     states {
#       id
#       name
#     }
#   }
# }


### Step 05 : Add District ###

# mutation {
#   createDistrict(input: { name: "Purulia", stateId:"681cb08a733303d44996c79f" }) {
#     id
#     name
#   }
# }

# query {
#   districts {
#     id
#     name
#   }
# }


### Step 06 : Distict -> state ###

# query {
#   districts{
#     id
#     name
#     state{
#       name
#     }
#   }
# }


## Done : State -> District
# query {
#   stateDetails {
#     id
#     name
#     districts {
#       name
#     }
#   }
# }





```

