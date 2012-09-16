# ASAS

asas mobile application

## Install

```bash
$> node app.js
```

## API

Login: `/api/login`
```json
{
    "success": true/false
    "user": {
        "id": 42,
        "name": "john",
        "admin": true/false
    }
}
```