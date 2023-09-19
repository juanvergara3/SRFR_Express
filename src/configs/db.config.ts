const dbConfig = {
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
