# ASAS

ASAS mobile application

## Install

```bash
$> git clone git@github.com:goldledoigt/asas.git
$> cd asas
$> npm install
$> cp config.sample.js config.js
$> vi config.js
```

```js
module.exports = {

    port: 3001,

    db: {
        host: 'DB_HOST',
        user: 'DB_USER',
        database: 'DB_NAME',
        password: 'DB_PASSWORD'
    }

};
```

## Launch

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

### Logout
`GET /api/logout`  

```json
{
    "success": true
}
```

### Teams
`GET /api/teams`  

```json
[{
    "id": 1,
    "name": "6 - Girls"
}, {
    "id": 2,
    "name": "6 - Boys"
}, {
    "id": 3,
    "name": "4 - Mixed"
}]
```

### Team events
`GET /api/teams/:id/events`  

 * id (String)

```json
[{
    "id": 35,
    "name": "Wednesday training",
    "date": "2012-09-16T20:39:07.000Z"
}, {
    "id": 36,
    "name": "Saturday match",
    "date": "2012-09-16T20:39:07.000Z"
}]
```

### Team members
`GET /api/teams/:id/members`  

 * id (String)

```json
[{
    "id": 35,
    "name": "Billy",
    "admin": 0
}, {
    "id": 36,
    "name": "John",
    "admin": 1
}]
```
