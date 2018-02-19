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
		this.head = node;
		this.tail = node;
	}
	this.length++;
    }

    size() {
	return this.length;
    }

    at(index) {
	if(index<0||index>=this.length)
		return null;
	var neednode = this.head
	for(var i=0;i<this.length;i++)
		{
			if(i==index)
				return neednode.data;
			neednode = neednode.next;
		}
    }

    findNode(data) {
var nnode = this.head;
	for(var i=0;i<this.length;i++)
	{
		if(nnode.data==data)
			return nnode;
		nnode=nnode.next;
	}
	//return null;
    }

    toArray() {
	var Arr = [this.length];
	var nnode =  this.head;
	for (var i = 0; i < this.length ; i++)
	{
		Arr[i]=nnode.data;
		nnode= nnode.next;
	}
	return Arr;
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
