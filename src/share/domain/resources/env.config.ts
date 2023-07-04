import { registerAs } from '@nestjs/config';

/**
 *  @description En las aplicaciones de Node.js, es común usar archivos .env, que contienen pares
 *  clave-valor donde cada clave representa un valor particular, para representar cada entorno.
 *  Ejecutar una aplicación en diferentes entornos es solo una cuestión de intercambiar el
 *  archivo .env correcto.
 *
 *  @author Luis Torres
 *
 */
export default registerAs('configuration', () => ({
  PORT: process.env.PORT,
  TIMEOUT: parseInt(process.env.TIMEOUT),
  database: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dbdatabase: process.env.DB_DATABASE,
    dbhost: process.env.DB_HOST,
    dbport: process.env.DB_PORT,
  },
  NAMEPROCEDURE: process.env.NAME_PROCEDURE,
  APM: {
    HOST: process.env.ELASTIC_APM_SERVER_URL,
    ENVIRONMENT: process.env.ELASTIC_APM_ENVIRONMENT,
    ISACTIVE: process.env.ELASTIC_APM_ACTIVE,
  },
}));
