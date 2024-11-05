import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setProject('671a199f00102406107a'); // Your project ID

export const account = new Account(client);
export default client;

// const promise = account.create('001', 'email@example.com', '');
// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });