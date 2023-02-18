class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
    }
    addFront(value){
        if(this.head == null){
            this.head = new Node(value)
            return this
        }
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        return this
    }
    removeFront(){
        if(this.head == null){
            return null
        }
        let removed = this.head
        this.head = this.head.next
        removed.next = null
        return removed
    }
    frontValue(){
        if(this.head == null){
            return null
        }
        return this.head.data
    }
    contains(value){
        if(this.head == null){
            return null
        }
        let runner = this.head
        let found = false
        while(runner != null){
            if(runner.data == value){
                found = true
                break
            }
            runner = runner.next
        }
        return found
    }
    length(){
        if(this.head == null){
            return null
        }
        let runner = this.head
        let size = 0
        while(runner != null){
            size = size + 1
            runner = runner.next
        }
        
        return size
    }
    display(){
        if(this.head == null){
            return null
        }
        let runner = this.head
        while(runner != null){
            console.log(runner.data)
            runner = runner.next
        }
    }
    max(){
        if(this.head == null){
            return null
        }
        let maxValue = this.head.data
        let runner = this.head
        while(runner != null){
            if (runner.data > maxValue){
                maxValue = runner.data
            }
            runner = runner.next
        }
        return maxValue
    }
    min(){
        if(this.head == null){
            return null
        }
        let minValue = this.head.data
        let runner = this.head
        while(runner != null){
            if(runner.data < minValue){
                minValue = runner.data
            }
            runner = runner.next
        }
        return minValue
    }
    average(){
        if(this.head == null){
            return null
        }
        let sum = 0
        let runner = this.head
        while(runner != null){
            sum += runner.data
            runner = runner.next
        }
        return sum/this.length()
    }
    lastValue(){
        if(this.head == null){
            return null
        }
        let runner = this.head
        while(runner != null){
            if(runner.next == null){
                return runner.data
            }
            runner = runner.next
        }
    }
    removeBack() {
        if (this.head == null) {
            return null;
        }
        if (this.head.next == null) {
            let oldHead = this.head;
            this.head = null;
            return oldHead.data;
        }
        let runner = this.head;
        while (runner.next.next != null) {
            runner = runner.next;
        }
        let oldTail = runner.next;
        runner.next = null;
        return oldTail.data;
    }  
    addBack(value){
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let runner = this.head;
        while (runner.next !== null) {
            runner = runner.next;
        }
        runner.next = newNode;
        return this
    }
    moveMinToFront(){
        if(this.head == null){
            return null
        }
        let value = this.min()
        if(this.head.data == value){
            return head
        }
        let runner = this.head
        let previous = null
        while(runner != null && runner.data != value){
            previous = runner
            runner = runner.next
        }
        previous.next = runner.next
        runner.next = this.head
        this.head = runner
        return this.head;
    }
    moveMaxToBack(){
        if (!this.head || !this.head.next) {
            return this.head;
        }
        let maxNode = this.head;
        let prevNode = null;
        let runner = this.head;
        let maxValue = this.max();
        while (runner) {
            if (runner.data === maxValue) {
                maxNode = runner;
                break;
            }
            prevNode = runner;
            runner = runner.next;
        }        
        if (!maxNode.next) {
        return this.head;
        }
        if (prevNode) {
            prevNode.next = maxNode.next;
        } else {
            this.head = maxNode.next;
        }
        runner = this.head;
        while (runner.next) {
        runner = runner.next;
        }
        runner.next = maxNode;
        maxNode.next = null;
        return this.head;
    }
}


class ListNode {
    constructor(val, next=null) {
        this.val = val;
        this.next = next;
    }
    removeSelf() {
        if (this.next) {
            this.val = this.next.val;
            this.next = this.next.next;
        } else {
            this.val = null;
        }
    }
}

function prependValue(head,value,before){
    let runner = head
    let previous = null
    while(runner != null && runner.val != before){
        previous = runner
        runner = runner.next
    }
    const newNode = new ListNode(value)
    if (runner !== null) {
        newNode.next = runner;
        if (previous !== null) {
            previous.next = newNode;
        } else {
            head = newNode;
        }
    } else {
        if (previous !== null) {
            previous.next = newNode;
        } else {
            head = newNode;
        }
    }
    return head 
}
function appendValue(head, value, after) {
    let runner = head;
    let found = false;
    while (runner !== null && !found) {
        if (runner.value === after) {
            found = true;
        } else {
        runner = runner.next;
        }
    }
    const newNode = new ListNode(value);
    if (found) {
        newNode.next = runner.next;
        runner.next = newNode;
    } else {
        let tail = head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
    }

    return head;
}


function removeValue(head, value) {
    if (head && head.value === value) {
        return head.next;
    }
    let runner = head;
    while (runner && runner.next) {
        if (runner.next.value === value) {
            runner.next = runner.next.next;
            return head;
        }
        runner = runner.next;
    }
    return head;
}


function splitOnValue(head, num) {
    let runner = head;
    let previous = null;

    while (runner !== null && runner.val !== num) {
        previous = runner;
        runner = runner.next;
    }

    if (runner === null) {
        return head;
    }

    if (previous === null) {
        head = null;
    } else {
        previous.next = null;
    }

    return runner;
}
function removeNegativeNodes(head) {
    while (head !== null && head.val < 0) {
        head = head.next;
    }

    let prev = head;
    let current = head;

    while (current !== null) {
        if (current.val < 0) {
            prev.next = current.next;
        } else {
            prev = current;
        }

        current = current.next;
    }

    return head;
}


    

function concatenateLists(head1, head2) {
    if (!head1) {
        return head2;
    }
    
    let current = head1;
    while (current.next !== null) {
        current = current.next;
    }
    
    current.next = head2;
    
    return head1;
}
    
function partition(head, value) {
    let lessHead = new ListNode(0);
    let greaterHead = new ListNode(0);
    let lessTail = lessHead;
    let greaterTail = greaterHead;
    let current = head;

    while (current !== null) {
        if (current.val < value) {
            lessTail.next = current;
            lessTail = current;
        } else {
            greaterTail.next = current;
            greaterTail = current;
        }
        current = current.next;
    }
    
    greaterTail.next = null;
    lessTail.next = greaterHead.next;

    return lessHead.next;
}

function getSecondToLastValue(head) {
    if (!head || !head.next) {
        return null; 
    }

    let current = head;
    while (current.next.next) {
        current = current.next;
    }

    return current.val;
}

function copyList(head) {
    if (!head) {
        return null;
    }
    
    const newHead = new ListNode(head.val);
    let current = head;
    let newCurrent = newHead;
    
    while (current.next) {
        current = current.next;
        newCurrent.next = new ListNode(current.val);
        newCurrent = newCurrent.next;
    }
    
    return newHead;
}



function removeNodes(head, lowVal, highVal) {
    if (!head) {
        return null;
    }
    while (head.val < lowVal) {
        head = head.next;
        if (!head) {
            return null;
        }
    }
    let current = head;
    while (current && current.next) {
        if (current.next.val < lowVal || current.next.val > highVal) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}

function findSecondLargest(head) {
    let largest = head.val;
    let secondLargest = head.next.val;
    let runner = head;

    while (runner) {
        if (runner.val > largest) {
            secondLargest = largest;
            largest = runner.val;
        } else if (runner.val > secondLargest && runner.val < largest) {
            secondLargest = runner.val;
        }
        runner = runner.next;
    }

    return secondLargest;
}


function zipLists(head1, head2) {
    const dummy = new ListNode(0);
    let current = dummy;
    let p1 = head1;
    let p2 = head2;

    while (p1 && p2) {
        current.next = p1;
        p1 = p1.next;
        current = current.next;
        current.next = p2;
        p2 = p2.next;
        current = current.next;
    }

    if (p1) {
        current.next = p1;
    } else if (p2) {
        current.next = p2;
    }

    return dummy.next;
}

function removeDuplicates(head) {
    if (!head || !head.next) {
        return head;
    }
    
    const uniqueValues = new Set();
    let current = head;
    let previous = null;
    
    while (current) {
        if (uniqueValues.has(current.val)) {
            previous.next = current.next;
        } else {
            uniqueValues.add(current.val);
            previous = current;
        }
        current = current.next;
    }
    
    return head;
}

