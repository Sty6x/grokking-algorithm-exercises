#!/usr/bin/env node
// HASH TABLE

// make a todo list using a hash table as an in-memory database.
export default class HashTable {
  hash_arr: Array<[key: number, data: any]>;
  constructor() {
    this.hash_arr = [];
  }

  private additive_hashing(input: string) {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      hash += input.charCodeAt(i);
    }
    return hash;
  }

  check_item(item: string) {
    const hash = this.additive_hashing(item);
    return this.hash_arr[hash] === undefined ? false : true;
  }

  set_hashed_item(input: string, data: any) {
    const hash = this.additive_hashing(input);
    if (!this.check_item(input)) {
      this.hash_arr[hash] = [hash, data];
      return;
    }
  }
  get_hashed_item(input: string) {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      hash += input.charCodeAt(i);
    }
    return this.hash_arr[hash];
  }
}
