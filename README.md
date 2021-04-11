# Toolbox palindrome

This project will help you to identify whether or not a string is a palindrome and will also return that string in reverse.


## Build Project

`docker build -t "api-server" .`
## Run Project

`docker-compose up`
## Stop Project

`docker-compose down`


# Supertest unit test
REST API test using supertest and mocha

# Run test

`npm install`

`npm test`


## Processing data
### iecho

with the following endpoint you can send to get its string to validate

**GET** `/api/iecho?text=oso`

**Response**

**status:** 200

```
{
    "success": "", 
    "data":[
        {
            "text": "",
            "palindrome":""
        }
    ]
}
```


**status:** 400

**GET** `/api/iecho?text=`

```
{
    "success":false,
    "error": "no text"
}
```




The `/api` endpoint not require authorization (jwt).