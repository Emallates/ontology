var node = require('./lib/node');

function ontology(opts) {
	this.map = {};/*TODO opts.map:true|arr*/
	this.addChild = function (_node, pId) {
		this.map[_node.id] = new node(_node, this.map[pId]);
		return this;
	}

	this.addCounts = function (pId, counts) {
		if(this.map[pId]) this.map[pId].addCounts(counts);
		return this;
	}

	this.subCounts = function (pId, counts) {
		if(this.map[pId]) this.map[pId].subCounts(counts);
		return this;
	}
	/*TODO it can delete node from map, but NOT from childs*/
	this.removeChild = function (nId) {
		if(this.map[nId]){
			this.map[nId].remove();
			delete this.map[nId];
		}return this;
	}

	this.getMap = function () {
		return JSON.parse(JSON.stringify(this.map))
	}
}

module.exports = ontology;