// /**
//  * 单链表
//  * 插入、删除、查找
//  */

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
}

const llist = new LinkedList();
llist.append('xiaohua');
llist.append('bang');
llist.append('chun');
llist.display();
