#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hash_tables_1 = require("../hash-tables");
var hashTable = new hash_tables_1.default();
hashTable.set_hashed_item("you", ["alice", "bob", "claire"]);
hashTable.set_hashed_item("bob", ["anuj", "peggy"]);
hashTable.set_hashed_item("alice", ["peggy"]);
hashTable.set_hashed_item("claire", ["thom", "jonny"]);
hashTable.set_hashed_item("anuj", []);
hashTable.set_hashed_item("peggy", []);
hashTable.set_hashed_item("thom", []);
hashTable.set_hashed_item("jonny", []);
// go through each neighboring node from the root node "you"
// neighboring of you ["alice","bob","claire"]
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
var you = hashTable.get_hashed_item("you");
console.log(you);
for (var i = 0; i <= you[1].length - 1; i++) {
    if (you[1][i] !== "jonny") {
        console.log(you[1].length);
        var dequeuedNode = you[1].shift();
        var neighbors = hashTable.get_hashed_item(dequeuedNode)[1];
        console.log({ dequeuedNode: dequeuedNode, neighbors: neighbors });
        if (neighbors.length !== 0) {
            for (var n = 0; n < neighbors.length; n++) {
                you[1].push(neighbors[n]);
            }
            console.log({ you: you });
        }
    }
    else {
        console.log(you[1][i]);
    }
}
console.log(you);
