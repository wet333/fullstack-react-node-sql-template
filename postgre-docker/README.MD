# Guia para conectarse a PgAdmin y conectar PgAdmin a la base de datos Postgres

## Paso 1: Iniciar los container

- Para esto solo es necesario correr "docker-compose -env-file ./../.env up" en este mismo directorio.

 ```bash
    docker-compose up
```

- El flag -env-file lee el archivo .env y lo usa para iniciar los contenedores.

## Paso 2: Ingresar a la plataforma PgAdmin

- Una vez que tenemos los container corriendo, vamos al http://localhost:80

- En las credenciales usamos las variables de entorno que establecimos en el docker-compose.yml
  PGADMIN_DEFAULT_EMAIL y PGADMIN_DEFAULT_PASSWORD , y los usamos para ingresar a la plataforma
  de PgAdmin.

## Paso 3: Conectar PgAdmin a la base de datos de Postgres

- Una vez logeados en la plataforma vamos a agregar un servidor, haciendo segundo click en la
  pestaña servers en la lista de la izquierda, registrar -> servidor.

- Alli nos abrira una ventana con la pestaña "General" seleccionada.

- En "General", solo agregaremos un nombre de servidor, que puede ser cualquiera que nos permita
  identificar que base de datos es, no afecta nada mas.

- Luego lo mas importante, vamos a la pestaña "Connection" y alli completamos los campos para
  conectarnos a nuestra abse de datos, una vez mas usando las variables de entorno del archivo
  docker-compose.yml.

  - En el input host, va el nombre del container que tiene la base de datos (NO USAR LOCALHOST),
    en este caso usamos "postgres".

  - En el input port usamos el puerto por defecto o el que sea que estemos usando, en este caso es
    el puerto default 5432.

  - En el input Maintenance database, usamos lo que tengamos en la variable de entorno POSTGRES_DB
    del .yml, nuestro caso learning.

  - Y por ultimo en los inputs de username y password, usamos las variables POSTGRES_USER y
    POSTGRES_PASSWORD, que en nuestro caso son root y password respectivamente.


Y listo, ya deberias tener tu base de datos funcionando y acceder a ella a travez de pgadmin.