#!/usr/bin/env node
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var hash_tables_1 = require("../hash-tables");
var hashTable = new hash_tables_1.default();
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
var root = hashTable.get_hashed_item("root");
var queue = __spreadArray([], root, true);
var target = "peggy";
while (queue.length !== 0) {
    // pop off first item
    var dequeued = queue.shift();
    if (dequeued === target) {
        console.log("".concat(dequeued, " is here!"));
        break;
    }
    console.log(dequeued);
    console.log(queue);
    var neighbors = hashTable.get_hashed_item(dequeued);
    if (neighbors.length !== 0) {
        for (var n = 0; n < neighbors.length; n++) {
            queue.push(neighbors[n]);
        }
    }
}
