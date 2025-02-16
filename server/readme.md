# /users/register

This endpoint registers a new user.

## Method
POST

## Request Body
```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string (valid email format)",
  "password": "string (min length: 6)"
}
```

• All fields are required.  
• The user's password is hashed before storing.

## Response
• On success (201): Returns a JSON containing a token and user details.  
• On validation error (400): Returns an array of error messages.
