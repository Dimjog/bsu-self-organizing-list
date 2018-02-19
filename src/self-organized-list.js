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
	return null;
    }

    toArray() {
	var Arr = new Array(this.length);
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
	  if(this.length<2||this.head==node)
		return null;
	var nnode = this.head;
	while(this.length)
	{
		if(nnode==node)
		{
			while(true)
			{
				var buf = nnode.data;
				nnode.data = nnode.prev.data;
				nnode.prev.data = buf;
				nnode = nnode.prev;
				if(nnode==this.head)
					return null;
			}
		}
		nnode = nnode.next;
	}
    }

    reorganize(data) {
	if(this.length==0)
            return false;

        var i=0;
        var a=this.head;
        for(var i=0;i<this.length;i++){
            if(a.data==data){
                this.moveToFront(a);
                return true;
            }
            a=a.next;
        }

        return false;  
    }


module.exports = {
    SelfOrganizedList,
    Node
};
