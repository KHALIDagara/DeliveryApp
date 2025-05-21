import { enablePromise, openDatabase } from "react-native-sqlite-storage";

enablePromise(true);


export const connectToDatabase = async () => {
  try {
    console.log("Attempting to connect to database...");
    const db = await openDatabase(
      { name: "another.db", location: "default" },
      () => {
        console.log("Database connection successful!");
      },
      (error) => {
        console.error("Error opening database:", error);
      }
    );
    return db;
  } catch (error) {
    console.error("Error in connectToDatabase:", error);
    throw Error("Could not connect to the database");
  }
};
