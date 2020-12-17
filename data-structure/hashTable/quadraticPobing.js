function HashTable(size) {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
}

// quadratic probing
HashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw 'hash table is full';
  var hashedIndex = this.hash(key),
    squareIndex = 1;
  while (this.keys[hashedIndex] != null) {
    hashedIndex += Math.pow(squareIndex, 2);
    hashedIndex = hashedIndex % this.size;
    squareIndex++;
  }
  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
};
HashTable.prototype.get = function (key) {
  var hashedIndex = this.hash(key),
    squareIndex = 1;
  while (this.keys[hashedIndex] != key) {
    hashedIndex += Math.pow(squareIndex, 2);
    hashedIndex = hashedIndex % this.size;
    squareIndex++;
  }
  return this.values[hashedIndex];
};

HashTable.prototype.initArray = function (size) {
  return Array(size).fill(null);
};

HashTable.prototype.hash = function (key) {
  if (!Number.isInteger(key)) throw 'must be int';
  return key % this.size;
};
