//Create a class to create node/object
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//Create a class to create a linked-list
class LinkedList {
    constructor() {
        this.head = null;
    }

    //Create a function that tells us the size of the list
    listSize() {
        let count = 0
        let node = this.head
        while(node) {
            count++
            node = node.next
        }
        return count
    }

    //Create a function that will get the last node in the linked list
    getLast() {
        let lastNode = this.head
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        } 
        return lastNode
    }

    //Create a method to see if the list is empty or not
    isEmpty(){
        return this.listSize() === 0
    }
}


//Create node objects
let nodeA = new Node("A")
let nodeB = new Node("B")
let nodeC = new Node("C")

nodeA.next = nodeB
nodeB.next = nodeC


//Create a list
let list = new LinkedList()

//Assign nodeA to the head of the list
list.head = nodeA

console.log(nodeA)
console.log(nodeB)
console.log(nodeC)
console.log("----------")
console.log(JSON.stringify(list))
console.log(list.head.next.next.data)
console.log("size:", list.listSize())
console.log("Last node is:", list.getLast())
console.log(list.isEmpty())