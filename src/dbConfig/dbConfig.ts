import mysql from 'mysql2/promise'

const sqlDB = async () => {
    const db = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'nextp1',
      });
     
    return db;
} 
export default sqlDB;