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
	if(index<0&&index>=this.length)
            return;

        var a = this.head;
        if(index==0){
            this.head=this.head.next;

            if(this.length>1) {
                this.head.prev = null;
            }
            else {
                this.tail = null;
            }
        }else
            if(index==this.length-1){
                this.tail=this.tail.prev;
                this.tail.next=null;
            }
            else {
                for (var i = 0; i < index; i++) {
                    a = a.next;
                }

                var before = a.prev;
                var after = a.next;
                before.next = after;
                after.prev = before;
            }
        this.length--;
    }

    moveToFront(node) {
	   if(this.length<2||this.head==node)
            return;

        var a=this.head;
        while(a){
            if(a==node){
                while(true){
                    var tmp=a.data;
                    a.data=a.prev.data;
                    a.prev.data=tmp;
                    a=a.prev;
                    if(a==this.head)
                        return;
                }
                //return;
            }
            a=a.next;
        }
    
    }

    reorganize(data) {
	if(this.length==0)
		return false;
	var nnode = this node;
	for(var i=0;i<this.length;i++)
	{
		if(nnode.data == data)
			{
				this.moveToFront(nnode);
				return true;
			}
		nnode = nnode.next;
	}
	return false;
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
