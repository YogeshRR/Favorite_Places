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
          "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
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
          console.log("I am at success while fetching datase");
          //console.log(result);
          const insertedPlaces = [];
          // result.rows._array[5];
          //console.log(tempArray["title"]);
          // console.log(tempArray);
          for (i = 0; i < result.rows._array.length; i++) {
            console.log("I am here at Fetching data.....");
            console.log(i);
            console.log(result.rows._array[i]["address"]);
            insertedPlaces.push(
              new Place(
                result.rows._array[i]["title"],
                result.rows._array[i]["imageUrl"],
                {
                  address: result.rows._array[i]["address"],
                  lat: result.rows._array[i]["lat"],
                  long: result.rows._array[i]["long"],
                },
                result.rows._array[i]["id"]
              )
            );
          }
          //console.log(insertedPlaces);
          resolve(insertedPlaces);
        },
        (_, error) => {
          console.log("I am at error while fetching datase");
          console.log(error);
          reject(error);
        }
      );
    });
  });

  return promise;
}
