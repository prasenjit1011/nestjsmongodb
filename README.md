<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

###   NestJS Mongoose GraphQL 
####  Country <-> State

```bash
### Step 01 ###

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


### Step 02 ###

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


### Step 03 ###

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


### Step 04 ###

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


```

