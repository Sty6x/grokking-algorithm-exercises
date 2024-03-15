#!/usr/bin/env node
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Keep track of the first and last node such that insertion and deletion should take O(1) or constant time or constant time.
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.getInstance = function () {
        if (LinkedList.instance === null) {
            LinkedList.instance = new LinkedList();
            return LinkedList.instance;
        }
        return LinkedList.instance;
    };
    LinkedList.prototype.insertNode = function (node) {
        if (this.head === null) {
            this.head = __assign({}, node);
            return;
        }
    };
    LinkedList.instance = null;
    return LinkedList;
}());
var LinkListNode = /** @class */ (function () {
    function LinkListNode(data) {
        this.data = data;
        this.nextNode = null;
    }
    return LinkListNode;
}());
var newHead = new LinkListNode(1);
var linkedList = LinkedList.getInstance();
linkedList === null || linkedList === void 0 ? void 0 : linkedList.insertNode(newHead);
console.log(linkedList === null || linkedList === void 0 ? void 0 : linkedList.head);
