class StackWithPrivacy {
  // new way of creating private variables
  #length = 0;
  #data = {};
  #maxSize = Infinity;

  constructor(maxSize = Infinity) {
    this.#maxSize = maxSize;
  }

  push(ele) {
    if (this.#maxSize <= this.#length) {
      throw 'Stack is full';
    }
    return (this.#data[this.#length++] = ele);
  }

  pop() {
    if (this.#length) {
      const ele = this.#data[this.#length - 1];
      delete this.#data[this.#length-- - 1];
      return ele;
    }
  }

  clear() {
    while (this.#length) {
      delete this.#data[this.#length-- - 1];
    }
  }

  peek() {
    return this.#data[this.#length - 1];
  }

  isFull() {
    return isFinite(this.#maxSize) && this.#maxSize >= this.#length;
  }

  isEmpty() {
    return this.#length === 0;
  }
}

class StackWithConstructorPrivacy {
  constructor(maxSize = Infinity) {
    let length = 0;
    const data = {};

    this.push = (ele) => {
      if (maxSize <= length) {
        throw 'Stack is full';
      }
      return (data[length++] = ele);
    };
    this.pop = () => {
      if (length) {
        const ele = data[length - 1];
        delete data[length-- - 1];
        return ele;
      }
    };
    this.clear = () => {
      while (length) {
        delete data[length-- - 1];
      }
    };

    this.peek = () => {
      return data[length - 1];
    };

    this.isFull = () => {
      return isFinite(maxSize) && maxSize >= length;
    };

    this.isEmpty = () => {
      return length === 0;
    };
  }
}
