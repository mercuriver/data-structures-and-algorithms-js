const deleteHeadNode = (list, target) => {
  let prev = list.head;

  while (prev.value === target) {
    list.shift();
    prev = list.head;
  }
};

const deleteTailNode = (list, target) => {
  if (list.tail.value === target) {
    list.pop();
  }
};

const deleteMiddleNode = (list, target) => {
  deleteHeadNode(list, target);

  let prev = list.head;
  let current = prev?.next || { next: null };

  while (current.next !== null) {
    if (current.value === target) {
      if (current.next === null) {
        current = null;
      } else {
        current = current.next;
      }
      prev.next = current;
    }
    prev = current;
    current = current.next;
  }

  deleteTailNode(list, target);

  return list;
};

export default deleteMiddleNode;
