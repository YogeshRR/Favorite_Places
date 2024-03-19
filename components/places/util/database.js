import * as SQLite from "expo-sqlite";
import { Place } from "../../../model/place";
const database = SQLite.openDatabase("places.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                imageUri TEXT NOT NULL,
                address TEXT NOT NULL,
                lat REAL NOT NULL,
                lng REAL NOT NULL
              )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

/*export function insertPlace(place) {
  console.log("I am called at database");
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          console.log(place.title),
          place.imageUrl,
          console.log(place.imageUrl),
          place.address,
          console.log(place.address),
          place.location.lat,
          console.log(place.location.lat),
          place.location.long,
          console.log(place.location.long),
        ],
        (_, result) => {
          console.log("I am called at success");
          console.log(result);
          resolve(result);
        },
        (_, error) => {
          console.log("I am called at error");
          reject(error);
        }
      );
    });
    console.log("I am called at Promise");
  });
  console.log(promise);
  return promise;
}*/

export function insertPlace(place) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUrl,
          place.address,
          place.location.lat,
          place.location.long,
        ],
        (_, result) => {
          console.log("I am at success INSERT");
          console.log(result);
          resolve(result);
        },
        (_, error) => {
          console.log(error);
          console.log("I am at error");
          reject(error);
        }
      );
    });
  });

  return promise;
}
export function fetchDatabase() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places`,
        [],
        (_, result) => {
          const insertedPlaces = [];
          for (i = 0; i < result.rows._array.length; i++) {
            insertedPlaces.push(
              new Place(
                result.rows._array[i]["title"],
                result.rows._array[i]["imageUri"],
                {
                  address: result.rows._array[i]["address"],
                  lat: result.rows._array[i]["lat"],
                  long: result.rows._array[i]["long"],
                },
                result.rows._array[i]["id"]
              )
            );
          }
          resolve(insertedPlaces);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchPlaceListDetail(id) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places WHERE id = ?",
        [id],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}
