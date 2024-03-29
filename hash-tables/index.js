#!/usr/bin/env node
"use strict";
// HASH TABLE
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
// make a todo list using a hash table as an in-memory database.
var HashTable = /** @class */ (function () {
    function HashTable() {
        this.hash_arr = [];
    }
    HashTable.prototype.additive_hashing = function (input) {
        var hash = 0;
        for (var i = 0; i < input.length; i++) {
            hash += input.charCodeAt(i);
        }
        return hash;
    };
    HashTable.prototype.check_item = function (item) {
        var hash = this.additive_hashing(item);
        return this.hash_arr[hash] === undefined ? false : true;
    };
    HashTable.prototype.set_hashed_item = function (input, data) {
        var hash = this.additive_hashing(input);
        if (!this.check_item(input)) {
            this.hash_arr[hash] = __spreadArray([], data, true);
            return;
        }
    };
    HashTable.prototype.get_hashed_item = function (input) {
        var hash = 0;
        for (var i = 0; i < input.length; i++) {
            hash += input.charCodeAt(i);
        }
        return this.hash_arr[hash];
    };
    return HashTable;
}());
exports.default = HashTable;
