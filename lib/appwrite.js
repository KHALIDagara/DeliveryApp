import { Client, Databases } from 'react-native-appwrite';
import {Platform } from "react-native";
const config ={  
  endpoint: "https://fra.cloud.appwrite.io/v1",
  projectId: "6818cf64003b58a69439",
  db: "6818d3ce0027a071e5c8",
  col:{ 
      colis: "6818d41e000225bd43b5",
   },
 };
const client = new Client()
  .setEndpoint(config.endpoint) // Replace with your Appwrite endpoint
  .setProject(config.projectId);              // Replace with your project ID
switch(Platform.OS){ 
       case "android":
            client.setPlatform("com.winning.another");
            break;
}
const database = new Databases(client);
export {database,config,client};
