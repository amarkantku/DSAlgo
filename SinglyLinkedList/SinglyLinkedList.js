import Node from './Node'

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        const node = new Node(element);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    print() {
        let current = this.head;
        let string = '';
        while(current) {
            string += current.element + ' ';
            current = current.next;
        }
        console.log(string);
    }

    count() {
        return this.size || 0;
    }
}

const SLinkedList = new SinglyLinkedList();
SLinkedList.add(1);
SLinkedList.add(2);
SLinkedList.add(3);
SLinkedList.add(4);
SLinkedList.print();
console.log('Size :', SLinkedList.count());
export default SinglyLinkedList;
