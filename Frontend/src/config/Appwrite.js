import { Client, Account , Databases} from 'appwrite';
 const client = new Client();

 client
 .setEndpoint('https://cloud.appwrite.io/v1')
 .setProject('67122d8d002f2ad029a5'); 

 export const account = new Account(client);
 export const database = new Databases(client ,"671232440008e836a648");