#!/usr/bin/env node

import HashTable from "../hash-tables";

const hashTable = new HashTable();

hashTable.set_hashed_item("root", ["alice", "bob", "claire"]);
hashTable.set_hashed_item("bob", ["anuj", "peggy"]);
hashTable.set_hashed_item("alice", ["peggy"]);
hashTable.set_hashed_item("claire", ["thom", "jonny"]);
hashTable.set_hashed_item("anuj", []);
hashTable.set_hashed_item("peggy", []);
hashTable.set_hashed_item("thom", []);
hashTable.set_hashed_item("jonny", []);

// go through each neighboring node from the root node "root"
// neighboring of root ["alice","bob","claire"]
// go through each node and see if they are "Jonny"
//
// first -> alice
// first -> bob
// first -> claire
//
// we know that for each neighbor there is no jonny, so if there is no jonny, insert each
// second connection nodes or enqueue them and dequeue the old ones
//
// second -> anuj and peggy
// second -> peggy
// second -> thom and jonny

const root = hashTable.get_hashed_item("root");
let queue:Array<string> = [...root]
const target:string = "peggy"



while (queue.length !== 0) {
  // pop off first item
  const dequeued = queue.shift() as string;
  if(dequeued === target){
    console.log(`${dequeued} is here!`)
    break;
  }
  console.log(dequeued)
  console.log(queue)
  const neighbors = hashTable.get_hashed_item(dequeued);
  if(neighbors.length !== 0){
    for(let n = 0; n < neighbors.length; n++){
      queue.push(neighbors[n]);
    }
  }

}


