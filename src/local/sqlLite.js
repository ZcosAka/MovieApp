import SQLite from 'react-native-sqlite-storage';

export const db = SQLite.openDatabase(
  {
    name: 'users.db',
    location: 'default',
    createFromLocation: 1,
  },
  () => {
    console.log('Connect SQLite Success');
  },
  (e) => {
    console.log(e);
  }
);

export const createTableUsers = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS' +
        'Users' +
        '(ID INTEGER PRIMARY KEY AUTOINCREMENT,user_id TEXT, full_name TEXT, email TEXT,password TEXT, access_token TEXT);',
      (error) => console.log(error)
    );
  });
};

export const setUser = async (
  user_id,
  full_name,
  email,
  password,
  access_token
) => {
  await db.transaction(async (tx) => {
    await tx.executeSql(
      'INSERT INTO Users (user_id,full_name,email,password,access_token) VALUES (?, ?, ?, ?, ?)',
      [user_id, full_name, email, password, access_token],
      (error) => console.log(error)
    );
  });
};

export async function removeUser() {
  await db.transaction(async (tx) => {
    await tx.executeSql('DELETE FROM Users'), [], (error) => console.log(error);
  });
}
