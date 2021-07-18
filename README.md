# :computer: API para Registros

## :books: **|** Introdução:

Esse projeto é uma aplicação para realizar registros de contas, onde você poderá **Criar**, **Atualizar**, **Remover** e **Selecionar** todos os registros de contas do banco de dados.

Lembrando que nesse projeto eu usei o **TypeScript**, **Sucrase**, **Express**, **BCryptJS** e **Mongoose** para realizar o desenvolvimento do projeto.

## :satellite: **|** Rotas:

### Listagem de Usuários - `GET`
```json
{
    "response": [
        {
            "_id": "String",
            "username": "String",
            "email": "String",
            "password": "String",
            "createdAt": "Date",
            "updatedAt": "Date",
            "__v": 0
        }
    ]
}
```

### Criação de Usuário - `POST`
```json
{   
    "request": {
        "type": "application/json",
        "body": {
            "username": "String",
            "email": "String",
            "password": "String"
        }
    },
    "response": {
        "_id": "String",
        "username": "String",
        "email": "String",
        "password": "String",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}
```

### Atualização de Senha - `PUT`
```json
{   
    "request": {
        "type": "application/json",
        "body": {
            "email": "String",
            "oldPassword": "String",
            "newPassword": "String"
        }
    },
    "response": {
        "message": "Update Success!"
    }
}
```

### Remoção de Usuário - `DELETE`
```json
{   
    "request": {
        "type": "application/json",
        "params": {
            "id": "String"
        }
    },
    "response": {
        "message": "Delete Success!"
    }
}
```