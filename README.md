# ASAS

asas mobile application

## Install

```bash
$> node app.js
```

## API

### Login
`POST /api/login`  

 * login (String)
 * password (String)

```json
{
    "success": true,
    "user": {
        "id": 42,
        "name": "john",
        "admin": false
    }
}
```

### Register
`POST /api/register`  

 * login (String)
 * email (String)
 * password (String)

```json
{
    "success": true,
    "user": {
        "id": 42,
        "name": "john",
        "admin": false
    }
}
```
