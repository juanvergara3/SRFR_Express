import { dbConfig } from '../configs/db.config';
import { connect, ConnectionPool, Request } from 'mssql';

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

// async function runQueryAsync(query:string) {
//   try {
//     return globalPool.request().query(query, (err, recordset) => {
//       return recordset;
//     });

//     // globalPool.query(query, (err, recordset) => {
//     //   return recordset;
//     // });

//   } catch (error:any) {
//     console.log(error.message);
//   }
// }


// function(req, res) {
//   req.app.locals.db.query('SELECT TOP 10 * FROM table_name', function(err, recordset) {
//     if (err) {
//       console.error(err)
//       res.status(500).send('SERVER ERROR')
//       return
//     }
//     res.status(200).json({ message: 'success' })
//   })
// }

async function initPoolAsync() {
  return await globalPool.connect();
}

async function closePoolAsync() {
  globalPool.close();
}

export { globalPool, initPoolAsync, runQueryAsync, closePoolAsync };
