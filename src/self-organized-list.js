class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
	this.length = 0;
    }

    insert(data) {
        var node = new Node(data);
	if(this.length!=0)
	{
		this.tail.next = node;
		node.prev = this.tail;
		this.tail = node;

		
	}else{
		this.head = head;
		this.tail = tail;
	}
	this.length++;
	
    }

    size() {
		//return this.length;
    }

    at(index) {

    }

    findNode(data) {

    }

    toArray() {

    }

    removeAt(index) {

    }

    moveToFront(node) {

    }

    reorganize(data) {

    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
