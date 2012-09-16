# ASAS

asas mobile application

## Install

```bash
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
