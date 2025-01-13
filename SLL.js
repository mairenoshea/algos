class Node {
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}

class SLL { 
    constructor() {
        this.head=null;
    }
    addFront(value) {
        let new_node=new Node(value);
        if(!this.head) {
            this.head=new_node;
            return this.head;
        }
        new_node.next=this.head;
        this.head=new_node;
        return this.head;
    }

    removeFront() {
        if(!this.head) {
            return null;
        }
        let removed_node=this.head;
        
        this.head=this.head.next;
        
        removed_node.next=null;
        return this.head;

    }

    front() {
        if(!this.head) {
            return null;
        }

        return this.head.data;
    }

    contains(value) {
        if(this.head==null) {
            return false;
        }
        let runner=this.head;
        while(runner!==null) {
            if(runner.data=value) {
                return true
            }
            runner=runner.next
        }
        return false;
    }

    length() {
        let length=0;
        let runner=this.head;
        while(runner!==null) {
            length++;
            runner=runner.next;
        }
        return length;
    }
}

SLL1 = new SLL();

console.log(SLL1.length());