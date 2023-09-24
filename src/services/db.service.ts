import { dbConfig } from '../configs/db.config';
import { ConnectionPool, Request, Int } from 'mssql';

const globalPool = new ConnectionPool(dbConfig);

globalPool.on('error', (err:any) => {
  console.log(err.message);
});

globalPool.on('connected', () => {
  console.log('Connected to db.');
});

globalPool.on('infoMessage', (info:any) => {
  console.log(`${info.number} : ${info.message}.`);
});

globalPool.on('errorMessage', (info:any) => {
  console.log(`${info.number} : ${info.message}.`);
});

globalPool.on('end', () => {
  console.log('Connection closed.');
});

async function runQueryAsync(query:string) {

  const result = await globalPool.request().query(query);

  return result;
}

async function executeProcedureAsync(procedureName:string, params?:{name:string, value:any}[]) {

  const request = new Request(globalPool);

  if (params) {

    params.forEach((field) => {
      request.input(field.name, Int, field.value);
    })
  } 
    
  return await request.execute(procedureName);
}

async function initPoolAsync() {
  return await globalPool.connect();
}

async function closePoolAsync() {
  globalPool.close();
}

export { globalPool, initPoolAsync, closePoolAsync, runQueryAsync, executeProcedureAsync };
