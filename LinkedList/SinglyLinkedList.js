/**
 * 单链表
 * 插入、删除、查找
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  // 向链表末尾追加节点
  append(data) {
    const nextNode = new Node(data);
    // 遍历链表，得到末尾节点
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    // 末尾节点指向新节点
    currentNode.next = nextNode;
  }

  // 遍历显示所有节点
  display() {
    let currentNode = this.head.next; // 忽略头指针的值
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  // 根据值查找
  findByValue(value) {
    let currentNode = this.head.next;
    while (currentNode !== null) {
      if (currentNode.data === value) {
        // console.log(currentNode);
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    // console.log(currentNode);
    return -1;
  }

  // 根据index查找，下标从0开始
  findByIndex(index) {
    if (Math.floor(index) !== index || index < 0) {
      throw new Error('错误的index');
    }
    let currentNode = this.head;
    for (let i = 0; i <= index; i++) {
      if (currentNode.next === null) {
        return -1;
      }
      currentNode = currentNode.next;
    }
    // console.log(currentNode);
    return currentNode;
  }

  // 在指定值后插入节点
  insert(newData, data) {
    const currentNode = this.findByValue(data);
    if (currentNode === -1) {
      throw new Error('未找到插入位置');
    }
    const newNode = new Node(newData);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // 查找前一个
  findPrev(value) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.next.data !== value) {
      currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
  }

  // 删除节点
  remove(value) {
    const prevNode = this.findPrev(value);
    if (prevNode === -1) {
      console.log(`未找到值为${value}的节点`);
    }
    prevNode.next = prevNode.next.next;
  }
}

// Test
const LList = new LinkedList();
LList.append('chen');
LList.append('curry');
LList.append('sang');
LList.append('zhao'); // chen -> curry -> sang -> zhao
// console.log('-------------insert item------------');
// LList.insert('qian', 'chen'); // 首元素后插入
// LList.insert('zhou', 'zhao'); // 尾元素后插入
// LList.display(); // chen -> qian -> curry -> sang -> zhao -> zhou
// console.log('-------------remove item------------');
// LList.remove('curry');
// LList.display(); // chen -> qian -> sang -> zhao -> zhou
// console.log('-------------find by item------------');
// LList.findByValue('chen');
// console.log('-------------find by index------------');
// LList.findByIndex(2);
console.log('-------------与头结点同值元素测试------------');
LList.insert('head', 'sang');
LList.display(); // chen -> qian -> sang -> head -> zhao -> zhou
console.log(LList.findPrev('head')); // sang
LList.remove('head');
LList.display(); // chen -> qian -> sang -> zhao -> zhou
