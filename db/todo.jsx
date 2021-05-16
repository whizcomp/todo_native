import * as SQlite from "expo-sqlite";
const db = SQlite.openDatabase("todo");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE  IF NOT EXISTS todo(id INTEGER PRIMARY KEY NOT NULL,title STRING NOT NULL,complete BOOLEAN NOT NULL DEFAULT FALSE);",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
export const insert = (title,complete)=>{
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            "INSERT INTO todo(title,complete) VALUES(?,?)",
            [title,complete],
            (_, result) => {
              resolve(result);
            },
            (_, err) => {
              reject(err);
            }
          );
        });
      });
      return promise;
}
export const fetch = ()=>{
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            "SELECT * FROM todo",
            [],
            (_, result) => {
              resolve(result);
            },
            (_, err) => {
              reject(err);
            }
          );
        });
      });
      return promise;
}