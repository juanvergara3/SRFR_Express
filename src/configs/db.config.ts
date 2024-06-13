const dbConfig = {
    // server: '192.168.5.44', //This is for when the code is run as a container, localhost won't work, it needs the ip of the machine hosting the database.
    server: 'localhost',
    port: 1433,
    user: 'srfrUser',
    password: '0221',
    database: 'SRFR_DB',
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
    connectionTimeout: 150000,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
  };

export { dbConfig };
