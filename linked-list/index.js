#!/usr/bin/env node
"use strict";
// Keep track of the first and last node such that insertion and deletion should take O(1) or constant time or constant time.
class LinkedList {
    head;
    static instance = null;
    constructor() {
        this.head = null;
    }
    static getInstance() {
        if (LinkedList.instance === null) {
            LinkedList.instance = new LinkedList();
            return LinkedList.instance;
        }
        return LinkedList.instance;
    }
    insertNode(node) {
        if (this.head === null) {
            this.head = { ...node };
            return;
        }
    }
}
class LinkListNode {
    data;
    nextNode;
    constructor(data) {
        this.data = data;
        this.nextNode = null;
    }
}
const newHead = new LinkListNode(1);
const linkedList = LinkedList.getInstance();
linkedList?.insertNode(newHead);
