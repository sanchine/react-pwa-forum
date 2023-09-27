const { Client, QueryResult } = require("pg");

const db_client = new Client({
  user: "admin",
  host: "localhost",
  database: "forum_app_db",
  password: "admin",
  port: 5432,
});

type DataBaseType = {
  db_client?: Object;
  connect: () => void;
  findOne: (username: string) => Object;
  createUser: (
    username: string,
    hash_password: string,
    avatar_bgcolor: string,
    avatar_letter: string
  ) => void;
};

const database: DataBaseType = {
  db_client: db_client,
  connect: async () => {
    try {
      db_client.connect();
    } catch (e) {
      console.log("db.ts: connect:", e);
    }
  },
  findOne: async (username: string) => {
    try {
      const data = await db_client.query(queryStrings.findOne(), [username]);
      const row = data.rows[0];
      return row;
    } catch (e) {
      console.log("db.ts: connect:", e);
    }
  },
  createUser: async (
    username: string,
    hash_password: string,
    avatar_bgcolor: string,
    avatar_letter: string
  ) => {
    try {
      const data = await db_client.query(queryStrings.createUser(), [
        username,
        hash_password,
        avatar_bgcolor,
        avatar_letter,
      ]);
    } catch (e) {
      console.log("db.ts: connect:", e);
    }
  },
};

const queryStrings = {
  findOne: () => {
    return `SELECT * FROM public."Users" WHERE nickname = $1;` as string;
  },
  createUser: () => {
    return `INSERT INTO public."Users" (nickname, hash_password, avatar_bgcolor, avatar_letter)
            VALUES ($1, $2, $3, $4);` as string;
  },
};

module.exports = database;
