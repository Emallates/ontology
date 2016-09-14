function node(newNode, parent) {
	this._node = newNode;
	this.parent = parent;

	this.addCounts = function (counts) {
		this._node.total += counts;
		if(this.parent) this.parent.addCounts(counts)
	}

	this.subCounts = function (counts) {
		this._node.total -= counts;
		if(this.parent) this.parent.subCounts(counts)
	}

	this.remove = function () {
		if(this.parent){
			var ind = this.parent.childs.indexOf(this._node);
			// console.log('ind => ', ind);
			if(ind > -1) this.parent.childs.splice(ind, 1)
			this.parent.subCounts(this._node.total)
		}
	}

	if(this.parent){
		this.parent.childs = this.parent.childs || [];
		this.parent.childs.push(newNode);
		this.parent.addCounts(newNode.total);
	}
}