// Crear tabla de mensajes

const initDB = (dbClient) => {

    dbClient.query(
        `CREATE TABLE messages (
            id serial primary key,
            message character varying(500) NOT NULL
        );`
        , (err, result) => {
            if (err) {
                console.info("Tabla messages, ya ha sido creada previamente");
            } else {
                console.info("Tabla messages creada");
            }
        }
    );
    return;
}

module.exports = initDB;