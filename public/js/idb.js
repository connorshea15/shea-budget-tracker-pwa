// db holds db connection
let db;
// establish a connection to IndexedDB database called 'pizza_hunt' and set it to version 1
const request = indexedDB.open('budget', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    // object store created called new_transaction 
    db.createObjectStore('new_transaction', { autoIncrement: true });
  };
